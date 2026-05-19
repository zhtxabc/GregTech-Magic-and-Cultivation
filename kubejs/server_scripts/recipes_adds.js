//  请勿修改文件名或路径！
//  DO NOT MODIFY THE FILENAME OR PATH!
//  此文件由 KineticTweaks 自动管理。
//  This file is automatically managed by KineticTweaks.
//  仅在保持格式的情况下，对数组的手动修改才会被保留。
//  Manual changes to arrays will be preserved only if format is kept.

ServerEvents.recipes(e => {
  e.shaped("64x kubejs:wooden_casing",[
    "ABA",
    "BCB",
    "ABA"
  ], {
    A: "gtceu:steel_ingot",
    C: "kubejs:casing",
    B: "minecraft:oak_wood"
  })
  e.shaped("64x kubejs:dirt_casing",[
    "ABA",
    "BCB",
    "ABA"
  ], {
    A: "gtceu:steel_ingot",
    C: "kubejs:casing",
    B: "minecraft:dirt"
  })
  e.shaped("4x kubejs:casing",[
    "ABA",
    "BCB",
    "ABA"
  ], {
    B: "gtceu:steel_ingot",
    C: "gtceu:wood_frame",
    A: "minecraft:smooth_stone"
  })
  e.shaped("64x kubejs:leaves_casing",[
    "ABA",
    "BCB",
    "ABA"
  ], {
    A: "gtceu:steel_ingot",
    C: "kubejs:casing",
    B: "#minecraft:leaves"
  })
  e.shaped("4x gtceu:wood_frame",[
    "ABA",
    "B B",
    "ABA"
  ], {
    A: "#minecraft:planks",
    B: "minecraft:stick"
  })
  e.shaped("naturesaura:offering_table",[
    "ABC",
    "DED",
    "FBG"
  ], {
    E: "gtceu:mv_machine_hull",
    D: "naturesaura:gold_powder",
    G: "naturesaura:token_anger",
    F: "naturesaura:token_sorrow",
    A: "naturesaura:token_fear",
    B: "naturesaura:gold_leaf",
    C: "naturesaura:token_joy"
  })
  e.shaped("gtceu:natures_offering",[
    "ABC",
    "DEF",
    "GHI"
  ], {
    C: "naturesaura:token_euphoria",
    I: "naturesaura:token_rage",
    B: "naturesaura:tainted_gold_block",
    E: "naturesaura:offering_table",
    G: "naturesaura:token_grief",
    D: "naturesaura:ancient_log",
    F: "naturesaura:infused_iron_block",
    H: "naturesaura:infused_stone",
    A: "naturesaura:token_terror"
  })
  e.shaped(Item.of("farmersdelight:flint_knife", '{Damage:0}'),[
    " A",
    "B "
  ], {
    A: "minecraft:flint",
    B: "minecraft:stick"
  })
  e.shaped("minecraft:crafting_table",[
    "AB",
    "CC"
  ], {
    C: "#minecraft:logs",
    A: "minecraft:flint",
    B: "farmersdelight:canvas"
  })
  e.shaped("minecraft:furnace",[
    "AAA",
    "B B",
    "AAA"
  ], {
    B: "minecraft:flint",
    A: "minecraft:cobblestone"
  })
  e.shaped("ae2:creative_energy_cell",[
    "ABC",
    "DEF",
    "GHI"
  ], {
    E: "gtceu:mv_machine_hull",
    D: "ars_nouveau:abjuration_essence",
    F: "ars_nouveau:earth_essence",
    B: "ars_nouveau:source_gem",
    H: "ars_nouveau:manipulation_essence",
    I: "ars_nouveau:fire_essence",
    A: "ars_nouveau:air_essence",
    C: "ars_nouveau:water_essence",
    G: "ars_nouveau:conjuration_essence"
  })
  e.shaped("farmersdelight:stove",[
    "ABC",
    "DEF",
    "GHI"
  ], {
    D: "minecraft:chicken",
    H: "minecraft:cooked_mutton",
    B: "minecraft:mutton",
    F: "minecraft:cooked_chicken",
    C: "minecraft:porkchop",
    E: "gtceu:bronze_brick_casing",
    A: "minecraft:beef",
    I: "minecraft:cooked_beef",
    G: "minecraft:cooked_porkchop"
  })
  e.shaped("ae2:drive",[
    "ABA",
    "CDC",
    "ABA"
  ], {
    D: "gtceu:mv_machine_hull",
    A: "gtceu:invar_ingot",
    C: "ae2:engineering_processor",
    B: "gtceu:good_integrated_circuit"
  })
  e.shaped("extendedae_plus:infinity_biginteger_cell",[
    "ABA",
    "BCB",
    "ABA"
  ], {
    A: "gtceu:basic_integrated_circuit",
    B: "ae2:creative_energy_cell",
    C: "ae2:item_storage_cell_16k"
  })
  e.shaped("gtceu:mv_machine_hull",[
    "AAA",
    "ABA",
    "AAA"
  ], {
    B: "#forge:tools/wrenches",
    A: "gtceu:manasteel_plate"
  })
  e.shaped("kubejs:dense_copper_ingot",[
    "AAA"
  ], {
    A: "minecraft:copper_ingot"
  })

});