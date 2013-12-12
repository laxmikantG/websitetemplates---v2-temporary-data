var sofycomps = sofycomps || {};

sofycomps.init = {
 	//presentation
 	startPresentation:function(){
 		self = sofycomps.init;
 		var container = $('.site-body').find('.slideshowContainer');
 		console.log(container);
 		var slideshow = container.find('.slideshow');
 		var nav =  container.find('#nav');
 		var prev = nav.find('#prev');
 		var next = nav.find('#next');

 		
 	},
 	navigateRight:function(next, slideshow){
 		$(next).unbind('click');
 		$(next).click(function(){
 			console.log($('.active').index(), $('.slideshow').children().length)
				if($('.active').index() < $('.slideshow').children().length){
	 				next_i = $('.active').next();
	 				$('.active').hide(); 
	 				$('.active').removeClass('active');
	 				$(next_i).addClass('active');
	 				$('.active').show();
	 			}
		});

 	},
 	navigateLeft:function(next, slideshow){
		$(next).unbind('click');
 		$(next).click(function(){
				if($('.active').index() !== $('.slideshow').children(':first')){
	 				next_i = $('.active').prev();
	 				$('.active').hide(); 
	 				$('.active').removeClass('active');
	 				$(next_i).addClass('active');
	 				$('.active').show();
	 			}else{
	 				$('.active').addClass('active');
	 			}
		});
 	}
 }

$(function(){
	sofycomps.init.startPresentation();
});

