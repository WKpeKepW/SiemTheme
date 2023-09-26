function InvertThemeBeta(){
    // Change('body','filter','invert(1)')
    // //Change('.pt-icons','filter','invert(1)',true,'#legacyApplicationFrame')
    // //Change('.pt-icons','filter','invert(1) !important',true,'#legacyApplicationFrame')
    // Change('.statistics-footer','background-color','#83ffd152',true,'#legacyApplicationFrame')
    // Change('.statistics-footer','border-top','#83ffd152',true,'#legacyApplicationFrame')
    // Change('.mc-navbar','filter','invert(1)',true,null,10000)
    // Change('.mc-navbar','background-color','#31200d',true,null,10000)
    // Change('mc-navbar-item, mc-navbar-focusable-item, mc-dropdown-trigger, mc-horizontal, ng-star-inserted','background-color','#31200d',true)
    // Change('.mc-navbar-item.mc-active, .mc-navbar-brand.mc-active, .mc-navbar-toggle.mc-active','background','black',true)
    // Change('.events-pdql_changed','background-color','#1b83a814',true,'#legacyApplicationFrame')
    let ncc = new NewCoreClass([
    {selector:'body',attr:'filter',value:'invert(1)'},
    {selector:'.pt-icons',attr:'filter',value:'invert(1)',iframe:'#legacyApplicationFrame',loop:true},
    {selector:'.mc-navbar',attr:'filter',value:'invert(1)'},
    {selector:'.mc-navbar',attr:'background-color',value:'#31200d'},
    {selector:'mc-navbar-item, mc-navbar-focusable-item, mc-dropdown-trigger, mc-horizontal, ng-star-inserted',attr:'background-color',value:'#31200d',loop:true},
    {selector:'.mc-navbar-item.mc-active, .mc-navbar-brand.mc-active, .mc-navbar-toggle.mc-active',attr:'background',value:'black',loop:true},
    {selector:'.statistics-footer',attr:'background-color',value:'#1b83a814',iframe:'#legacyApplicationFrame',loop:true},
],0)
ncc.StylesInterval()
}