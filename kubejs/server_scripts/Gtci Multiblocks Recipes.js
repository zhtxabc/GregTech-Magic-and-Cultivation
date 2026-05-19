//原木处理配方
ServerEvents.recipes(event => {
    event.recipes.gtceu.wood('oak_log_to_planks')
        .itemInputs('minecraft:oak_log')
        .itemOutputs('64x minecraft:oak_planks')
        .duration(100)
        .EUt(16)
})

//ae压印配方
ServerEvents.recipes(event => {
    // 计算处理器
    event.recipes.gtceu.ae_processor('gtceu:ae_processor/calculation')
        .itemInputs('ae2:silicon', 'minecraft:redstone_block', 'ae2:quartz_block')
        .itemOutputs('16x ae2:calculation_processor')
        .duration(160)
        .EUt(512)

    // 工程处理器
    event.recipes.gtceu.ae_processor('gtceu:ae_processor/engineering')
        .itemInputs('ae2:silicon', 'minecraft:redstone_block', 'minecraft:diamond_block')
        .itemOutputs('16x ae2:engineering_processor')
        .duration(160)
        .EUt(512)

    // 逻辑处理器
    event.recipes.gtceu.ae_processor('gtceu:ae_processor/logic')
        .itemInputs('ae2:silicon', 'minecraft:redstone_block', 'minecraft:gold_block')
        .itemOutputs('16x ae2:logic_processor')
        .duration(160)
        .EUt(512)
})

//大型高炉配方
ServerEvents.recipes(event => {
    // 计算处理器
    event.recipes.gtceu.bigger_blast_furnace('gtceu:bigger_blast_furnace')
        .itemInputs('minecraft:iron_ingot', '2x minecraft:coal')
        .itemOutputs('2x gtceu:steel_ingot', 'gtceu:dark_ash_dust')
        .duration(40)
})

//锻造处理器配方
ServerEvents.recipes(event => {
    event.recipes.gtceu.processor('kubejs:lv_processor')
        .itemInputs('kubejs:lv_template', 'kubejs:ulv_processor', 'gtceu:steel_ingot')
        .itemOutputs('kubejs:lv_processor')
        .duration(200).EUt(32);

    event.recipes.gtceu.processor('kubejs:mv_processor')
        .itemInputs('kubejs:mv_template', 'kubejs:lv_processor', 'gtceu:aluminium_ingot')
        .itemOutputs('kubejs:mv_processor')
        .duration(200).EUt(128);

    event.recipes.gtceu.processor('kubejs:hv_processor')
        .itemInputs('kubejs:hv_template', 'kubejs:mv_processor', 'gtceu:stainless_steel_ingot')
        .itemOutputs('kubejs:hv_processor')
        .duration(200).EUt(512);

    event.recipes.gtceu.processor('kubejs:ev_processor')
        .itemInputs('kubejs:ev_template', 'kubejs:hv_processor', 'gtceu:titanium_ingot')
        .itemOutputs('kubejs:ev_processor')
        .duration(200).EUt(2048);

    event.recipes.gtceu.processor('kubejs:iv_processor')
        .itemInputs('kubejs:iv_template', 'kubejs:ev_processor', 'gtceu:tungsten_steel_ingot')
        .itemOutputs('kubejs:iv_processor')
        .duration(200).EUt(8192);

    event.recipes.gtceu.processor('kubejs:luv_processor')
        .itemInputs('kubejs:luv_template', 'kubejs:iv_processor', 'gtceu:rhodium_plated_palladium_ingot')
        .itemOutputs('kubejs:luv_processor')
        .duration(200).EUt(32768);

    event.recipes.gtceu.processor('kubejs:zpm_processor')
        .itemInputs('kubejs:zpm_template', 'kubejs:luv_processor', 'gtceu:naquadah_alloy_ingot')
        .itemOutputs('kubejs:zpm_processor')
        .duration(200).EUt(131072);

    event.recipes.gtceu.processor('kubejs:uv_processor')
        .itemInputs('kubejs:uv_template', 'kubejs:zpm_processor', 'gtceu:darmstadtium_ingot')
        .itemOutputs('kubejs:uv_processor')
        .duration(200).EUt(524288);

    event.recipes.gtceu.processor('kubejs:uhv_processor')
        .itemInputs('kubejs:uhv_template', 'kubejs:uv_processor', 'gtceu:neutronium_ingot')
        .itemOutputs('kubejs:uhv_processor')
        .duration(200).EUt(2097152);

    event.recipes.gtceu.processor('kubejs:uev_processor')
        .itemInputs('kubejs:uev_template', 'kubejs:uhv_processor', 'kubejs:uev_metal')
        .itemOutputs('kubejs:uev_processor')
        .duration(200).EUt(8388608);

    event.recipes.gtceu.processor('kubejs:uiv_processor')
        .itemInputs('kubejs:uiv_template', 'kubejs:uev_processor', 'kubejs:uiv_metal')
        .itemOutputs('kubejs:uiv_processor')
        .duration(200).EUt(33554432);

    event.recipes.gtceu.processor('kubejs:uxv_processor')
        .itemInputs('kubejs:uxv_template', 'kubejs:uiv_processor', 'kubejs:uxv_metal')
        .itemOutputs('kubejs:uxv_processor')
        .duration(200).EUt(134217728);

    event.recipes.gtceu.processor('kubejs:opv_processor')
        .itemInputs('kubejs:opv_template', 'kubejs:uxv_processor', 'kubejs:opv_metal')
        .itemOutputs('kubejs:opv_processor')
        .duration(200).EUt(536870912);

    event.recipes.gtceu.processor('kubejs:max_processor')
        .itemInputs('kubejs:max_template', 'kubejs:opv_processor', 'kubejs:max_metal')
        .itemOutputs('kubejs:max_processor')
        .duration(200).EUt(2147483647);
});