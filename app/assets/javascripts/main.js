$( document ).on('turbolinks:load', function() {

  $(function(){
    if($('body').is('.splash')){
      splash(createResponsiveCanvas());
    }
  });

  $(function(){
   if($('body').is('.write-game')){
     writeGame(createResponsiveCanvas());
   }
 });

  $(function(){
   if($('body').is(".panda-game")){
      memoryPanda();
   }
 });

  $(function(){
    if($('body').is('.read-game')){
      readGame(createResponsiveCanvas());
    }
  });

  $(function(){
    if($('body').is('.draw-game')){
      drawGame(createResponsiveCanvas());
    }
  });

});
