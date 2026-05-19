// 为所有需要花瓣的配方设置替代品
ServerEvents.recipes(event => {
    const rainbowPetal = 'kubejs:rainbow_petal';

    // 定义所有16色花瓣的列表
    const petals = [
        'botania:white_petal', 'botania:orange_petal', 'botania:magenta_petal',
        'botania:light_blue_petal', 'botania:yellow_petal', 'botania:lime_petal',
        'botania:pink_petal', 'botania:gray_petal', 'botania:light_gray_petal',
        'botania:cyan_petal', 'botania:purple_petal', 'botania:blue_petal',
        'botania:brown_petal', 'botania:green_petal', 'botania:red_petal',
        'botania:black_petal'
    ];

    // 将彩虹花瓣添加到所有替换中
    petals.forEach(petal => {
        event.replaceInput({}, petal, rainbowPetal);
        event.replaceOutput({}, petal, rainbowPetal);
    });

    event.recipes.botania.mana_infusion(
        '2x botania:manasteel_ingot',        // 输出物品（可写数量）
        'gtceu:aluminium_ingot',        // 输入物品（可写数量）
        1000,                         // 消耗的 Mana 值
        'gtceu:aluminium_block'     // 可选催化剂（炼金催化器）
    )
});