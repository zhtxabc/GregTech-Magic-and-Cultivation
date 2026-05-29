// =======================================================
// 右键方块打开界面 + 右键物品消耗并安全传送
// 文件位置：kubejs/server_scripts/right_click_menu_and_teleport.js
// 适用：Minecraft 1.20.1 Forge / KubeJS 6
// =======================================================

const SimpleMenuProvider = Java.loadClass("net.minecraft.world.SimpleMenuProvider");
const CraftingMenu = Java.loadClass("net.minecraft.world.inventory.CraftingMenu");
const SmithingMenu = Java.loadClass("net.minecraft.world.inventory.SmithingMenu");
const Optional = Java.loadClass("java.util.Optional");


// =======================================================
// 一、方块右键打开界面配置
// =======================================================
//
// 小白说明：
// 想新增“右键某个方块打开某个界面”，只需要在下面数组里继续加配置。
//
// block：被右键的方块 ID
// title：打开界面顶部显示的名字
// menu：要打开的菜单类型
//
// 当前配置：
// 金块 -> 打开工作台
// 钻石块 -> 打开锻造台
//
const 方块交互配置 = [
    {
        block: "kubejs:tofu_crafting_table",
        title: Text.translate("container.crafting"),
        menu: "crafting"
    },
    {
        block: "kubejs:tofu_smithing_table",
        title: Text.translate("container.upgrade"),
        menu: "smithing"
    }
];


// =======================================================
// 二、右键物品传送配置
// =======================================================
//
// 小白说明：
// 想新增更多传送物品，只需要在下面数组里继续加配置。
//
// item：右键使用的物品
// targetDimension：目标维度
// consume：生存模式是否消耗 1 个物品，创造模式永远不消耗
// searchRadius：寻找安全地面的半径
// fallbackY：找不到安全地面时，创建黑曜石平台的高度
//
// 当前配置：
// 下界之星 -> 末地
// 下界合金锭 -> 下界
//
const 物品传送配置 = [
    {
        item: "kubejs:the_aether",
        targetDimension: "aether:the_aether",
        consume: true,
        searchRadius: 16,
        fallbackY: 80
    },
    {
        item: "kubejs:the_aether1",
        targetDimension: "aether:the_aether",
        consume: false,
        searchRadius: 16,
        fallbackY: 80
    },
    {
        item: "kubejs:sweet_lands",
        targetDimension: "sweet_calamity:sweet_lands",
        consume: true,
        searchRadius: 16,
        fallbackY: 80
    },
    {
        item: "kubejs:sweet_lands1",
        targetDimension: "sweet_calamity:sweet_lands",
        consume: false,
        searchRadius: 16,
        fallbackY: 80
    },
    {
        item: "kubejs:tofu_world",
        targetDimension: "tofucraft:tofu_world",
        consume: true,
        searchRadius: 16,
        fallbackY: 80
    },
    {
        item: "kubejs:tofu_world1",
        targetDimension: "tofucraft:tofu_world",
        consume: false,
        searchRadius: 16,
        fallbackY: 80
    },
    {
        item: "kubejs:overworld",
        targetDimension: "minecraft:overworld",
        consume: true,
        searchRadius: 16,
        fallbackY: 80
    },
    {
        item: "kubejs:overworld1",
        targetDimension: "minecraft:overworld",
        consume: false,
        searchRadius: 16,
        fallbackY: 80
    },
];


// =======================================================
// 三、方块菜单工具函数
// =======================================================
//
// 原版工作台、锻造台界面会检查当前位置是不是对应功能方块。
// 但这里是右键金块、钻石块打开界面，原版检查可能会失败。
// 所以这里把失败的检查结果强制改成 true，避免界面秒关。
//
function 创建始终有效的菜单访问点(level, pos) {
    return bifunc => {
        let result = bifunc.apply(level, pos);

        if (String(result) === "false") {
            return Optional.of(true);
        }

        return Optional.ofNullable(result);
    };
}


