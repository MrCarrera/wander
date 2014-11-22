

$(function() {
  function prevent_default(e) {
  e.preventDefault();
  }
  function disable_scroll() {
  $(document).on('touchmove','#myPostsList .ui-content', prevent_default);
  }
  function enable_scroll() {
  $(document).unbind('touchmove',' #myPostsList .ui-content', prevent_default);
  }
  var x;
  $(document)
  .on('touchstart', '.swipe-delete li > a', function(e) {
      console.log(e.originalEvent.pageX);      
      ///// GET ID OF SELECTED POST AND STORE IN A DIV FOR AJAX /////
      document.getElementById("myPostIDStorage").value = $(this).attr('data-key');
      
      $('.swipe-delete li > a.open').css('left', '0px').removeClass('open') ;// close em all
      $(e.currentTarget).addClass('open');
      x = e.originalEvent.targetTouches[0].pageX // anchor point
      
      
      
      
      })
  .on('touchmove', '.swipe-delete li > a', function(e) {
      
      var change = e.originalEvent.targetTouches[0].pageX - x;
      change = Math.min(Math.max(-100, change), 100); // restrict to -100px left, 0px right
      e.currentTarget.style.left = change + 'px';
      if (change < -10) disable_scroll() // disable scroll once we hit 10px horizontal slide
      })
  .on('touchend', '.swipe-delete li > a', function(e) {
      var left = parseInt(e.currentTarget.style.left);
      
      var new_left;
      if (left < -35) {
      new_left = '-100px';
      } /*else if (left > 35) {
         new_left = '100px'
         } */ else {
      new_left = '0px';
      }
      //e.currentTarget.style.left = new_left
      $(e.currentTarget).animate({left: new_left}, 200)
      enable_scroll();
      });
  
  });



/////////////////////////// FUNCTION TO DELETE SELECTED POST FROM DATABASE ///////////

                  function deleteThisPost() {
                                        $.ajax({
                                               type: 'GET',
                                               data: 'myPostIDValue='+$('#myPostIDStorage').val(),
                                               url: 'http://wander-app.org/deletePosts.php',
                                               timeout: 5000,
                                               success: function(data){
                                                   $('#'+ $('#myPostIDStorage').val()).remove();
                                               },
                                               
                                               error: function(){
                                               
                                               alert('Error Deleting Post');
                                               
                                               }
                                               
                                            });
                                        
                      
                                        return false;
                                    };
                  


