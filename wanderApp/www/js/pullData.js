/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Makes back button return user to page they came from.

jQuery(document).ready(function() {
    // CHANGES POST THREAD BACK BUTTON HREF TO #page-activity TO RETURN TO ALL POSTS
    $(document).on('click', '.toThisPost', function(){
       $("#postThreadBack").attr("href", "#page-activity");
    });
});

// Calls server to populate main page with users posts.

$(document).on('pagebeforeshow', '#page-activity', function(pullTheData){
               //loads data everytime page is shown.
               
               
               // function pullTheData () {
               
               $("#myListView").empty();
               //Deletes previous list before re-calling it.
               
               
               var output = $('#activityContent');
               //makes a variable that links to an ID. Used to output error message.
               
               
               $.ajax({
                      beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
                      complete: function() { $.mobile.loading('hide'); },//hide spinner
                      type: 'GET',
                      data: 'val='+$('#extraUserLat').val()+'&val2='+$('#extraUserLong').val()+'&val3='+$("#slider-1").val(),
                      //Send users current lat & long as well as the slider search value to the php file.
                      //Lat, long and slider value filter the database results to show nearby posts.
                      url: 'http://wander-app.org/getMainPostsKM.php',
                      dataType: 'jsonp',
                      jsonp: 'jsoncallback',
                      timeout: 5000,
                      success: function(data, status){ //Calls the server
                      
                      $.each(data, function(i,item){
                             
                             if (item.Gender=='male'&& $("#flip-1").val()=="on"){
                             //if statement used to filter by gender - if gender switches changed.
                             
                             console.log(JSON.stringify(item)); //Output posts in a list.
                             $('#myListView').append('<li class="ui-nodisc-icon" data-icon="listIcon" ><a href="" class="toThisPost" data-key='+item.randomPostId+' data-profileUserID='+item.mainUserProfileID+'><img class="feedImage" src='+item.Pic+'></img><p><strong>'+item.Name+", "+item.Gender+'</p></strong>'
                                                     
                                                     + '<p>'+item.Post+'<p>'
                                                     
                                                     + '<p class="ui-li-aside" ><time class="timeago" datetime='+item.Time+'></time></p></a></li>');
                             }
                             else if (item.Gender=='female'&& $("#flip-2").val()=="on"){
                             console.log(JSON.stringify(item));//Output posts in a list.
                             $('#myListView').append('<li class="ui-nodisc-icon" data-icon="listIcon" ><a href="" class="toThisPost" data-key='+item.randomPostId+' data-profileUserID='+item.mainUserProfileID+'><img class="feedImage" src='+item.Pic+'></img><p><strong>'+item.Name+", "+item.Gender+'</p></strong>'
                                                     
                                                     + '<p>'+item.Post+'<p>'
                                                     
                                                     + '<p class="ui-li-aside" ><time class="timeago" datetime='+item.Time+'></time></p></a></li>');
                             
                             
                             }
                             });
                      
                      
                      $( '#myListView' ).listview( "refresh" );
                      //refresh list after data pull
                      $('.timeago').timeago();
                      //Timeago plugin used to show time since post - converts time stamp to text values.
                      },
                      error: function(){
                      output.text('There was an error loading the data.');
                      //Handles error to connect to database
                      }
                      
                      });
               
               });


// Will handle on tap to switch to single post page

$(document).on('tap', '#myListView li a', function(){   //calls for the function on tap
               
               $.mobile.changePage( "#individualPost", { transition: "fade", changeHash: false });
               // disply the new #individualPost page after taping
              
               $("#myPost").empty();
               //Clear List Before Clone.
               
               document.getElementById("replyid").value = $(this).attr('data-key');
               //place the id from the data-key attribute to the replyid div.
               //This is used to identify which replies correspond to the selected post.
               //The post has a unique replyID which is attatched to all corresponding replies.
               //later these replies can be called as they have matching replyID with the post.
               
               document.getElementById("otherProfileID").value = $(this).attr('data-profileUserID');
               //place profile id of selected post in a div to later use to get profile of the poster
               //This allows us to pull the profile of the user who created the post by selecting a profile with a corresponding unique profileID
               
              
               //$(this).attr("href", "#individualProfile");
               
               $(this).clone().appendTo('#myPost').append('<div id="linkToProfile"><a href="#"></a></div>');
               //Clone selected listview Values.
               
              
               $('#myPost').value(function (index, value) {
                                  return value + ' at ' + index;
                                  });
               
               $( '#myPost' ).listview( "refresh" );
               //Refresh List After Cloning and Appending.
                
               });



