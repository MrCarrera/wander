$(document).bind('deviceready', function(){
                 $(function(){
                   $('form#postForm').submit(function(){
                    // When submit button is pressed it takes the content in the text box
                                              var fullDate = new Date()
                                             console.log(fullDate);
                                             //Thu May 19 2011 17:25:38 GMT+1000 {}
                                             
                                             //Generate a random 10 letter ID for each post using Alphabetical Chars.
                                             function randString(x){
                                             var s = "";
                                             while(s.length<x&&x>0){
                                             var r = Math.random();
                                             s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
                                             }
                                             return s;
                                             }
                                             //Place random ID within hidden div for extraction.
                                             document.getElementById("userID").value = randString(10);
                                             
                                             
                                             var postTime = fullDate.toISOString();
                                             var postDate = fullDate.getDate() +' / '+myMonth[fullDate.getMonth()];
                                             var postUser = $('#userName').text();
                                             var postGender = $('#userGender').text();
                                             var postPic = $('#userPic').attr('src');
                                             var postData = $(this).serialize();
                                             var postID = $('#userID').val();
                                             var postData = $('#userPost').val();
                                             var postLat = $('#userLat').val();
                                             var postLong = $('#userLong').val();
                                             var postProfileID = $('#profileID').val();
                                             var postCity = $('#profileCity').text();
                                             var postAbout = $('#profileAbout').text();
                                             
                                             
                $.ajax({
                    beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
                    complete: function() { $.mobile.loading('hide'); },//hide spinner
                     type: 'POST',
                     data: '&userPost='+postData+'&userName='+postUser+'&userGender='+postGender+'&userPic='+postPic+'&postTime='+postTime+'&userID='+postID+'&userLat='+postLat+'&userLong='+postLong+'&profileID='+postProfileID+'&profileCity='+postCity+'&profileAbout='+postAbout,
                         //PHP URL
                       url: 'http://wander-app.org/userPosts.php',
                       timeout: 10000,
                       success: function(data){
                       console.log(data);
                           // Post Alert
                            navigator.notification.alert(
                                    "Posted!",
                                    callBackFunctionB,
                                    'Wander',
                                    "OK"
                                );
                       
                       function callBackFunctionB(){
                                      console.log('ok');
                                                    
                                   }
                       
                                   $.mobile.changePage("#page-activity"); 
                                                    
                                  },
                                                    
                                    error: function(){
                                    console.log(data);
                                    alert('There Was An Error Adding Your Comment');
                                   }
                             });
                                             
                                    //Resets Text Area After Post Is Submitted
                                  $("#userPost").val('');
                                             
                                  return false;
                                             
                        });
                   });
                 });


// Function to clear post text area if user leaves page without submitting text.
function clearTextArea() {
    
    $("#userPost").val('');
    
    
}




