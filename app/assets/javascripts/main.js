$( document ).on('turbolinks:load', function() {

  $(function(){
   if($('body').is('.write-game')){
     writeGame(createResponsiveCanvas());
   }
 });

  $(function(){
   if($('body').is('.read-game')){
    readGame(createResponsiveCanvas());
   }
 });

});
