//  请勿修改文件名或路径！
//  DO NOT MODIFY THE FILENAME OR PATH!
//  此文件由 KineticTweaks 自动管理。
//  This file is automatically managed by KineticTweaks.
//  仅在保持格式的情况下，对数组的手动修改才会被保留。
//  Manual changes to arrays will be preserved only if format is kept.

ServerEvents.recipes(e => {
  let shapeless_configs =[
    ["ltc2:pepper_red_powder",["tofucraft:chili", "tofucraft:chili", "tofucraft:chili", "tofucraft:chili"]],
    ["kubejs:the_aether",["kubejs:blank_teleporter", "minecraft:water_bucket"]],
    ["kubejs:sweet_lands",["kubejs:blank_teleporter", "sweet_calamity:sweet_lands"]],
  ];

  let smithing_configs =[
    ["dragonsteel:dragonsteel_ingot", "minecraft:iron_ingot", "minecraft:netherite_ingot", "#iceandfire:scales/dragon"],
    ["projecte:dm_helmet", "kubejs:dark_matter_smithing_template", "tofucraft:tofu_diamond_helmet", "kubejs:endless_tofu"],
    ["projecte:dm_chestplate", "kubejs:dark_matter_smithing_template", "tofucraft:tofu_diamond_chestplate", "kubejs:endless_tofu"],
    ["projecte:dm_leggings", "kubejs:dark_matter_smithing_template", "tofucraft:tofu_diamond_leggings", "kubejs:endless_tofu"],
    ["projecte:dm_boots", "kubejs:dark_matter_smithing_template", "tofucraft:tofu_diamond_boots", "kubejs:endless_tofu"],
    ["tofucraft:tofu_metal_helmet", "tofucraft:zunda_upgrade_smithing_template", "tofucraft:tofu_solid_helmet", "tofucraft:blocktofumetal"],
    ["tofucraft:tofu_metal_chestplate", "tofucraft:zunda_upgrade_smithing_template", "tofucraft:tofu_solid_chestplate", "tofucraft:blocktofumetal"],
    ["tofucraft:tofu_metal_leggings", "tofucraft:zunda_upgrade_smithing_template", "tofucraft:tofu_solid_leggings", "tofucraft:blocktofumetal"],
    ["tofucraft:tofu_metal_boots", "tofucraft:zunda_upgrade_smithing_template", "tofucraft:tofu_solid_boots", "tofucraft:blocktofumetal"],
    ["tofucraft:tofu_diamond_helmet", "tofucraft:tofu_upgrade_smithing_template", "tofucraft:tofu_metal_helmet", "tofucraft:tofudiamond"],
    ["tofucraft:tofu_diamond_chestplate", "tofucraft:tofu_upgrade_smithing_template", "tofucraft:tofu_metal_chestplate", "tofucraft:tofudiamond"],
    ["tofucraft:tofu_diamond_leggings", "tofucraft:tofu_upgrade_smithing_template", "tofucraft:tofu_metal_leggings", "tofucraft:tofudiamond"],
    ["tofucraft:tofu_diamond_boots", "tofucraft:tofu_upgrade_smithing_template", "tofucraft:tofu_metal_boots", "tofucraft:tofudiamond"],
    ["kubejs:gem_mold", "kubejs:gem_mold_forging_template", "gtceu:empty_mold", "minecraft:amethyst_block"],
    ["kubejs:overworld", "aether:vampire_blade", "kubejs:blank_teleporter", "minecraft:dirt"],
    ["avaritia:infinity_helmet", "deep_aether:stormforged_smithing_template", "tofucraft:tofu_diamond_helmet", "deep_aether:floaty_scarf"],
    ["avaritia:infinity_chestplate", "deep_aether:stratus_smithing_template", "tofucraft:tofu_diamond_chestplate", "aether:victory_medal"],
    ["avaritia:infinity_pants", "aether:sentry_stone", "tofucraft:tofu_diamond_leggings", "deep_aether:slider_eye"],
    ["avaritia:infinity_boots", "aether:sun_altar", "tofucraft:tofu_diamond_boots", "deep_aether:sun_core"],
    ["avaritia:infinity_sword", "lost_aether_content:noble_armor_trim_smithing_template", "tofucraft:tofu_diamond_sword", "deep_aether:aerwhale_saddle"],
    ["tofucraft:tofu_diamond_sword", "tofucraft:tofu_upgrade_smithing_template", "tofucraft:tofu_metal_sword", "tofucraft:tofudiamond"],
  ];

  for (let cfg of shapeless_configs) {
    if (Array.isArray(cfg[1])) e.shapeless(cfg[0], cfg[1]);
    else e.shapeless(cfg[0], [cfg[1]]);
  }

  for (let cfg of smithing_configs) e.smithing(cfg[0], cfg[1], cfg[2], cfg[3]);

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
    E: "gtceu:hv_machine_hull",
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
  e.shaped("kubejs:tofu_crafting_table",[
    "AB",
    "CD"
  ], {
    D: "tofucraft:blocktofuishi",
    A: "tofucraft:soymeat",
    C: "tofucraft:tofugem",
    B: "tofucraft:tofuhamburg_raw"
  })
  e.shaped("ae2:creative_energy_cell",[
    "ABC",
    "DEF",
    "GHI"
  ], {
    E: "gtceu:mv_machine_casing",
    D: "ars_nouveau:abjuration_essence",
    F: "ars_nouveau:earth_essence",
    B: "ars_nouveau:source_gem",
    H: "ars_nouveau:manipulation_essence",
    I: "ars_nouveau:fire_essence",
    A: "ars_nouveau:air_essence",
    C: "ars_nouveau:water_essence",
    G: "ars_nouveau:conjuration_essence"
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
    C: "ae2:item_storage_cell_256k"
  })
  e.shaped("buildinggadgets2:gadget_building",[
    "ABA",
    "CDC",
    "AEA"
  ], {
    E: "gtceu:basic_electronic_circuit",
    D: "gtceu:lv_sodium_battery",
    C: "gtceu:copper_single_wire",
    A: "gtceu:wrought_iron_plate",
    B: "gtceu:lv_sensor"
  })
  e.shaped("ars_nouveau:novice_spell_book",[
    "ABA",
    "CDE",
    "AFA"
  ], {
    B: "ars_nouveau:bombegranate_pod",
    E: "ars_nouveau:mendosteen_pod",
    A: "ars_nouveau:source_gem",
    D: "minecraft:book",
    C: "ars_nouveau:frostaya_pod",
    F: "ars_nouveau:bastion_pod"
  })
  e.shaped("ars_nouveau:creative_spell_book",[
    "ABC",
    "DEF",
    "GHI"
  ], {
    H: "ars_nouveau:abjuration_essence",
    I: "ars_nouveau:wilden_tribute",
    B: "ars_nouveau:source_gem",
    E: "ars_nouveau:novice_spell_book",
    F: "ars_nouveau:manipulation_essence",
    A: "ars_nouveau:summon_focus",
    C: "ars_nouveau:jar_of_light",
    G: "ars_nouveau:void_jar",
    D: "ars_nouveau:conjuration_essence"
  })
  e.shaped("botania:fabulous_pool",[
    "ABA",
    "CDC",
    "ABA"
  ], {
    B: "botania:terrasteel_ingot",
    A: "botania:elf_glass",
    D: "botania:mana_pool",
    C: "botania:elementium_ingot"
  })
  e.shaped("gtceu:mv_machine_casing",[
    "AAA",
    "ABA",
    "AAA"
  ], {
    B: "#forge:tools/wrenches",
    A: "gtceu:manasteel_plate"
  })
  e.shaped("kubejs:charged_certus_block",[
    "AAA",
    "AAA",
    "AAA"
  ], {
    A: "ae2:charged_certus_quartz_crystal"
  })
  e.shaped("aiotbotania:livingrock_aiot",[
    "AB",
    "CD"
  ], {
    B: "tofucraft:tofu_terrain",
    D: "tofucraft:tofugem",
    A: "tofucraft:tofugrilled",
    C: "tofucraft:leek"
  })
  e.shaped(Item.of("aiotbotania:manasteel_aiot", '{Damage:0}'),[
    "AAA",
    "BBA",
    "CBA"
  ], {
    A: "tofucraft:blocktofumetal",
    C: "aiotbotania:livingrock_aiot",
    B: "tofucraft:tofumetal"
  })
  e.shaped(Item.of("aiotbotania:terra_aiot", '{Damage:0,hoemode:0b,mana:9999}'),[
    "AAA",
    "BBA",
    "CBA"
  ], {
    A: "tofucraft:tofudiamond",
    B: "tofucraft:tofudiamondnugget",
    C: "aiotbotania:manasteel_aiot"
  })
  e.shaped("kubejs:currant_milk_bucket",[
    "AB",
    "CD"
  ], {
    C: "rootsclassic:blackcurrant",
    A: "tofucraft:bucket_soymilk",
    B: "rootsclassic:whitecurrant",
    D: "rootsclassic:redcurrant"
  })
  e.shaped(Item.of("tofucraft:tofustick", '{Damage:0}'),[
    "A"
  ], {
    A: "kubejs:tofustick"
  })
  e.shaped("sweet_calamity:sugar_block",[
    "AAA",
    "ABA",
    "AAA"
  ], {
    A: "tofucraft:tofumetal",
    B: "tofucraft:tofugem"
  })
  e.shaped("ltc2:latiao_oven",[
    "ABA",
    "BCB",
    "ABA"
  ], {
    A: "sweet_calamity:petrified_cookie_block",
    B: "minecraft:blast_furnace",
    C: "ltc2:soylatiao"
  })
  e.shaped("minecraft:water_bucket",[
    " A ",
    "ABA",
    " C "
  ], {
    C: "kubejs:rough_bucket",
    B: "sweet_calamity:creamy_head",
    A: "sweet_calamity:magic_powder"
  })
  e.shaped("kubejs:tofu_crafting_table",[
    "AB",
    "CD"
  ], {
    A: "tofucraft:soymeat",
    C: "tofucraft:tofugem",
    D: "tofucraft:leek_green_stem",
    B: "tofucraft:tofuhamburg_raw"
  })
  e.shaped("kubejs:tofu_crafting_table",[
    "AB",
    "CD"
  ], {
    A: "tofucraft:soymeat",
    D: "tofucraft:tofustem",
    C: "tofucraft:tofugem",
    B: "tofucraft:tofuhamburg_raw"
  })
  e.shaped("sophisticatedbackpacks:backpack",[
    "ABA",
    "ACA",
    "BBB"
  ], {
    C: "tofucraft:tofuchest",
    A: "tofucraft:yuba",
    B: "minecraft:leather"
  })
  e.shaped("sophisticatedbackpacks:iron_backpack",[
    "ABA",
    "BCB",
    "ABA"
  ], {
    B: "tofucraft:blocktofumetal",
    C: "sophisticatedbackpacks:backpack",
    A: "tofucraft:tofumetal"
  })
  e.shaped("sophisticatedbackpacks:gold_backpack",[
    "ABA",
    "BCB",
    "ABA"
  ], {
    A: "tofucraft:zundaruby",
    B: "tofucraft:tofudiamond",
    C: "sophisticatedbackpacks:iron_backpack"
  })
  e.shaped("sophisticatedbackpacks:diamond_backpack",[
    "ABA",
    "BCB",
    "ABA"
  ], {
    A: "tofucraft:tofudiamond",
    B: "tofucraft:blocktofudiamond",
    C: "sophisticatedbackpacks:diamond_backpack"
  })
  e.shaped("summoningrituals:altar",[
    " A ",
    "BCB",
    "CCC"
  ], {
    B: "minecraft:emerald",
    A: "sweet_calamity:eclipse_carduus",
    C: "sweet_calamity:gummi_planks"
  })
  e.shaped("kubejs:tofu_smithing_table",[
    "AA",
    "BB"
  ], {
    A: "tofucraft:blocktofumetal",
    B: "tofucraft:leek_planks"
  })
  e.shaped("tofucraft:zunda_upgrade_smithing_template",[
    "ABA",
    "ACA",
    "AAA"
  ], {
    C: "tofucraft:zundaruby",
    B: "tofucraft:blocktofukinu",
    A: "tofucraft:tofukinu"
  })
  e.shaped("tofucraft:tofu_upgrade_smithing_template",[
    "ABA",
    "ACA",
    "AAA"
  ], {
    B: "tofucraft:tofudiamond",
    A: "tofucraft:tofuslate",
    C: "tofucraft:zunda_upgrade_smithing_template"
  })
  e.shaped("minecraft:dirt",[
    "ABC",
    "DEF",
    "GHI"
  ], {
    A: "deep_aether:floaty_scarf",
    E: "aether:aether_dirt",
    G: "deep_aether:slider_eye",
    I: "deep_aether:sun_core",
    C: "aether:victory_medal",
    B: "aether:sentry_stone",
    F: "deep_aether:stormforged_smithing_template",
    D: "deep_aether:stratus_smithing_template",
    H: "aether:sun_altar"
  })

});