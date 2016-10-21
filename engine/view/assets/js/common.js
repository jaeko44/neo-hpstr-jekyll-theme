jQuery(document).ready(function($){
	$('[data-toggle="tooltip"]').tooltip(); 
	// device detection
	var isMobile = false;
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
	
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}

		if ($(this).scrollTop() > 1000 && !isMobile) {
			var new_width = $('#bodyWrap').width();
			$('.navbar-wrapper nav.navbar').addClass('fixed'); 
		}
		else $('.navbar-wrapper nav.navbar').removeClass('fixed');
	});
	$(window).scroll();

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	// responsive nav pills 
	$('.nav-pills').each(function(){
		var $this = $(this);
		var filter_list_container = $this,
			filter_values = filter_list_container.find('li:not(.placeholder)'),
			filter_list_placeholder = filter_list_container.find('.placeholder a'),
			filter_list_placeholder_text = filter_list_placeholder.text(), 
			filter_list_placeholder_default_value = 'Select';

		//detect click event
		filter_list_container.on('click', function(event){
			//event.preventDefault();
			//detect which filter item was selected
			var selected_filter = $(event.target).text();
				
			//check if user has clicked the placeholder item (for mobile version)
			if( $(event.target).is(filter_list_placeholder) ) {
				(filter_list_placeholder_default_value == filter_list_placeholder.text()) ? filter_list_placeholder.text(filter_list_placeholder_text) : filter_list_placeholder.text(filter_list_placeholder_default_value) ;
				filter_list_container.toggleClass('is-open');

			//check if user has clicked a filter already selected 
			} else if( filter_list_placeholder.data('type') == selected_filter ) {
				filter_list_placeholder.text($(event.target).text()) ;
				filter_list_container.removeClass('is-open');	

			} else if ( ! $(event.target).is(filter_list_container) ) { 
				//close the dropdown (mobile version) and change placeholder text/data-type value
				filter_list_container.removeClass('is-open');
				filter_list_placeholder.text($(event.target).text());
				filter_list_placeholder_text = $(event.target).text();
				
				//add class selected to the selected filter item
				//filter_values.removeClass('active');
				//$(event.target).parent().addClass('active');
			}
		});
	});

	var firstEnter = true;

	// mega menu
	$('.navbar a[data-cat]').hover(
		function() {
			if ( $(this).hasClass('active') ) return false;
			$('.navbar a[data-cat]').removeClass('active');
			$('.navbar a[data-features]').removeClass('active');
			if (firstEnter) {
				$('.navbar div.products').hide();
				$('.navbar div.features').hide();
				$('.navbar div#cat'+$(this).data('cat')).show();
			}
			else {
				$('.navbar div.products').hide().addClass('easeOut').removeClass('easeIn');
				$('.navbar div.features').hide().addClass('easeOut').removeClass('easeIn');
				$('.navbar div#cat'+$(this).data('cat')).show().addClass('easeIn').removeClass('easeOut');
			}
			
			$('.navbar div#cat'+$(this).data('cat')).addClass('displayed');
			$(this).addClass('active');	
			$('.navbar .bg-light').css('min-height', 'auto');
			$('.navbar .features-block').removeClass('displayed');
		}, function() {
			
		}
	);	

	$('.navbar a[data-features]').hover(
		function() {
			if ( $(this).hasClass('active') ) return false;
			var now = $('.navbar .bg-light').height();
			
			$('.navbar a[data-features]').removeClass('active');

			$('.navbar div.features').hide().addClass('easeOut').removeClass('easeIn');
			$('.navbar div#features'+$(this).data('features')).show().addClass('easeIn').removeClass('easeOut');
			$('.navbar .features-block').addClass('displayed');
			$('.navbar .features').removeClass('displayed');
			$('.navbar div#features'+$(this).data('features')).addClass('displayed');
			$(this).addClass('active');	

			var newHeight = $('.navbar .features-block').height();
			if (newHeight != now) {
				$('.navbar .bg-light').css('min-height', newHeight+'px').css('height', newHeight+40+'px').css;
			}
		}, function() {
			
		}
	);	
	
	$('.navbar a[data-cat]:first-child').mouseenter();
	firstEnter = false;
	// anchor scroll
	$("a.scroll").click(function() {
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 72
		}, 500);
		return false;
	});

	$("#viewDemo").click(function() {
		$('#viewDemo').addClass('easeOut').css( "opacity", "0");
		$('#text-intro').addClass('easeOut').css("opacity", "0");
		$('#clouds-intro').addClass('goDown');
		setTimeout(() => {
			$('.overlay-launch').addClass('easeOut').css( "opacity", "0");
		    $('.overlay-launch').css("display", "none");
			$('#viewDemo').css("display", "none");
			$('#text-intro').css("display", "none");
			$('.firefox').addClass('easeIn').css( "display", "block").css( "opacity", "100");
		}, 1500);
	});
	
	$('#tabs li.tab a[data-tab]').click(
	function() {
		if ( $(this).hasClass('active') ) return false; //Prevent tab from being opened when open.
		$('#tabs li.tab a[data-tab]').removeClass('active');
		$('#tabs li.tab').removeClass('active');
		$('.tab-content').hide().addClass('easeOut').removeClass('easeIn');
		$('#tabContent'+$(this).data('tab')).show().addClass('easeIn').removeClass('easeOut');
		$('#tabContent'+$(this).data('tab')).addClass('displayed');
		$(this).addClass('active').parent().addClass('active');	
	});	

	//$('#tabs li.tab a[data-tab]:first-child').click();

  	$("#big-bg").css("background","url(../engine/view/assets/img/bg-intro.png) center center");
	
	//Now the mousemove function
	$("#magnify").mousemove(function(e){
		//When the user hovers on the image, the script will first calculate
		//the native dimensions if they don't exist. Only after the native dimensions
		//are available, the script will show the zoomed version.
		if(!native_width && !native_height)
		{
			//This will create a new image object with the same image as that in .small
			//We cannot directly get the dimensions from .small because of the 
			//width specified to 200px in the html. To get the actual dimensions we have
			//created this image object.
			var image_object = new Image();
			image_object.src = $("#big-bg").css("background");
			console.log('Image object is :', image_object.src);
			//This code is wrapped in the .load function which is important.
			//width and height of the object would return 0 if accessed before 
			//the image gets loaded.
			native_width = image_object.width;
			native_height = image_object.height;
		}
		else
		{
			//x/y coordinates of the mouse
			//This is the position of .magnify with respect to the document.
			var magnify_offset = $(this).offset();
			//We will deduct the positions of .magnify from the mouse positions with
			//respect to the document to get the mouse positions with respect to the 
			//container(.magnify)
			var mx = e.pageX - magnify_offset.left;
			var my = e.pageY - magnify_offset.top;
			
			//Finally the code to fade out the glass if the mouse is outside the container
			if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
			{
				$("#big-bg").fadeIn(100);
			}
			else
			{
				$("#big-bg").fadeOut(100);
			}
			if($("#big-bg").is(":visible"))
			{
				//The background position of .large will be changed according to the position
				//of the mouse over the .small image. So we will get the ratio of the pixel
				//under the mouse pointer with respect to the image and use that to position the 
				//large image inside the magnifying glass
				var rx = Math.round(mx/$(".small-bg").width()*native_width - $("#big-bg").width()/2)*-1;
				var ry = Math.round(my/$(".small-bg").height()*native_height - $("#big-bg").height()/2)*-1;
				var bgp = rx + "px " + ry + "px";
				
				//Time to move the magnifying glass with the mouse
				var px = mx - $("#big-bg").width()/2;
				var py = my - $("#big-bg").height()/2;
				//Now the glass moves with the mouse
				//The logic is to deduct half of the glass's width and height from the 
				//mouse coordinates to place it with its center at the mouse coordinates
				
				//If you hover on the image now, you should see the magnifying glass in action
				$("#big-bg").css({left: px, top: py, backgroundPosition: bgp});
			}
		}
	})
});