// 注册"原木外壳"作为主方块，材质使用橡木原木
StartupEvents.registry('block', event => {
    event.create('wooden_casing')           
        .material('wood')                   
        .hardness(2.0)                      
        .resistance(3.0)                    
        .soundType('wood')                  
        .tagBlock('minecraft:mineable/axe') 
        .tagBlock('forge:mineable/wrench')  
        .textureAll('minecraft:block/oak_log') 

    event.create('leaves_casing')          
        .material('wood')                   
        .hardness(2.0)                      
        .resistance(3.0)                    
        .soundType('wood')                 
        .tagBlock('minecraft:shears') 
        .tagBlock('forge:mineable/wrench')  
        .textureAll('minecraft:block/oak_leaves') 

    event.create('dirt_casing')          
        .material('wood')                   
        .hardness(2.0)                      
        .resistance(3.0)                    
        .soundType('wood')                 
        .tagBlock('minecraft:shears') 
        .tagBlock('forge:minecraft/shovels')  
        .textureAll('minecraft:block/dirt')

    event.create('casing')          
        .material('wood')                   
        .hardness(2.0)                      
        .resistance(3.0)                    
        .soundType('wood')                 
        .tagBlock('minecraft:pickaxes') 
        .tagBlock('forge:minecraft/shovels')

    event.create('white_concrete_cabin')
        .displayName('白色混凝土（替换仓室用）')   // 游戏内显示名称
        .hardness(1.8)                             // 硬度与白色混凝土一致
        .resistance(1.8)                           // 爆炸抗性
        .soundType('stone')                        // 挖掘声音：石头
        .mapColor('white_terracotta')              // 地图颜色（可选，接近白色）
        .textureAll('minecraft:block/white_concrete') // 六面均使用白色混凝土纹理
        .tagBlock('minecraft:mineable/pickaxe')    // 镐采集
        .requiresTool(true)                        // 空手不掉落
        // 如果你希望它像原版白色混凝土一样可以徒手采集，可设置 requiresTool(false) 并调整 hardness
        .material('stone');                        // 可选，旧版写法，推荐用 soundType+mapColor 代替

        event.create('black_concrete_cabin')
        .displayName('黑色混凝土（替换仓室用）')   // 游戏内显示名称
        .hardness(1.8)                             // 硬度与白色混凝土一致
        .resistance(1.8)                           // 爆炸抗性
        .soundType('stone')                        // 挖掘声音：石头
        .mapColor('black_terracotta')              // 地图颜色（可选，接近白色）
        .textureAll('minecraft:block/black_concrete') // 六面均使用白色混凝土纹理
        .tagBlock('minecraft:mineable/pickaxe')    // 镐采集
        .requiresTool(true)                        // 空手不掉落
        // 如果你希望它像原版白色混凝土一样可以徒手采集，可设置 requiresTool(false) 并调整 hardness
        .material('stone');                        // 可选，旧版写法，推荐用 soundType+mapColor 代替
})
