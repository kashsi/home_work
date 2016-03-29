
$(document).ready(function() {
	
	var leftSubMenu = $('.myMenuLi').css( "left" );
	$('.myMenuLi').children('#mySubMenu').css("left",leftSubMenu);
	
	var width = $('.myMenuLi').children('#mySubMenu').css("width");
	$('.myMenuLi').children('#mySubMenu').children('.mySubMenuLi').children('#mySubMenu_Sub').css("left", width);
	$('.myMenuLi').children('#mySubMenu').children('.mySubMenuLi').children('#mySubMenu_Sub').css("top", '0px');
	
	var width_sub = $('.myMenuLi').children('#mySubMenu').children('.mySubMenuLi').children('#mySubMenu_Sub').css("width");
	$('.myMenuLi').children('#mySubMenu').children('.mySubMenuLi').children('#mySubMenu_Sub').children('.mySubMenuLi_Sub').children('#mySubMenu_Sub_Sub').css("left", width_sub);
	$('.myMenuLi').children('#mySubMenu').children('.mySubMenuLi').children('#mySubMenu_Sub').children('.mySubMenuLi_Sub').children('#mySubMenu_Sub_Sub').css("top", '0px');

	var timeAnima = 200;	
	
    $('.myMenuLi').hover(
        function(){
            $(this).children('#mySubMenu').slideDown(timeAnima);	
			$(this).children('#mySubMenu').animate({
				backgroundColor:"#C1006A",
			}, timeAnima );
        },
        function(){
            $(this).children('#mySubMenu').slideUp(timeAnima);
			$(this).children('#mySubMenu').animate({
				backgroundColor:"#D20000",
			}, timeAnima );
        }
    );
	
    $('.mySubMenuLi').hover(
        function(){
			$(this).children('#mySubMenu_Sub').animate({
				opacity: 0.9
			}, timeAnima);	
			$(this).children('#mySubMenu_Sub').animate({
				backgroundColor:"#C90054",
			}, timeAnima );
        },
        function(){
			$(this).children('#mySubMenu_Sub').animate({
				opacity: 0
			}, timeAnima);
 			$(this).children('#mySubMenu_Sub').animate({
				backgroundColor:"#D20000",
			}, timeAnima );
       }
    );	

    $('.mySubMenuLi_Sub').hover(
        function(){
            $(this).children('#mySubMenu_Sub_Sub').slideDown(timeAnima);	
        },
        function(){
            $(this).children('#mySubMenu_Sub_Sub').slideUp(timeAnima);
        }
    );
	
}); 

