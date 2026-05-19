ServerEvents.recipes(e => {
  e.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "mana": 100000,
    "reagent": { "item": 'ae2:cell_component_1k' }, 
    "pedestalItems": [
      { "item": 'ae2:logic_processor' },
      { "item": 'ae2:calculation_processor' },
      { "item": 'ae2:engineering_processor' },
      { "item": 'gtceu:basic_electronic_circuit' } 
    ],
    "output": { "item": 'ae2:cell_component_256k' } 
  }).id("kubejs:256k")
})
