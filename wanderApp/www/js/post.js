$(document).bind('deviceready', function(){
                 $(function(){
                   $('form#postForm').submit(function(){
                                             
                                             
                                             
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
                                             
                                             //                        var postTime = fullDate.getHours()+':'+fullDate.getMinutes();
                                             var postTime = fullDate.toISOString()
                                             var postDate = fullDate.getDate() +' / '+myMonth[fullDate.getMonth()];
                                             var postUser = $('#userName').text()
                                             var postGender = $('#userGender').text()
                                             var postPic = $('#userPic').attr('src')
                                             var postData = $(this).serialize()
                                             var postID = $('#userID').val()
                                             var postData = $('#userPost').val()
                                             var postLat = $('#userLat').val()
                                             var postLong = $('#userLong').val()
                                             var postProfileID = $('#profileID').val()
                                             
                                             
                $.ajax({
                     type: 'POST',
                     data: '&userPost='+postData+'&userName='+postUser+'&userGender='+postGender+'&userPic='+postPic+'&postDate='+postDate+'&postTime='+postTime+'&userID='+postID+'&userLat='+postLat+'&userLong='+postLong+'&profileID='+postProfileID,
                         //PHP URL
                          url: 'http://wander-app.org/userPosts.php',
                          success: function(data){
                          console.log(data);
                                                    
                            navigator.notification.alert(
                                    "Posted!",
                                    callBackFunctionB, // Specify a function to be called
                                    'Wander',
                                    "OK"
                                );
                       
                       function callBackFunctionB(){
                                      console.log('ok');
                                                    
                                   }
                                                    
                                                    
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


