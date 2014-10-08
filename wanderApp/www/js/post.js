$(document).bind('deviceready', function(){
                 $(function(){
                   $('form').submit(function(){
                        
                                    
                        var postTime = fullDate.getHours()+':'+fullDate.getMinutes();        
                        var postDate = fullDate.getDate() +' / '+myMonth[fullDate.getMonth()];
                        var postUser = $('#userName').text()
                        var postGender = $('#userGender').text()
                        var postPic = $('#userPic').attr('src')
                        var postData = $(this).serialize()
                                
                                    
        $.ajax({
                type: 'POST',
                data: postData+'&userName='+postUser+'&userGender='+postGender+'&userPic='+postPic+'&postDate='+postDate+'&postTime='+postTime,
                //PHP URL
                url: 'http://wander-app.org/userPosts.php',
                success: function(data){
                console.log(data);
                alert('Posted!');
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

