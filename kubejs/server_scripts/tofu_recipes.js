ServerEvents.recipes(event => {
    event.shaped('8x tofucraft:tofumetal', [
        ['tofucraft:tofuishi','tofucraft:tofuishi','tofucraft:tofuishi'],
        ['tofucraft:tofuishi','tofucraft:tofustick','tofucraft:tofuishi'],
        ['tofucraft:tofuishi','tofucraft:tofuishi','tofucraft:tofuishi']
    ]).keepIngredient('tofucraft:tofustick');
});

ServerEvents.recipes(event => {
    event.shaped('tofucraft:chili', [
        ['tofucraft:leek','tofucraft:leek','tofucraft:leek'],
        ['tofucraft:leek','tofucraft:tofustick','tofucraft:leek'],
        ['tofucraft:leek','tofucraft:leek','tofucraft:leek']
    ],
    ).keepIngredient('tofucraft:tofustick');
});

// 将以下代码放在 kubejs/server_scripts 文件夹中的 .js 文件里
LootJS.modifiers(event => {
    event.addEntityLootModifier("tofucraft:tofu_gandlem")
        .addLoot("sweet_calamity:sweet_lands");
});

// 为旅行者豆年和豆年添加 50% 概率掉落 soylatiao
LootJS.modifiers(event => {
    // 定义目标实体列表
    const entities = ['tofucraft:traveler_tofunian', 'tofucraft:tofunian'];
    
    entities.forEach(entity => {
        event.addEntityLootModifier(entity)
            .randomChance(0.5)          // 50% 掉落概率
            .addLoot('ltc2:soylatiao'); // 掉落物品
    });
});

// 为豆腐傀儡添加百分百掉落半成品豆腐魔杖
LootJS.modifiers(event => {
    event.addEntityLootModifier('tofucraft:tofu_gandlem')
        .randomChance(1.0)                // 100% 掉落概率
        .addLoot('kubejs:half_tofu_staff');
});

LootJS.modifiers(event => {
    event.addEntityLootModifier('tofucraft:tofu_gandlem')
        .randomChance(1.0)                // 100% 掉落概率
        .addLoot('kubejs:blank_teleporter');
});

// 为甜蜜女巫添加百分百掉落魔法粉末
LootJS.modifiers(event => {
    event.addEntityLootModifier('sweet_calamity:sweet_witch')
        .randomChance(1.0)                      // 100% 掉落概率
        .addLoot('sweet_calamity:magic_powder');
});

// 为奶油哥添加百分百掉落1个空白传送器
LootJS.modifiers(event => {
    event.addEntityLootModifier('sweet_calamity:creamy')
        .randomChance(1.0)
        .addLoot('kubejs:blank_teleporter')
});