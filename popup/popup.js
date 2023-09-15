//window.currentTheme = { theme: getCookie('currentTheme')}//найти способ перенести данные о куки на основную страницу
$(document).ready(()=>{
    let valueTheme = getCookie('currentTheme')
    sessionStorage.setItem('currentTheme', getCookie('currentTheme'))
    if(valueTheme == undefined){
        let date = new Date(Date.now() + 86400e3*60);
        date = date.toUTCString();
        document.cookie = 'currentTheme=default; expires='+date
    }
    else
        $('select').val(valueTheme).change()
    styleSelect()
})

$(document).on('click','select',()=>{
    styleSelect()
    changeThemeJson()
})


function styleSelect(){
    $('select').css('background-color',$('select option[value='+$('select').val()+']').css('background-color'))
    $('select').css('color',$('select option[value='+$('select').val()+']').css('color'))
}

function changeThemeJson(){
    console.log($('select').val())
    document.cookie = 'currentTheme='+$('select').val()
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}