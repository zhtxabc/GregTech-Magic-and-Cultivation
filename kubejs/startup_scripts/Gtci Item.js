StartupEvents.registry('item', event => {
    // 电压 → 境界映射表
    const tiers = [
        { id: 'ulv', name: '凝气' },
        { id: 'lv', name: '筑基' },
        { id: 'mv', name: '结丹' },
        { id: 'hv', name: '元婴' },
        { id: 'ev', name: '化神' },
        { id: 'iv', name: '婴变' },
        { id: 'luv', name: '问鼎' },
        { id: 'zpm', name: '窥涅' },
        { id: 'uv', name: '净涅' },
        { id: 'uhv', name: '碎涅' },
        { id: 'uev', name: '空涅' },
        { id: 'uiv', name: '空灵' },
        { id: 'uxv', name: '空玄' },
        { id: 'opv', name: '空劫' },
        { id: 'max', name: '踏天' }
    ];

    // 批量注册模板
    tiers.forEach(tier => {
        event.create(`kubejs:${tier.id}_template`)
            .displayName(`${tier.name} 模板`)
            .maxStackSize(64);
    });

    // 批量注册处理器

    tiers.forEach(tier => {
        event.create(`kubejs:${tier.id}_processor`)
            .displayName(`${tier.name} 处理器`)
            .maxStackSize(64);
    });

    // 批量注册金属（仅高电压部分，与原来保持一致）
    // 如果你需要全电压金属，把下面改成就好
    const highTiers = [
        { id: 'uev',  name: '空涅' },
        { id: 'uiv',  name: '空灵' },
        { id: 'uxv',  name: '空玄' },
        { id: 'opv',  name: '空劫' },
        { id: 'max',  name: '踏天' }
    ];

    highTiers.forEach(tier => {
        event.create(`kubejs:${tier.id}_metal`)
            .displayName(`${tier.name} 金属`)
            .maxStackSize(64)
            .texture(`kubejs:item/${tier.id}_metal`);
            // 如果你不需要自定义贴图，可以把 .texture 这行删掉
    });
});

// 文件路径: kubejs/startup_scripts/wrench.js

// 文件路径: kubejs/startup_scripts/wrench.js

StartupEvents.registry('item', event => {
    event.create('wrench')
        .displayName('扳手')
        .maxStackSize(1)
        .tooltip('§7无限耐久的扳手，可用于拆卸机器。')
        // 不设置 maxDamage 即为无限耐久
        // 移除了 .speed() 和 .attackDamage()
});

StartupEvents.registry('item', event => {
    event.create('dense_copper_ingot')
        .displayName('致密铜锭')
        .parentModel('minecraft:item/generated')
        .texture('layer0', 'minecraft:item/copper_ingot')
});

// 注册彩虹花瓣物品
StartupEvents.registry('item', event => {
    event.create('rainbow_petal')
        .displayName('§d彩虹花瓣')
        .texture('kubejs:item/rainbow_petal')
        .maxStackSize(64);
});

StartupEvents.registry('item', event => {
    event.create('livingrock_bucket')
        .displayName('活石桶')
        .maxStackSize(16);
    event.create('livingrock_water_bucket')
        .displayName('活石水桶')
        .maxStackSize(1);
});