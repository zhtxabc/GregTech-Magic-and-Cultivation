StartupEvents.registry('fluid', event => {
    event.create('liquid_magic_source')
        .displayName('液态魔源')
        .stillTexture('kubejs:block/liquid_magic_source_still')
        .flowingTexture('kubejs:block/liquid_magic_source_flow')
        .bucketColor(0x6a0dad)
        .density(1000)
        .viscosity(1000)
        .temperature(300)
        .luminosity(8)
        .tag('kubejs:liquid_magic_source')
})

StartupEvents.registry('fluid', event => {
    event.create('botania_mana_fluid')
        .displayName('液态魔力')
        .stillTexture('kubejs:block/liquid_magic_source_still')
        .flowingTexture('kubejs:block/liquid_magic_source_flow')
        .bucketColor(0x6a0dad)
        .density(1000)
        .viscosity(1000)
        .temperature(300)
        .luminosity(8)
        .tag('kubejs:botania_mana_fluid')
})

// 在游戏初始化时注册流体
StartupEvents.registry('fluid', event => {
    // 创建一个新的流体，ID 为 'my_cool_fluid'
    event.create('my_cool_fluid')
        // 使用厚材质（样式类似岩浆），并设置颜色为岩浆的橙红色 (0xFF8000)
        .displayName('锻铁原液')
        .thickTexture(0xFF8000)
        // 设置流体桶内液体的颜色也为橙红色
        .bucketColor(0xFF8000)
        // 设置流体的显示名称
        .displayName('My Cool Fluid')
        // 设置流体密度为 1000（水的密度）
        .density(1000)
        // 设置粘滞度为 1000（水的粘性）
        .viscosity(1000)
        // 设置温度为 300（水的温度）
        .temperature(300)
        .tag('kubejs:my_cool_fluid')
});

StartupEvents.registry('fluid', event => {
    event.create('currant_milk')
        .displayName('醋栗奶')
        .stillTexture('kubejs:block/liquid_magic_source_still')
        .flowingTexture('kubejs:block/liquid_magic_source_flow')
        .density(1000)
        .viscosity(1000)
        .temperature(300)
        .luminosity(8)
        .tag('kubejs:currant_milk')
})

StartupEvents.registry('fluid', event => {
    // 创建一个 ID 为 'kubejs:roasted_gum' 的流体（你可以改成自己的命名空间）
    event.create('roasted_gum')
        .displayName('液态烤口香糖')          // 显示名称
        .thickTexture(0x8B5A2B)               // 使用厚重纹理（类似岩浆），颜色为棕褐色（烤口香糖色）
        .bucketColor(0x8B5A2B)                // 流体桶内液体颜色
        .density(1200)                        // 密度（比水稍重，水=1000）
        .viscosity(2000)                      // 粘稠度（比水稠，但比岩浆稀）
        .temperature(350)                     // 温度（温热的）
        .tag('kubejs:roasted_gum')
});