function 创建菜单(menuType, containerId, playerInventory, access) {
    if (menuType === "crafting") {
        return new CraftingMenu(containerId, playerInventory, access);
    }

    if (menuType === "smithing") {
        return new SmithingMenu(containerId, playerInventory, access);
    }

    return null;
}


// =======================================================
// 四、右键方块事件
// =======================================================

BlockEvents.rightClicked(e => {
    let blockId = String(e.block.id);

    let config = 方块交互配置.find(c => c.block === blockId);

    if (!config) {
        return;
    }

    // 潜行右键不触发，方便玩家正常放方块或做其他操作。
    if (e.player.isCrouching()) {
        return;
    }

    e.player.swing();

    if (e.level.isClientSide()) {
        return;
    }

    let access = 创建始终有效的菜单访问点(e.level, e.block.pos);

    let provider = new SimpleMenuProvider((containerId, playerInventory, playerEntity) => {
        return 创建菜单(config.menu, containerId, playerInventory, access);
    }, config.title);

    e.player.openMenu(provider);

    e.cancel();
});


// =======================================================
// 五、安全传送判断
// =======================================================
//
// 安全点优先级：
// 1. 优先寻找目标维度附近的真实地面。
// 2. 真实地面要求脚下 3x3 都是安全实体方块。
// 3. 玩家站立区域要求 3x3 范围，高 4 格全部为空气。
// 4. 如果半径内没有安全地面，才创建 3x3 黑曜石平台。
// =======================================================

function 是空气方块(block) {
    let id = String(block.id);

    return id === "minecraft:air"
        || id === "minecraft:cave_air"
        || id === "minecraft:void_air";
}


function 是危险方块(block) {
    let id = String(block.id);

    return id === "minecraft:lava"
        || id === "minecraft:fire"
        || id === "minecraft:soul_fire"
        || id === "minecraft:magma_block"
        || id === "minecraft:cactus"
        || id === "minecraft:sweet_berry_bush"
        || id === "minecraft:powder_snow";
}


// 判断脚下这个方块能不能当安全地面。
// 这里不强制必须是黑曜石，石头、泥土、末地石、下界岩等真实地面都可以。
function 是安全地面方块(block) {
    if (是空气方块(block)) {
        return false;
    }

    if (是危险方块(block)) {
        return false;
    }

    let id = String(block.id);

    // 液体不能当安全地面。
    if (id === "minecraft:water" || id === "minecraft:lava") {
        return false;
    }

    return true;
}


// 判断当前位置是否是安全的真实地面落点。
//
// x y z 是玩家脚的位置。
// y - 1 是脚下地面。
// y 到 y + 3 是玩家和头顶的安全空间。
function 是安全真实地面点(level, x, y, z) {
    // 脚下 3x3 必须都是安全地面。
    // 这样避免玩家传送后半边悬空或旁边就是岩浆。
    for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
            let floorBlock = level.getBlock(x + dx, y - 1, z + dz);

            if (!是安全地面方块(floorBlock)) {
                return false;
            }
        }
    }

    // 上方 3x3，高 4 格必须全部为空气。
    // 高 4 格是为了防止玩家卡头，也方便骑乘、体型变化或模组判定。
    for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
            for (let dy = 0; dy <= 3; dy++) {
                let spaceBlock = level.getBlock(x + dx, y + dy, z + dz);

                if (!是空气方块(spaceBlock)) {
                    return false;
                }
            }
        }
    }

    return true;
}


// 创建黑曜石安全平台。
// 只有在附近找不到真实安全地面时才会调用。
//
// 结构：
// y - 1：3x3 黑曜石平台
// y 到 y + 3：3x3 空气安全区域
function 创建黑曜石安全平台(level, x, y, z) {
    for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
            level.getBlock(x + dx, y - 1, z + dz).set("minecraft:obsidian");
        }
    }

    for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
            for (let dy = 0; dy <= 3; dy++) {
                level.getBlock(x + dx, y + dy, z + dz).set("minecraft:air");
            }
        }
    }

    return {
        x: x,
        y: y,
        z: z,
        createdPlatform: true
    };
}


