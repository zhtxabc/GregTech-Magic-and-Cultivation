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

StartupEvents.registry('item', event => {
  event.create('minecraft:infusion_seed')
    .displayName('注魔种子')  // 设置中文名
    .texture('mysticalagriculture:item/prosperity_seed_base')
    .maxStackSize(64); // 可选，默认最大堆叠64
});

// 文件路径: kubejs/startup_scripts/0_source_of_all_evil.js

StartupEvents.registry('item', event => {
    event.create('kubejs:source_of_all_evil')
        .displayName('始源精魂')
        .texture('kubejs:item/source_of_all_evil')
        .tooltip('§c可以替代任何灵灾精魂使用');
});

StartupEvents.registry('item', event => {
    event.create('kubejs:tofustick')
         .displayName('豆腐棒(合成用)')
        .texture('kubejs:item/tofustick')
});

StartupEvents.registry('item', event => {
    event.create('rough_bucket')
        .displayName('光滑的桶')
        .maxStackSize(1);                           // 最大堆叠数（桶通常为16）
});

StartupEvents.registry('item', event => {
    event.create('half_tofu_staff')
        .displayName('半成品豆腐棒')
        .texture('layer0', 'minecraft:item/stick')   // 使用原版木棍纹理
        .maxStackSize(1);                          // 最大堆叠数
});

StartupEvents.registry('item', event => {
    event.create('dark_matter_smithing_template', 'basic')
        .displayName('暗物质锻造模板')
        .texture('kubejs:item/dark_matter_smithing_template') // 需要纹理
        .maxStackSize(4) // 锻造模板通常是不可堆叠或堆叠1
        .tooltip('一种蕴含暗物质能量的锻造模板')
})

// kubejs/startup_scripts/onion_sugar.js
StartupEvents.registry('item', event => {
    event.create('onion_sugar', 'basic')          // 物品 ID 为 onion_sugar
        .displayName('葱糖')                      // 显示名称
        .texture('layer0', 'minecraft:item/sugar') // 直接使用原版糖的贴图
        .maxStackSize(64)                         // 可堆叠，与原版糖一致
})

StartupEvents.registry('item', event => {
    event.create('endless_tofu', 'basic')          // ID: endless_tofu
        .displayName('暗物质豆腐')                   // 显示名 
        .maxStackSize(64)                          // 可堆叠
})

StartupEvents.registry('item', event => {
    event.create('the_aether', 'basic')          
        .displayName('天境传送道具(一次性)')
        .maxStackSize(1)                         
})

StartupEvents.registry('item', event => {
    event.create('sweet_lands', 'basic')          
        .displayName('甜蜜灾祸世界传送道具(一次性)')
        .maxStackSize(1)                         
})

StartupEvents.registry('item', event => {
    event.create('tofu_world', 'basic')          
        .displayName('豆腐世界传送道具(一次性)')
        .maxStackSize(1)                         
})

StartupEvents.registry('item', event => {
    event.create('overworld', 'basic')          
        .displayName('主世界传送道具(一次性)')
        .maxStackSize(1)                         
})

StartupEvents.registry('item', event => {
    event.create('the_aether1', 'basic')          
        .displayName('天境传送道具')
        .maxStackSize(1)                         
})

StartupEvents.registry('item', event => {
    event.create('sweet_lands1', 'basic')          
        .displayName('甜蜜灾祸世界传送道具')
        .maxStackSize(1)                         
})

StartupEvents.registry('item', event => {
    event.create('tofu_world1', 'basic')          
        .displayName('豆腐世界传送道具')
        .maxStackSize(1)                         
})

StartupEvents.registry('item', event => {
    event.create('overworld1', 'basic')          
        .displayName('主世界传送道具')
        .maxStackSize(1)                         
})

StartupEvents.registry('item', event => {
    event.create('sandpaper', 'basic')          
        .displayName('砂纸')
        .maxStackSize(64)
        
        event.create('blank_gem_crystal', 'basic')          
        .displayName('空白宝石晶体')
        .maxStackSize(64)

        event.create('gem_mold_forging_template', 'basic')          
        .displayName('宝石模具锻造模板')
        .maxStackSize(64)

        event.create('gem_mold', 'basic')          
        .displayName('宝石模具')
        .maxStackSize(64)
})

StartupEvents.registry('item', event => {
    event.create('kubejs:blank_teleporter')
        .displayName('空白传送器')
        .tooltip('§7尚未绑定的传送器，可合成为指定维度的传送器')
        .maxStackSize(1);
});