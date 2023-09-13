//alert($('body'))//alert работает ли вообще скрипт и работает ли jquery
alert($(document));
$(document).on('click','select',()=>{
    //alert('rabotay')
    $('select').css('background-color',$('select option[value='+$('select').val()+']').css('background-color'))
    $('select').css('color',$('select option[value='+$('select').val()+']').css('color'))
})