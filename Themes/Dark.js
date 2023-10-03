const iframe = '#legacyApplicationFrame'
const selectTimeOut = 5000
const background = 'background'
const backgroundColorOne = 'rgb(24,24,24)'
const backgroundColorTwo = 'rgb(42,42,42)'
const backgroundColorThree = 'rgb(32 59 77)'//изначально прозрачный на 80%
const backgroundColorFour = '#261e0d'
const backgroundColorFive = '#393939'
const border = 'border'
const borderColor = '1px solid #393939'
const color = 'color'
const colorColorOne = '#338fcc'
const colorColorTwo = '#e2e2e2'
const colorColorThree = '#777777'

function Dark(version){
    if(version == 25)
        v25()
    else
        v24()
}

function v25(){
    let ncc = new NewCoreClass([
        {selector:'.mc-modal .mc-modal-content',attr:background,value:backgroundColorTwo},
        {selector:'.mc-modal .mc-modal-footer',attr:background,value:backgroundColorTwo},
        //refresher .pt-refresher .mc-dropdown-menu
        //.mc-dropdown-menu
        {selector:'.mc-dropdown-menu',attr:background,value:backgroundColorTwo,iframe:iframe,loop:true},
        {selector:'.mc-dropdown-menu',attr:border,value:borderColor,iframe:iframe,loop:true},

        {selector:'.mc-dropdown__panel',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'.mc-dropdown__panel',attr:border,value:borderColor,loop:true},
        {selector:'.mc-dropdown-item',attr:color,value:colorColorTwo,loop:true},

        {selector:'.mc-sidepanel-content',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'pt-siem-context-help .context-help-panel',attr:'box-shadow',value:`0 0 0 1px ${backgroundColorFive}`,loop:true},
        {selector:'.mc-sidepanel-header',attr:'border-bottom',value:borderColor,loop:true},
        {selector:'.mc-sidepanel-footer',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'.mc-sidepanel-footer',attr:'border-top',value:borderColor,loop:true},

        {selector:'pt-notifications-center-content .notifications-center-content',attr:'border-color',value:backgroundColorFive,loop:true},
        {selector:'pt-notifications-center-header .notifications-center-header',attr:background,value:backgroundColorOne,loop:true},
        {selector:'pt-notifications-center-header .notifications-center-header',attr:'border-color',value:backgroundColorFive,loop:true},
        {selector:'pt-notifications-center-content .notifications-center-content',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'pt-notifications-group .notifications-group .notifications-group__header',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'pt-notifications-group .notifications-group .notifications-group__header',attr:color,value:colorColorTwo,loop:true},
        {selector:'pt-notification .notification',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'pt-notification .notification',attr:border,value:borderColor,loop:true},
        {selector:'pt-notifications-group .notifications-group .notifications-group__header',attr:'border-bottom',value:borderColor,loop:true},
        {selector:'pt-notifications-center-header .notifications-center-header .notifications-center-header__title-text',attr:color,value:colorColorTwo,loop:true},
        {selector:'pt-health-monitoring-header .health-monitoring-header .health-monitoring__title-text',attr:color,value:colorColorTwo,loop:true},
        {selector:'pt-health-monitoring-content .health-monitoring-content',attr:'border-color',value:backgroundColorFive,loop:true},
        {selector:'pt-health-monitoring-content .health-monitoring-content',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'pt-health-monitoring-header .health-monitoring-header',attr:background,value:backgroundColorOne,loop:true},
        {selector:'pt-health-monitoring-header .health-monitoring-header',attr:'border-color',value:backgroundColorFive,loop:true},

        {selector:'.horizontal-line',attr:'border-bottom',value:borderColor,iframe:iframe,loop:true},
        {selector:'events-visualization widget-configurator',attr:'border-right',value:borderColor,iframe:iframe,loop:true},

        {selector:'body',attr:color,value:colorColorTwo,iframe:iframe},
        {selector:'body',attr:background,value:backgroundColorOne,iframe:iframe},
        {selector:'body',attr:background,value:backgroundColorOne},
        {selector:'.view-container',attr:background,value:backgroundColorOne,iframe:iframe,loop:true},
        {selector:'.pt-container .pt-section',attr:background,value:backgroundColorTwo,iframe:iframe,loop:true},
        {selector:'.pt-container .pt-section',attr:border,value:borderColor,iframe:iframe,loop:true},
        {selector:'.mc-loader-wrapper',attr:background,value:backgroundColorOne,iframe:iframe,loop:true},
        {selector:'.events-view__data>section',attr:'border-bottom',value:borderColor,iframe:iframe,loop:true},
        {selector:'.events-view__data>section',attr:background,value:backgroundColorTwo,iframe:iframe,loop:true},
        {selector:'.events-pdql_changed',attr:background,value:backgroundColorFour,iframe:iframe,loop:true},
        {selector:'.ui-grid-header',attr:'border-bottom',value:borderColor,iframe:iframe,loop:true},
        {selector:'.left-border',attr:'border-left',value:borderColor,iframe:iframe,loop:true}, //layout-column grid-container_ie-fix left-border //timeout
        {selector:'.mc-action-bar',attr:background,value:backgroundColorOne,iframe:iframe,loop:true},
        {selector:'.mc-sidebar mc-sidebar-opened .mc-sidebar-header, mc-sidebar mc-sidebar-opened .mc-sidebar-header', attr:border,value:borderColor,iframe:iframe,loop:true},
        {selector:'.pt-section-header.pt-section-header_with-border, checks-view .check-view__action-bar.mc-action-bar_bottom-border', attr:border,value:borderColor,iframe:iframe,loop:true},
        
        {selector:`mc-select .mc-select .mc-select-match-multiple .mc-select-match-multiple__wrapper, mc-select .mc-select .mc-select-match-multiple
         .mc-select-match__wrapper, mc-select .mc-select .mc-select-match .mc-select-match-multiple__wrapper, mc-select
          .mc-select .mc-select-match .mc-select-match__wrapper`, attr:background,value:backgroundColorOne,iframe:iframe,loop:true},
          {selector:`mc-select .mc-select .mc-select-match-multiple .mc-select-match-multiple__wrapper, mc-select .mc-select .mc-select-match-multiple
         .mc-select-match__wrapper, mc-select .mc-select .mc-select-match .mc-select-match-multiple__wrapper, mc-select
          .mc-select .mc-select-match .mc-select-match__wrapper`, attr:color,value:colorColorTwo,iframe:iframe,loop:true},
          {selector:`mc-select .mc-select .mc-select-match-multiple .mc-select-match-multiple__wrapper, mc-select .mc-select .mc-select-match-multiple
         .mc-select-match__wrapper, mc-select .mc-select .mc-select-match .mc-select-match-multiple__wrapper, mc-select
          .mc-select .mc-select-match .mc-select-match__wrapper`, attr:border,value:borderColor,iframe:iframe,loop:true},

        {selector:'.mc-modal__content',attr:background,value:backgroundColorTwo,iframe:iframe,loop:true},

        {selector:'.mc-popover',attr:background,value:backgroundColorTwo,iframe:iframe,loop:true},
        {selector:'.mc-popover',attr:border,value:borderColor,iframe:iframe,loop:true},
        {selector:'.mc-popover',attr:color,value:colorColorTwo,iframe:iframe,loop:true},
        {selector:'.mc-popover__content',attr:color,value:colorColorTwo,iframe:iframe,loop:true},
        {selector:'mc-input-container input, mc-input-container textarea',attr:border,value:borderColor,iframe:iframe,loop:true},
        {selector:'mc-input-container input, mc-input-container textarea',attr:background,value:backgroundColorOne,iframe:iframe,loop:true},
        {selector:'mc-input-container input, mc-input-container textarea',attr:color,value:colorColorTwo,iframe:iframe,loop:true},
        {selector:'.mc-btn-default, .mc-btn_gray',attr:background,value:backgroundColorOne,iframe:iframe,loop:true},
        {selector:'mc-type-ahead-match .mc-typeahead-match__multiple',attr:background,value:backgroundColorOne,iframe:iframe,loop:true},
        {selector:'.filter-pipeline__tag',attr:background,value:backgroundColorThree,iframe:iframe,loop:true},
        {selector:'.filter-pipeline__tag',attr:border,value:backgroundColorTwo,iframe:iframe,loop:true},
        
        {selector:'.mc-tree__node-frame',attr:background,value:backgroundColorTwo,iframe:iframe,loop:true},
        {selector:'.mc-tree__node-link.mc-active .mc-tree__node-frame',attr:background,value:backgroundColorThree,iframe:iframe,loop:true},

        {selector:'.ui-grid .ui-grid-canvas .ui-grid-row [ui-grid-row=row]',attr:background,value:backgroundColorTwo,iframe:iframe,loop:true},
        {selector:'.ui-grid-canvas .ui-grid-row.ui-grid-row-selected>[ui-grid-row]',attr:background,value:backgroundColorThree,iframe:iframe,loop:true},

        {selector:'.ui-grid-cell .ui-grid-cell-contents',attr:color,value:colorColorTwo,iframe:iframe,loop:true},
        {selector:'.mc-h4, .mc-h4-light, .mc-h5',attr:color,value:colorColorTwo,iframe:iframe,loop:true},
        {selector:'.mc-h4, .mc-h4-light, .mc-h5',attr:color,value:colorColorThree,iframe:iframe,loop:true},

        {selector:'.tag-info',attr:background,value:backgroundColorThree,iframe:iframe,loop:true},
        {selector:'.tag-info',attr:border,value:backgroundColorTwo,iframe:iframe,loop:true},
        {selector:'.mc-alert_info',attr:background,value:backgroundColorOne,iframe:iframe,loop:true},
        {selector:'.mc-alert_info',attr:border,value:borderColor,iframe:iframe,loop:true},
        {selector:'.mc-alert_info',attr:color,value:colorColorOne,iframe:iframe,loop:true},
        {selector:'.statistics-footer',attr:background,value:backgroundColorFour,iframe:iframe,loop:true},
        {selector:'.statistics-footer',attr:'border-top',value:borderColor,iframe:iframe,loop:true},
        {selector:'.statistics-footer',attr:color,value:colorColorOne,iframe:iframe,loop:true},

        {selector:'.highcharts-background',attr:'fill',value:backgroundColorTwo,iframe:iframe,loop:true},
        {selector:'mc-timepicker>input',attr:background,value:backgroundColorOne,iframe:iframe,loop:true},
        {selector:'mc-timepicker>input',attr:color,value:colorColorTwo,iframe:iframe,loop:true},
        {selector:'mc-timepicker>input',attr:border,value:borderColor,iframe:iframe,loop:true},

        {selector:'.mc-dropdown-item',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'.dropdown-menu',attr:background,value:backgroundColorOne,loop:true,iframe:iframe},
        {selector:'.mc-dl .mc-dd, .mc-dl dd, dl .mc-dd, dl dd',attr:color,value:colorColorTwo,loop:true,iframe:iframe},
        {selector:'.mc-dropdown-item.mc-selected',attr:background,value:backgroundColorThree,loop:true},

        {selector:'.mc-select-dropdown',attr:background,value:backgroundColorTwo,loop:true,iframe:iframe},
        {selector:'mc-select-list-choices .mc-select-choices',attr:'border-top',value:borderColor,loop:true,iframe:iframe},
        {selector:'.mc-list__list .mc-list__item .mc-list__item-tpl.mc-active',attr:background,value:backgroundColorThree,loop:true,iframe:iframe},
        {selector:'mc-select-list-choices .mc-select-choices mc-list .mc-list .mc-list__item-tpl .mc-list-item__text',attr:color,value:colorColorTwo,loop:true,iframe:iframe},


        {selector:'.widget-wrapper',attr:background,value:backgroundColorTwo,loop:true,iframe:iframe},
        {selector:'.widget-wrapper',attr:border,value:borderColor,loop:true,iframe:iframe},
        {selector:'.mc-alert_error, checks-view .check-view__header.check-view__header_fail',attr:background,value:backgroundColorThree,loop:true,iframe:iframe},
        {selector:'.mc-alert_error, checks-view .check-view__header.check-view__header_fail',attr:border,value:borderColor,loop:true,iframe:iframe},
        //{selector:'.dashboards-list mc-list.mc-list_horizontal .mc-list .mc-list__item .mc-list__item-tpl .mc-list-item__text',attr:color,value:'white !important',loop:true,iframe:iframe},
        {selector:'.pt-section',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'.ag-root.ag-layout-normal',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'.mc-action-bar',attr:background,value:backgroundColorOne,loop:true},
        {selector:'.mc-splitter',attr:background,value:backgroundColorOne,loop:true},
        {selector:'ag-grid-angular [class^=ag-], ag-grid-angular [class^=ag-]:focus, ag-grid-angular [class^=ag-]:after, ag-grid-angular [class^=ag-]:before',attr:background,value:backgroundColorTwo,loop:true},
        {selector:'.mc-button.mc-second, .mc-icon-button.mc-second',attr:color,value:colorColorTwo,loop:true},
        //{selector:'ag-grid-angular .ag-header-container',attr:background,value:backgroundColorOne,loop:true},
        {selector:'ag-grid-angular .ag-header',attr:'border-bottom',value:borderColor,loop:true},
        {selector:'.mc-sidebar-opened .mc-sidebar-header',attr:'border-bottom',value:borderColor,loop:true},
        {selector:'.pt-section-header.pt-section-header_with-border',attr:'border-bottom',value:borderColor,loop:true},
    ],0)
    ncc.NewRule([
        {selector:`::-webkit-scrollbar {
            width: 10px;
            height: 10px;
            box-shadow: inset 1px 1px #0000001f;
            -webkit-transition: all .5s cubic-bezier(.35,0,.25,1);
            transition: all .5s cubic-bezier(.35,0,.25,1);
            background-color: ${backgroundColorFive}
        }`,iframe:iframe},
        {selector:`::-webkit-scrollbar:hover {
            box-shadow: inset 1px 1px #0000000e,inset 0 -1px #0000000a;
            background-color: ${backgroundColorThree}
        }`,iframe:iframe},
        {selector:`::-webkit-scrollbar-button {
            display: none
        }`,iframe:iframe},
        {selector:`::-webkit-scrollbar-corner {
            background-color: transparent
        }`,iframe:iframe},
        {selector:`::-webkit-scrollbar-thumb {
            background-color: ${colorColorOne};
            box-shadow: inset 1px 1px #0000000e,inset 0 -1px #00000016;
            -webkit-transition: all .5s cubic-bezier(.35,0,.25,1);
            transition: all .5s cubic-bezier(.35,0,.25,1)
        }`,iframe:iframe}
    ])
    ncc.StylesInterval()
}
function v24(){

}

//legacyApplicationFrame
//view-container rgb(24,24,24)
//.pt-container .pt-section | pt-block pt-section events-view__data rgb(32,32,32);     border: 1px solid #000000;
//mc-navbar
//mc-navbar-bar

// {selector:'body',attr:'filter',value:'invert(1)'},
//         {selector:'.pt-icons',attr:'filter',value:'invert(1)',iframe:'#legacyApplicationFrame',loop:true},
//         {selector:'.mc-navbar',attr:'filter',value:'invert(1)'},
//         {selector:'.mc-navbar',attr:'background-color',value:'#31200d'},
//         {selector:'mc-navbar-item, mc-navbar-focusable-item, mc-dropdown-trigger, mc-horizontal, ng-star-inserted',attr:'background-color',value:'#31200d',loop:true},
//         {selector:'.mc-navbar-item.mc-active, .mc-navbar-brand.mc-active, .mc-navbar-toggle.mc-active',attr:'background',value:'black',loop:true},
//         {selector:'.statistics-footer',attr:'background-color',value:'#1b83a814',iframe:'#legacyApplicationFrame',loop:true},

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

    