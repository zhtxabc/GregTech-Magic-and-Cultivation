ServerEvents.tags('item', event => {
    const circuitMap = {
        lv: 'kubejs:lv_processor',
        mv: 'kubejs:mv_processor',
        hv: 'kubejs:hv_processor',
        ev: 'kubejs:ev_processor',
        iv: 'kubejs:iv_processor',
        luv: 'kubejs:luv_processor',  
        zpm: 'kubejs:zpm_processor',
        uv: 'kubejs:uv_processor',
        uhv: 'kubejs:uhv_processor',
        uev: 'kubejs:uev_processor',
        uiv: 'kubejs:uiv_processor',
        uxv: 'kubejs:uxv_processor',
        opv: 'kubejs:opv_processor',
        max: 'kubejs:max_processor'
    }

    for (const [tier, item] of Object.entries(circuitMap)) {
        event.add(`gtceu:circuits/${tier}`, item)
    }
})