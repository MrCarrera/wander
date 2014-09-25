$(document).bind('deviceready', function(){
    $(function(){
        $('form').submit(function(){
            
            var postData = $(this).serialize();
            
            $.ajax({
                type: 'POST',
                data: postData+'&lid=',
                //change the url for your project
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
            
            return false;
        });
    });
});

