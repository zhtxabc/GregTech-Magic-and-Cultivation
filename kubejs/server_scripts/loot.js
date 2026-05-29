LootJS.modifiers(event => {
    event.addEntityLootModifier('sweet_calamity:candy_knight')
        .randomChance(0.1)
        .addLoot('sweet_calamity:chocolate_magic_plate');

    event.addEntityLootModifier('sweet_calamity:candy_knight')
        .randomChance(0.1)
        .addLoot('sweet_calamity:cream_magic_plate');

    event.addEntityLootModifier('sweet_calamity:candy_knight')
        .randomChance(0.1)
        .addLoot('sweet_calamity:crunchy_magic_plate');

    event.addEntityLootModifier('sweet_calamity:candy_knight')
        .randomChance(0.1)
        .addLoot('sweet_calamity:sticky_magic_plate');

    event.addEntityLootModifier('sweet_calamity:candy_knight')
        .randomChance(0.1)
        .addLoot('sweet_calamity:sweet_magic_plate');
});

// 监听LootJS的修改事件
LootJS.modifiers((event) => {
    // 为荒野守卫者添加掉落
    event.addEntityLootModifier("ars_nouveau:wilden_defender")
        .randomChance(0.1)
        .addLoot("kubejs:gem_mold_forging_template");
    
    // 为荒野猎手添加掉落
    event.addEntityLootModifier("ars_nouveau:wilden_hunter")
        .randomChance(0.1)
        .addLoot("kubejs:gem_mold_forging_template");
    
    // 为荒野伏击者添加掉落
    event.addEntityLootModifier("ars_nouveau:wilden_stalker")
        .randomChance(0.1)
        .addLoot("kubejs:gem_mold_forging_template");
});