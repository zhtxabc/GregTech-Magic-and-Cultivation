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