// 文件路径：kubejs/startup_scripts/metal_tofu_power.js

// 注册自定义饰品物品
StartupEvents.registry('item', event => {
    event.create('gtmc')
        .displayName('GTMC员工凭证')  // §f 用于设置颜色为白色
        .tooltip('§7这枚饰品蕴含着令人生畏的员工意志，可以佩戴在员工栏位。')
        .maxStackSize(1)
        .unstackable()
        .rarity('epic')
        .tag("curios:gtmc_staff")
})

