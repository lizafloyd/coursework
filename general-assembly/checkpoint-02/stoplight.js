$('div').on('click', light)
function light(){
    $(this).siblings().removeClass('active')
    $(this).toggleClass('active')
    if ($(this).attr('id') == 'yellow') {
      setTimeout(function (){
        $('#yellow').toggleClass('active')
        $('#red').toggleClass('active')
      }, 2000)
    }
}
