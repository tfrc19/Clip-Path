$(document).ready(function(e){
    var articulo =$('#articulos');
    articulo = articulo.offset().top;
    $('#dow-up').on('click',function(e){
        e.preventDefault();   
        $('html,body').animate({
            scrollTop:articulo
        },200);
    });
});