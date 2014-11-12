/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(document).on('pagebeforeshow', '#page-messages', function(){
               //loads data everytime page is shown.
               
               
               // function pullTheData () {
               
               $("#myPostsList").empty();
               //Deletes previous list before re-calling it.
               
               
               var myOutput = $('#myPosts');
               
               
               //makes a variable that links to an ID.
               $.ajax({
                      beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
                      complete: function() { $.mobile.loading('hide'); },
                      url: 'http://wander-app.org/getMyPosts.php',
                      dataType: 'jsonp',
                      jsonp: 'jsoncallback',
                      timeout: 5000,
                      success: function(data, status){ //Calls the server
                      
                      $.each(data, function(i,item){
                             
                             if(item.myUserProfileID == $('#profileID').val()){
                             
                             console.log(JSON.stringify(item)); //Inject data to the cells
                             $('#myPostsList').append('<li class="ui-nodisc-icon" data-icon="listIcon" ><div class="behind"><a href="#" class="ui-btn delete-btn">Delete</a></div><a href="" data-myProfile='+item.myUserProfileID+' data-key='+item.myrandomPostId+'><img class="feedImage" src='+item.myPic+'></img><p><strong>'+item.myName+", "+item.myGender+'</p></strong>'
                                                     + '<p>'+item.myPost+'<p>'
                                                     
                                                     + '<p class="ui-li-aside" ><time class="timeago" datetime='+item.myTime+'></time></p></a></li>'
                                                     );
                             
                                    }
                             
                                    });
                             
                      
                            $('#myPostsList').listview( "refresh" );
                            $('.timeago').timeago();
                      
                      },
                      error: function(){
                      output.text('There was an error loading the data.');//Handles error to connect to database
                      }
                      
                      });
               
               });


// Will handle on tap to switch to single post page

$(document).on('tap', '#myPostsList li a', function(){   //calls for the function on tap
               
               $.mobile.changePage( "#individualPost", { transition: "fade", changeHash: false }); // disply the new #individualPost page after taping
               
               
               
               
               $("#myPost").empty();
               //Clear List Before Clone.
               
               
               document.getElementById("replyid").value = $(this).attr('data-key');
               //place the id from the data-key attribute to the replyid div
               
               $(this).clone().appendTo('#myPost');
               //Clone selected listview Values.
               
               
               
               
               
               
               
               $('#myPost').value(function (index, value) {
                                  return value + ' at ' + index;
                                  });
               
               
               
               $( '#myPost' ).listview( "refresh" );
               //Refresh List After Cloning and Appending.
               
               });


$(function() {
    function prevent_default(e) {
        e.preventDefault();
    }
    function disable_scroll() {
        $(document).on('touchmove', prevent_default);
    }
   /* function enable_scroll() {
        $(document).unbind('touchmove', prevent_default)
    }*/
    var x;
    $(document)
        .on('touchstart', '.swipe-delete li > a', function(e) {
            console.log(e.originalEvent.pageX)
            $('.swipe-delete li > a.open').css('left', '0px').removeClass('open') // close em all
            $(e.currentTarget).addClass('open')
            x = e.originalEvent.targetTouches[0].pageX // anchor point
        })
        .on('touchmove', '.swipe-delete li > a', function(e) {
            var change = e.originalEvent.targetTouches[0].pageX - x
            change = Math.min(Math.max(-100, change), 100) // restrict to -100px left, 0px right
            e.currentTarget.style.left = change + 'px'
            if (change < -10) disable_scroll() // disable scroll once we hit 10px horizontal slide
        })
        .on('touchend', '.swipe-delete li > a', function(e) {
            var left = parseInt(e.currentTarget.style.left)
            var new_left;
            if (left < -35) {
                new_left = '-100px'
            //} else if (left > 35) {
              //  new_left = '100px'
            } else {
                new_left = '0px'
            }
             e.currentTarget.style.left = new_left
            //$(e.currentTarget).animate({left: new_left}, 200)
            //enable_scroll()
        });
    $('li .delete-btn').on('touchend', function(e) {
        e.preventDefault()
        $(this).parents('li').slideUp('fast', function() {
            $(this).remove()
        })
    })
}); 






//// Post - userPost
//// Name - userName
//// Gender - userGender
//// Pic - userPic
//// Time - postTime
//// theDate - postDate