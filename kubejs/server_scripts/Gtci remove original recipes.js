ServerEvents.recipes(event => {
    const tiers = ['uev', 'uiv', 'uxv', 'opv', 'max']; // 可按需增减

    tiers.forEach(tier => {
        // 只删除工作台有序/无序合成配方
        event.remove({ type: 'minecraft:crafting_shaped', output: `gtceu:${tier}_machine_hull` });
        event.remove({ type: 'minecraft:crafting_shapeless', output: `gtceu:${tier}_machine_hull` });
    });

     // 定义需要移除的工具类型（剑、镐、斧、锹、锄）
  const toolTypes = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe'];
  // 定义所有使用工作台合成的材料
  const materials = ['wooden', 'stone', 'iron', 'golden', 'diamond'];

  // 移除所有普通工具的工作台配方（ID格式：minecraft:<材料>_<工具>）
  materials.forEach(material => {
    toolTypes.forEach(tool => {
      event.remove({ id: `minecraft:${material}_${tool}` });
    });
  });

  event.remove({ id: 'naturesaura:offering_table' });

  // 删除所有输出属于 #minecraft:tools 标签的工作台配方（包括有序和无序合成）
  event.remove({ output: '#minecraft:tools', type: 'minecraft:crafting_shaped' });
  event.remove({ output: '#minecraft:tools', type: 'minecraft:crafting_shapeless' });

  event.remove({ output: 'aiotbotania:livingrock_aiot', type: 'minecraft:crafting_shaped' });
  event.remove({ output: 'aiotbotania:livingrock_aiot', type: 'minecraft:crafting_shapeless' });

    // 删除农夫乐事的炉灶配方
  event.remove({ output: 'farmersdelight:stove', type: 'minecraft:crafting_shaped' });
  event.remove({ output: 'farmersdelight:stove', type: 'minecraft:crafting_shapeless' });

  // 文件路径: kubejs/server_scripts/remove_botania_recipes.js
    // 删除魔力钢锭配方 (输入: 铁锭, 输出: 魔力钢锭)
    event.remove({
        input: 'minecraft:iron_ingot',
        output: 'botania:manasteel_ingot'
    })

    // 删除魔力钻石配方 (输入: 钻石, 输出: 魔力钻石)
    event.remove({
        input: 'minecraft:diamond',
        output: 'botania:mana_diamond'
    })

    // 删除魔力珍珠配方 (输入: 末影珍珠, 输出: 魔力珍珠)
    event.remove({
        input: 'minecraft:ender_pearl',
        output: 'botania:mana_pearl'
    })

    // 删除魔力尘配方 (输出: 魔力尘)
    event.remove({
        output: 'botania:mana_powder'
    })

     // 删除所有产出为 MV 机器外壳的配方
    event.remove({ output: 'gtceu:mv_machine_hull' });
    // 删除所有产出为 MV 机器方块的配方
    event.remove({ output: 'gtceu:mv_machine_casing' });

    event.remove({output: 'gtceu:bronze_brick_casing', type: 'minecraft:crafting_shaped'});
    event.remove({output: 'gtceu:bronze_brick_casing', type: 'minecraft:crafting_shapeless'});

    event.remove({ output: 'gtceu:bronze_ingot', type: 'minecraft:smelting' });
    event.remove({ output: 'gtceu:red_alloy_ingot', type: 'minecraft:smelting' });

});

ServerEvents.recipes(event => {
    const apothecaries = [
        'botania:apothecary_forest',
        'botania:apothecary_default',
        'botania:apothecary_plains',
        'botania:apothecary_mountain',
        'botania:apothecary_fungal',
        'botania:apothecary_swamp',
        'botania:apothecary_desert',
        'botania:apothecary_taiga',
        'botania:apothecary_mesa',
        'botania:apothecary_livingrock',
        'botania:apothecary_deepslate',
        'botania:apothecary_mossy'
    ];

    apothecaries.forEach(apothecary => {
        // 删除工作台有序配方
        event.remove({ output: apothecary, type: 'minecraft:crafting_shaped' });
        // 删除工作台无序配方
        event.remove({ output: apothecary, type: 'minecraft:crafting_shapeless' });
    });
});

ServerEvents.recipes(event => {
  event.remove({ type: 'minecraft:crafting_shaped', output: 'mysticalagriculture:infusion_pedestal' });
  event.remove({ type: 'minecraft:crafting_shapeless', output: 'mysticalagriculture:infusion_pedestal' });
  
  event.remove({ type: 'minecraft:crafting_shaped', output: 'mysticalagriculture:infusion_altar' });
  event.remove({ type: 'minecraft:crafting_shapeless', output: 'mysticalagriculture:infusion_altar' });

  event.remove({ output: 'mysticalagriculture:prosperity_seed_base' });

  // 按输出物品删除（会删除所有产出该物品的配方）
event.remove({ output: 'mysticalagriculture:awakening_pedestal' });
event.remove({ output: 'mysticalagriculture:essence_vessel' });
event.remove({ output: 'mysticalagriculture:awakening_altar' });


});