// 根据目标维度决定搜索高度。
// 下界要避开底部虚空和顶部基岩层。
// 末地主要避开虚空，所以从 40 往上找。
function 获取维度搜索高度(targetDimension) {
    if (targetDimension === "minecraft:the_nether") {
        return {
            minY: 8,
            maxY: 120
        };
    }

    if (targetDimension === "minecraft:the_end") {
        return {
            minY: 40,
            maxY: 120
        };
    }

    return {
        minY: 8,
        maxY: 250
    };
}


// 寻找附近最合适的真实地面。
// 搜索方式：
// 1. 以玩家当前 X/Z 为中心。
// 2. 半径内搜索。
// 3. 每个 X/Z 从高到低找地面。
// 4. 优先距离玩家最近的位置。
// 5. 找到真实安全地面就直接用，不创建黑曜石平台。
function 寻找安全真实地面(level, centerX, centerZ, radius, targetDimension) {
    let heightRange = 获取维度搜索高度(targetDimension);

    let bestSpot = null;
    let bestDistanceSq = 999999999;

    for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
            let distanceSq = dx * dx + dz * dz;

            if (distanceSq > radius * radius) {
                continue;
            }

            if (distanceSq >= bestDistanceSq) {
                continue;
            }

            let x = centerX + dx;
            let z = centerZ + dz;

            // 从高往低找地面，这样优先找露天或洞穴上层地面，
            // 不会优先跑去地下深处。
            for (let y = heightRange.maxY; y >= heightRange.minY; y--) {
                if (是安全真实地面点(level, x, y, z)) {
                    bestSpot = {
                        x: x,
                        y: y,
                        z: z,
                        createdPlatform: false
                    };

                    bestDistanceSq = distanceSq;
                    break;
                }
            }
        }
    }

    return bestSpot;
}


// 先找真实地面，找不到才创建黑曜石平台。
function 寻找或创建安全落点(level, centerX, centerZ, radius, fallbackY, targetDimension) {
    let groundSpot = 寻找安全真实地面(level, centerX, centerZ, radius, targetDimension);

    if (groundSpot !== null) {
        return groundSpot;
    }

    return 创建黑曜石安全平台(level, centerX, fallbackY, centerZ);
}


// 判断玩家是不是创造模式。
// 创造模式不消耗传送物品。
function 是创造模式(player) {
    if (player.isCreative && player.isCreative()) {
        return true;
    }

    if (player.abilities && player.abilities.instabuild) {
        return true;
    }

    return false;
}


// =======================================================
// 六、执行安全传送
// =======================================================

function 执行安全传送(e, config) {
    let player = e.player;
    let server = e.server;

    let targetLevel = server.getLevel(config.targetDimension);

    if (targetLevel == null) {
        player.tell(Text.red("传送失败：找不到目标维度 " + config.targetDimension));
        return;
    }

    // 保持玩家当前 X/Z 坐标，在目标维度相同 X/Z 附近寻找安全点。
    let centerX = Math.floor(player.x);
    let centerZ = Math.floor(player.z);

    let spot = 寻找或创建安全落点(
        targetLevel,
        centerX,
        centerZ,
        config.searchRadius,
        config.fallbackY,
        config.targetDimension
    );

    // 生存模式消耗，创造模式不消耗。
    if (config.consume && !是创造模式(player)) {
        e.item.count--;
    }

    player.teleportTo(
        config.targetDimension,
        spot.x + 0.5,
        spot.y,
        spot.z + 0.5,
        player.yaw,
        player.pitch
    );

    if (spot.createdPlatform) {
        player.tell(Text.green("附近没有安全地面，已创建黑曜石安全平台并完成传送。"));
    } else {
        player.tell(Text.green("已找到附近安全地面并完成传送。"));
    }

    e.cancel();
}


// =======================================================
// 七、右键物品事件
// =======================================================

ItemEvents.rightClicked(e => {
    let itemId = String(e.item.id);

    let config = 物品传送配置.find(c => c.item === itemId);

    if (!config) {
        return;
    }

    if (e.level.isClientSide()) {
        return;
    }

    执行安全传送(e, config);
});