// 文件路径: kubejs/server_scripts/faem.js
ServerEvents.recipes(event => {
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [{ item: 'gtceu:bronze_machine_casing' }],
    result: { item: 'gtceu:bronze_brick_casing', count: 2 },
    tool: { tag: 'forge:tools/wrenches' }
});

    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [{ item: 'kubejs:rainbow_petal' }],
        result: { item: 'kubejs:rainbow_petal', count: 2 },
        tool: { item: 'aiotbotania:livingrock_aiot' } 
    });

    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        'kubejs:dense_copper_ingot',
        'gtceu:tin_ingot'
    ],
    result: { item: 'gtceu:bronze_ingot', count: 16 },
    cookingtime: 80,
    experience: 2.0   
    });

   event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        'minecraft:redstone',
        'minecraft:iron_ingot'
    ],
    result: { item: 'gtceu:red_alloy_ingot', count: 8 },
    cookingtime: 20,
    experience: 2.0
    });

    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        '#minecraft:leaves'
    ],
    result: { item: 'kubejs:livingrock_water_bucket', count: 1 },
    container: { item: 'kubejs:livingrock_bucket' },
    cookingtime: 20,
    experience: 2.0
    });

    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        'minecraft:copper_ingot',
        'gtceu:nickel_ingot'
    ],
    result: { item: 'gtceu:cupronickel_ingot', count: 8 },
    cookingtime: 20,
    experience: 2.0
    });

    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        'minecraft:redstone',
        'minecraft:iron_ingot'
    ],
    result: { item: 'gtceu:red_alloy_ingot', count: 8 },
    cookingtime: 20,
    experience: 2.0
    });

    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        'minecraft:redstone',
        'minecraft:iron_ingot'
    ],
    result: { item: 'gtceu:red_alloy_ingot', count: 8 },
    cookingtime: 20,
    experience: 2.0
    });

    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        'minecraft:redstone',
        'minecraft:iron_ingot'
    ],
    result: { item: 'gtceu:red_alloy_ingot', count: 8 },
    cookingtime: 20,
    experience: 2.0
    });

    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        'minecraft:redstone',
        'minecraft:iron_ingot'
    ],
    result: { item: 'gtceu:red_alloy_ingot', count: 8 },
    cookingtime: 20,
    experience: 2.0
    });

    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        'minecraft:redstone',
        'minecraft:iron_ingot'
    ],
    result: { item: 'gtceu:red_alloy_ingot', count: 8 },
    cookingtime: 20,
    experience: 2.0
    });

    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        'minecraft:redstone',
        'minecraft:iron_ingot'
    ],
    result: { item: 'gtceu:red_alloy_ingot', count: 8 },
    cookingtime: 20,
    experience: 2.0
    });
})