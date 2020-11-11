$(document).on('ready turbolinks:load', function(){
    $('div[data-accordion]').click(function(){
        $("p").toggle();
      });
})