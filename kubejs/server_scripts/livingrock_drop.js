// 让空手挖掘活石时掉落活石本身
BlockEvents.broken(event => {
    const { block, player, server } = event;
    if (block.id !== 'botania:livingrock') return;

    // 检查主手是否为空手（或者手持非工具，可根据需要调整）
    if (player.getMainHandItem().isEmpty()) {
        // 在破坏位置生成活石物品
        block.popItem('botania:livingrock');
    }
});

// 让空手挖掘石头时掉落圆石
BlockEvents.broken(event => {
    const { block, player, server } = event;
    if (block.id !== 'minecraft:stone') return;

    // 检查主手是否为空手（或者手持非工具，可根据需要调整）
    if (player.getMainHandItem().isEmpty()) {
        // 在破坏位置生成圆石物品
        block.popItem('minecraft:cobblestone');
    }
});