// server_scripts/remove_gtceu_alloy_smelter_recipes.js
ServerEvents.recipes(event => {

    // 删除所有类型为 gtceu:alloy_smelter 的配方
    event.remove({ type: 'gtceu:alloy_smelter' });

});
// 将以下代码放入 kubejs/server_scripts 目录下的任意 .js 文件中
ServerEvents.recipes(event => {
    // 方法一：逐个删除指定物品的配方（精确删除）
    event.remove({ output: 'mysticalagradditions:prudentium_paxel' });
    event.remove({ output: 'mysticalagradditions:inferium_paxel' });
    event.remove({ output: 'mysticalagradditions:intermedium_paxel' });
    event.remove({ output: 'mysticalagradditions:superium_paxel' });
    event.remove({ output: 'mysticalagradditions:supremium_paxel' });

    // 方法二：如果想一次性删除该模组的所有配方（包括工具、装备、材料等）
    // event.remove({ mod: 'mysticalagradditions' });
});

// 文件位置：kubejs/server_scripts/remove_cooking_pot_recipe.js
ServerEvents.recipes(event => {
    event.remove({ id: 'farmersdelight:cooking_pot' });
    event.remove({ id: 'extendedae_plus:infinity_biginteger_cell' });
});

// 文件路径：kubejs/server_scripts/remove_motor_output_recipes.js
ServerEvents.recipes(event => {
    // 删除所有输出物品带有 gtceu:electric_motors 标签的配方
    event.remove({ output: '#gtceu:electric_motors' });
    event.remove({ output: '#gtceu:electric_pumps' });
    event.remove({ output: '#gtceu:conveyor_modules' });
    event.remove({ output: '#gtceu:electric_pistons' });
    event.remove({ output: '#gtceu:robot_arms' });
    event.remove({ output: '#gtceu:emitters' });
    event.remove({ output: '#gtceu:sensors' });
});

ServerEvents.recipes(event => {
    // 将 'recipe_id_here' 替换为实际的配方ID
    event.remove({ id: 'aiotbotania:manasteel_aiot' });
});

ServerEvents.recipes(event => {
    // 删除所有输入包含 tofucraft:tofustem_planks 且输出为 minecraft:crafting_table 的配方
    event.remove({
        input: 'tofucraft:tofustem_planks',
        output: 'minecraft:crafting_table'
    });
});

// 监听服务器配方加载事件
ServerEvents.recipes(event => {
    // 精准删除配方
    event.remove({ id: 'sweet_calamity:sugar_block_decraft' });
    event.remove({ id: 'tofucraft:blocktofugrilled' });
    // 如果只想删除工作台合成配方，可以搭配类型过滤器使用
    // event.remove({ id: 'sweet_calamity:sugar_block_decraft', type: 'minecraft:crafting_shaped' });
});

ServerEvents.recipes(event => {
    // 删除 quark 模组中 easy_sticks 配方
    event.remove({ id: 'quark:tweaks/crafting/utility/misc/easy_sticks' });
});

ServerEvents.recipes(event => {
    event.remove({ id: 'ltc2:crafting/shaped/latiao_oven' });
    event.remove({ id: 'ltc2:crafting/shaped/mill' });
});

ServerEvents.recipes(event => {
    event.remove({ id: 'tofucraft:tofu_diamond_helmet_smithing' });
    event.remove({ id: 'tofucraft:tofu_diamond_chestplate_smithing' });
    event.remove({ id: 'tofucraft:tofu_diamond_leggings_smithing' });
    event.remove({ id: 'tofucraft:tofu_diamond_boots_smithing' });
});

ServerEvents.recipes(event => {
    const metalArmors = [
        'tofucraft:tofu_metal_helmet',
        'tofucraft:tofu_metal_chestplate',
        'tofucraft:tofu_metal_leggings',
        'tofucraft:tofu_metal_boots'
    ];

    metalArmors.forEach(armor => {
        // 移除有序工作台配方
        event.remove({ output: armor, type: 'minecraft:crafting_shaped' });
        // 如果存在无序工作台配方，也一并移除
        event.remove({ output: armor, type: 'minecraft:crafting_shapeless' });
    });
});

ServerEvents.recipes(event => {
  const solidArmor = [
    'tofucraft:tofu_solid_helmet',
    'tofucraft:tofu_solid_chestplate',
    'tofucraft:tofu_solid_leggings',
    'tofucraft:tofu_solid_boots'
  ];

  solidArmor.forEach(id => {
    // 移除所有输出为该物品的配方（工作台有序/无序合成）
    event.remove({ output: id });
  });
});