ServerEvents.recipes(event =>{
    event.recipes.summoningrituals
    .altar('sweet_calamity:totem_cake')                  // 催化物
    .mobOutput('sweet_calamity:creamy')                  // 生物输出
    .input('sweet_calamity:chocolate_magic_plate')       // 输入物品
    .input('sweet_calamity:cream_magic_plate')           // 输入物品
    .input('sweet_calamity:crunchy_magic_plate')         // 输入物品
    .input('sweet_calamity:sticky_magic_plate')          // 输入物品
    .input('sweet_calamity:sweet_magic_plate')           // 输入物品 
    .recipeTime(40)                                      // 耗时
})

ServerEvents.recipes(event =>{
    event.recipes.summoningrituals
    .altar('sweet_calamity:candy_cane_sword')            // 催化物
    .mobOutput('sweet_calamity:sweet_witch')             // 生物输出
    .input('sweet_calamity:chocolate_magic_plate')       // 输入物品
    .input('sweet_calamity:cream_magic_plate')           // 输入物品
    .input('sweet_calamity:crunchy_magic_plate')         // 输入物品
    .input('sweet_calamity:sticky_magic_plate')          // 输入物品
    .input('sweet_calamity:sweet_magic_plate')           // 输入物品 
    .recipeTime(40)                                      // 耗时
})