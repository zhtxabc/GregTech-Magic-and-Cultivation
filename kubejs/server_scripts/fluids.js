ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "kubejs:liquid_magic_source",
        },
        "ingredients": [
            { "item": "gtceu:lv_electric_motor" },
            { "item": "gtceu:rubber_plate" }
        ],
        "result": {
            "item": "gtceu:lv_conveyor_module",
        }
    });
});

ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "kubejs:my_cool_fluid",
        },
        "ingredients": [
            { "item": "minecraft:iron_block" }
        ],
        "result": {
            "item": "gtceu:wrought_iron_block",
        }
    });
});

ServerEvents.recipes(event => {
    event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "fluid",
            tag: "kubejs:currant_milk"
        },
        ingredients: [
            { item: 'kubejs:half_tofu_staff' }
        ],
        result: {
            item: 'kubejs:tofustick',
        }
    });
});

ServerEvents.recipes(event => {
    event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "fluid",
            tag: "kubejs:currant_milk"
        },
        ingredients: [
            { item: 'kubejs:blank_teleporter' }
        ],
        result: {
            item: 'kubejs:tofu_world',
        }
    });
});

ServerEvents.recipes(event => {
    event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "fluid",
            tag: "kubejs:roasted_gum"
        },
        ingredients: [
            { item: 'sweet_calamity:chocolate_magic_plate' },
            { item: 'sweet_calamity:cream_magic_plate' },
            { item: 'sweet_calamity:crunchy_magic_plate' },
            { item: 'sweet_calamity:sticky_magic_plate' },
            { item: 'sweet_calamity:sweet_magic_plate' },
            { item: 'ltc2:latiao_oven' },
        ],
        result: {
            item: 'ltc2:mill',
        }
    });
});
