$(document).ready(function(){
    $('#toggleButton').click(function(){
    if($('#toggleParagraph').is(':visible')) {
      $('#toggleParagraph').hide();
    } else {
      $('#toggleParagraph').show();
    }
  });
});

$(document).ready(function(){
  $('#toggleTextOnButton').click(function(){
    $('#toggleText').toggle();
    
    if($('#toggleText').is(':visible')) {
      $(this).val('Show Less');
    } else {
      $(this).val('Show More');
    }
  });
});

$(document).ready(function(){
  $('#hideButton').click(function(){
    $('#paragraphToFadeOut').fadeOut();
  });
});