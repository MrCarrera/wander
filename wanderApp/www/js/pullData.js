/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).on('pagebeforeshow', '#page-activity', function(pullTheData){
               //loads data everytime page is shown.
               
               
               // function pullTheData () {
               
               $("#myListView").empty();
               //Deletes previous list before re-calling it.
               
               
               var output = $('#activityContent');
               
               
               //makes a variable that links to an ID.
               $.ajax({
                      beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
                      complete: function() { $.mobile.loading('hide'); },//hide spinner
                      type: 'GET',
                      data: 'val='+$('#extraUserLat').val()+'&val2='+$('#extraUserLong').val()+'&val3='+$("#slider-1").val(),
                      url: 'http://wander-app.org/getMainPosts.php',
                      dataType: 'jsonp',
                      jsonp: 'jsoncallback',
                      timeout: 5000,
                      success: function(data, status){ //Calls the server
                      
                      $.each(data, function(i,item){
                             
                             if (item.Gender=='male'&& $("#flip-1").val()=="on"){
                             
                             console.log(JSON.stringify(item)); //Inject data to the cells
                             $('#myListView').append('<li class="ui-nodisc-icon" data-icon="listIcon" ><a href="" data-key='+item.randomPostId+' data-profileUserID='+item.mainUserProfileID+'><img class="feedImage" src='+item.Pic+'></img><p><strong>'+item.Name+", "+item.Gender+'</p></strong>'
                                                     + '<p>'+item.Post+'<p>'
                                                     
                                                     + '<p class="ui-li-aside" ><time class="timeago" datetime='+item.Time+'></time></p></a></li>');
                             }
                             else if (item.Gender=='female'&& $("#flip-2").val()=="on"){
                             console.log(JSON.stringify(item)); //Inject data to the cells
                             $('#myListView').append('<li class="ui-nodisc-icon" data-icon="listIcon" ><a href="" data-key='+item.randomPostId+' data-profileUserID='+item.mainUserProfileID+'><img class="feedImage" src='+item.Pic+'></img><p><strong>'+item.Name+", "+item.Gender+'</p></strong>'
                                                     + '<p>'+item.Post+'<p>'
                                                     
                                                     + '<p class="ui-li-aside" ><time class="timeago" datetime='+item.Time+'></time></p></a></li>');
                             
                             
                             }
                             });
                      
                      
                      $( '#myListView' ).listview( "refresh" );
                      $('.timeago').timeago();
                      
                      },
                      error: function(){
                      output.text('There was an error loading the data.');//Handles error to connect to database
                      }
                      
                      });
               
               });


// Will handle on tap to switch to single post page

$(document).on('tap', '#myListView li a', function(){   //calls for the function on tap
               
               $.mobile.changePage( "#individualPost", { transition: "fade", changeHash: false }); // disply the new #individualPost page after taping
               
           
               
               $("#myPost").empty();
               //Clear List Before Clone.
               
               
               document.getElementById("replyid").value = $(this).attr('data-key');
               //place the id from the data-key attribute to the replyid div
               
               document.getElementById("otherProfileID").value = $(this).attr('data-profileUserID');
               
               //alert($(this).attr('data-profileUserID'));
               
               
               
              // $(this).attr("href", "#individualProfile");
               
               $(this).clone().appendTo('#myPost').append('<div id="linkToProfile"><a href="#individualProfile"></a></div>');
               //Clone selected listview Values.
               
          
               
               $('#myPost').value(function (index, value) {
                                  return value + ' at ' + index;
                                  });
               
               
               
               $( '#myPost' ).listview( "refresh" );
               //Refresh List After Cloning and Appending.
               
               
               
               });





// Post - userPost
// Name - userName
// Gender - userGender
// Pic - userPic
// Time - postTime
// theDate - postDate