
$(document).ready(function() {
	
	var timeAnima = 200;	
	
    $('.myMenuLi').hover(
        function(){
            $(this).children('.mySubMenu').slideDown(timeAnima);	
			$(this).children('.mySubMenu').animate({
				backgroundColor:"#C1006A",
			}, timeAnima );
        },
        function(){
            $(this).children('.mySubMenu').slideUp(timeAnima);
			$(this).children('.mySubMenu').animate({
				backgroundColor:"#D20000",
			}, timeAnima );
        }
    );
	
    $('.mySubMenuLi').hover(
        function(){
			$(this).children('.mySubMenu_Sub').animate({
				opacity: 0.9
			}, timeAnima);	
			$(this).children('.mySubMenu_Sub').animate({
				backgroundColor:"#C90054",
			}, timeAnima );
        },
        function(){
			$(this).children('.mySubMenu_Sub').animate({
				opacity: 0
			}, timeAnima);
 			$(this).children('.mySubMenu_Sub').animate({
				backgroundColor:"#D20000",
			}, timeAnima );
       }
    );	

    $('.mySubMenuLi_Sub').hover(
        function(){
            $(this).children('.mySubMenu_Sub_Sub').slideDown(timeAnima);	
        },
        function(){
            $(this).children('.mySubMenu_Sub_Sub').slideUp(timeAnima);
        }
    );
	
}); 

