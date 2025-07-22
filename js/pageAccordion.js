$(document).ready(function() {
    $('.accordion-row').each(function(){
        $(this).css('cursor', 'pointer')
        if ($(this).hasClass('accordion-row-open')){
            $(this).find('.accordion-row-body').show();
            $(this).find('.accordion-row-title').addClass('accordion-row-opened');
        } else {
            $(this).find('.accordion-row-body').hide();
            $(this).find('.accordion-row-title').addClass('accordion-row-closed');
        }
    });

    $('body').on('click', '.accordion-row-title', function(){
        $(this).parent().find('.accordion-row-body').toggle(100);
        if ($(this).hasClass('accordion-row-opened')){
            $(this).removeClass('accordion-row-opened');
            $(this).addClass('accordion-row-closed')
        } else {
            $(this).addClass('accordion-row-opened');
            $(this).removeClass('accordion-row-closed')
        }
    });
});
