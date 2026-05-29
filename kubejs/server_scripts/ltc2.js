ServerEvents.recipes(event => {
    event.custom({
        type: 'ltc2:latiao_oven',
        category: 'utility',
        latiao: {
            item: 'sweet_calamity:liquid_gum_bucket'   // 替换为主输入
        },
        mainsp: {                           // 主调味品（必须）
            item: 'ltc2:pepper_red_powder',       // 你可以改成任意标签或物品
            count: 1                        // 数量可调，如果不需要可设为0？测试
        },
        //extrasp: {                          // 额外调味品（必须）
            //tag: 'ltc2:pepper_powders',     // 同上
            //count: 1
        //},
        result: 'kubejs:roasted_gum_bucket',
        experience: 1.0,
        cookingtime: 200
    });
});

ServerEvents.recipes(event => {
    event.custom({
        type: 'ltc2:mill',                // 研磨机配方类型
        millingtime: 200,                 // 10秒 = 200 ticks
        experience: 0.5,                 // 适量经验值（可选）
        category: 'other',               // 分类（保持与其他配方一致）
        ingredient: {
            item: 'minecraft:bucket'      // 输入：普通桶
        },
        result: {
            count: 1,                    // 输出数量：1个
            item: 'kubejs:rough_bucket'  // 输出：粗糙的桶（需要已注册）
        }
    });
});