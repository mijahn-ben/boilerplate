/* Author:

*/

/* Call Cookie Cuttr */

$(document).ready(function () {
$.cookieCuttr({
	cookieDeclineButton: true,
	cookieResetButton: true,
	cookieDiscreetReset: true,
	cookieAnalytics: true
	//cookieMessage: 'We use cookies on this website, you can <a href="{{cookiePolicyLink}}" title="read about our cookies">read about them here</a>. To use the website as intended please...',
	//cookiePolicyLink: 'http://cookiecuttr.com/'	
});
});

// Placeholder for IE

// extend jQuery.support object, create new input object.

jQuery(function() {
	jQuery.support.placeholder = false;
	test = document.createElement('input');
	if('placeholder' in test) jQuery.support.placeholder = true;
});

// find placeholder attribute, apply values

$(function() {
	if(!$.support.placeholder) { 
		var active = document.activeElement;
		$(':text').focus(function () {
			if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
				$(this).val('').removeClass('hasPlaceholder');
			}
		}).blur(function () {
			if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
				$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
			}
		});
		$(':text').blur();
		$(active).focus();
		$('form').submit(function () {
			$(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
		});
	}
});
$(document).ready(function() {
    $("#mySlider").royalSlider({
        captionShowEffects:["moveleft", "fade"],
        directionNavAutoHide: true,
        slideshowEnabled: false,                // Autoslideshow enabled          
    slideshowDelay:5000,                    // Delay between slides in slideshow
    slideshowPauseOnHover: true,            // Pause slideshow on hover
    slideshowAutoStart:true,
        hideArrowOnLastSlide:true,
        imageAlignCenter:true,
	   		imageScaleMode: "fill",
	   		
	   		hideArrowOnLastSlide:true,
	   		slideSpacing:20,
	   		
	   		autoScaleSlider: true,
	   		autoScaleSliderWidth: 1150,
	   		autoScaleSliderHeight: 400
    });  
});

