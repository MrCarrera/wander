/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


                  
        $(document).on('pageshow', '#page-activity', function(){
                       
                       
                                   $("#myListView").empty();
                       
                                       
                                   var output = $('#activityContent');
                                   //makes a variable that links to an ID. 
                                   $.ajax({
                                          url: 'http://wander-app.org/getPost.php',
                                          dataType: 'jsonp',
                                          jsonp: 'jsoncallback',
                                          timeout: 5000,
                                          success: function(data, status){ //Calls the server
                                          $.each(data, function(i,item){
                                              console.log(JSON.stringify(item)); //Inject data to the cells
                                                 $('#myListView').append('<li class="ui-nodisc-icon" data-icon="listIcon" ><a href=""><img class="feedImage" src='+item.Pic+'></img><p><strong>'+item.Name+", "+item.Gender+'</p></strong>'
                                                 + '<p>'+item.Post+'<p>'
                                                 
                                                 + '<p class="ui-li-aside">'+item.Time+'</p>'+'<p>'+item.theDate+'</p></a></li>');                                                
                                                 });          
                                                 
                                                 
                                                    $( '#myListView' ).listview( "refresh" );
                                          },
                                          error: function(){
                                          output.text('There was an error loading the data.');//Handles error to connect to database
                                          }
                                          });
                                   });

                  
   // Will handle on tap to switch to single post page
   
   $(document).on('tap', '#myListView li a', function(){   //calls for the function on tap 
       
    $.mobile.changePage( "#individualPost", { transition: "fade", changeHash: false }); // disply the new #individualPost page after taping
});


           
 

// Post - userPost
// Name - userName
// Gender - userGender
// Pic - userPic
// Time - postTime
// theDate - postDate