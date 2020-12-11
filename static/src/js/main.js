$(function () {
    $(".draggable").draggable({
        drag: function() {
            //$(".draggable").css("color", 'red');
            //$(this).text('x: ' + xPos + 'y: ' + yPos);
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;

            var p3_left = $('.place-3').offset().left;
            var p2_left = $('.place-2').offset().left;
            var p1_left = $('.place-1').offset().left;

            if ((xPos > p3_left) && (xPos < p1_left)) {
                $('.place-3').css("background-color", '#b1b0b0ac');
            }
            else{
                $('.place-3').css("background-color", 'white');

            }

            if ((xPos > p1_left) && (xPos < p2_left)) {
                $('.place-1').css("background-color", '#b1b0b0ac');
            }
            else{
                $('.place-1').css("background-color", 'white');

            }

            if (xPos > p2_left) {
                $('.place-2').css("background-color", '#b1b0b0ac');
            }
            else{
                $('.place-2').css("background-color", 'white');

            }
        },
        stop: function() {
            var p3_left = $('.place-3').offset().left;
            var p2_left = $('.place-2').offset().left;
            var p1_left = $('.place-1').offset().left;
            
            if ((xPos > p3_left) && (xPos < p1_left)) {
                $(this).css("position", 'fixed');
                $(this).css("overflow-y", 'scroll');
                $(this).css("overflow-x", 'hidden');
            }
            
        },
    });
});