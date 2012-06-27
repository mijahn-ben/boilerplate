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

/* Canvas Logo */

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

// Dark part of the background
ctx.fillStyle = "#231F20";
ctx.beginPath();
ctx.moveTo(20.9, 135.0);
ctx.lineTo(9.0, 0.0);
ctx.lineTo(141.1, 0.0);
ctx.lineTo(129.1, 135.0);
ctx.lineTo(75.0, 150.0);
ctx.closePath();
ctx.fill();

// Light part of the background
ctx.fillStyle = "#4F4B4C";
ctx.beginPath();
ctx.moveTo(75.0, 138.5);
ctx.lineTo(118.8, 126.4);
ctx.lineTo(129.1, 11.0);
ctx.lineTo(75.0, 11.0);
ctx.closePath();
ctx.fill();

// Dark part of the foreground
ctx.fillStyle = "#D3D2D2";
ctx.beginPath();
ctx.moveTo(75.0, 61.1);
ctx.lineTo(53.1, 61.1);
ctx.lineTo(51.6, 44.2);
ctx.lineTo(75.0, 44.2);
ctx.lineTo(75.0, 27.6);
ctx.lineTo(33.5, 27.6);
ctx.lineTo(37.9, 77.7);
ctx.lineTo(75.0, 77.7);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.moveTo(75.0, 104.1);
ctx.lineTo(56.5, 99.1);
ctx.lineTo(55.3, 86.0);
ctx.lineTo(38.7, 86.0);
ctx.lineTo(41.0, 111.9);
ctx.lineTo(75.0, 121.4);
ctx.closePath();
ctx.fill();

// Light part of the foreground
ctx.fillStyle = "#FFFFFF";
ctx.beginPath();
ctx.moveTo(75.0, 61.1);
ctx.lineTo(75.0, 77.7);
ctx.lineTo(95.4, 77.7);
ctx.lineTo(93.4, 99.1);
ctx.lineTo(75.0, 104.1);
ctx.lineTo(75.0, 121.4);
ctx.lineTo(109.2, 111.9);
ctx.lineTo(113.5, 61.1);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.moveTo(75.0, 27.6);
ctx.lineTo(75.0, 44.2);
ctx.lineTo(114.9, 44.2);
ctx.lineTo(116.5, 27.6);
ctx.closePath();
ctx.fill();

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


