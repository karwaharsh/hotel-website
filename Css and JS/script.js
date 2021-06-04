        $(document).ready(function(){
            $('#mycarousel').carousel({ interval : 2000});
            $('#carousel-pause').click(function(){
                $('#mycarousel').carousel('pause');
            });
            $('#carousel-play').click(function(){
                $('#mycarousel').carousel('cycle');
            });
        });
        $(document).ready(function(){
            $('#buttonreserve').click(function(){
                $('#reservemodal').modal();
            });
            
        });
        $(document).ready(function(){
          $('#login').click(function(){
                $('#loginModal').modal();
            });
                $('#closes').click(function(){
                    $('#loginModal').resize();
                });
            
        });