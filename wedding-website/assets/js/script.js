$(document)
		.ready(
				function() {
					"use strict";
					$(window).load(function() {
						$(".preloader").fadeOut();
						$("#faceoff").delay(200).fadeOut("slow");
					});
					$("#sticker").sticky({
						topSpacing : 0
					});
					$('.nav-block .nav, footer .nav').onePageNav({
						scrollThreshold : 0.2,
						scrollOffset : 72
					});
					$('.navbar-collapse ul li a').on("click", function() {
						$('.navbar-toggle:visible').click();
					});
					var scrollAnimationTime = 1200, scrollAnimation = 'easeInOutExpo';
					$('a.scrollto').bind('click.smoothscroll', function(event) {
						event.preventDefault();
						var target = this.hash;
						$('html, body').stop().animate({
							'scrollTop' : $(target).offset().top
						}, scrollAnimationTime, scrollAnimation, function() {
							window.location.hash = target;
						});
					});
					$('.next-arrow a').on("click", function() {
						$('html,body').animate({
							scrollTop : $('#story').offset().top - 76
						}, 750);
						return false;
					});
					$('a[href="#contact"]').on("click", function() {
						$('html,body').animate({
							scrollTop : $('#contact').offset().top - 76
						}, 750);
						return false;
					});
					$('a[href="#map"]').on("click", function() {
						$('html,body').animate({
							scrollTop : $('#map').offset().top - 77
						}, 750);
						return false;
					});
					$("#count-down").TimeCircles({
						circle_bg_color : "#fd6e6e",
						use_background : true,
						bg_width : 1,
						fg_width : 0.03,
						time : {
							Days : {
								color : "#fefeee"
							},
							Hours : {
								color : "#fefeee"
							},
							Minutes : {
								color : "#fefeee"
							},
							Seconds : {
								color : "#fefeee"
							}
						}
					});
					$(".pink #count-down").TimeCircles({
						circle_bg_color : "#fa4b74",
						use_background : true,
						bg_width : 1,
						fg_width : 0.03,
						time : {
							Days : {
								color : "#fefeee"
							},
							Hours : {
								color : "#fefeee"
							},
							Minutes : {
								color : "#fefeee"
							},
							Seconds : {
								color : "#fefeee"
							}
						}
					});
					$(".greyscale #count-down").TimeCircles({
						circle_bg_color : "#454545",
						use_background : true,
						bg_width : 1,
						fg_width : 0.03,
						time : {
							Days : {
								color : "#ffffff"
							},
							Hours : {
								color : "#ffffff"
							},
							Minutes : {
								color : "#ffffff"
							},
							Seconds : {
								color : "#ffffff"
							}
						}
					});
					$("#count-down-2").TimeCircles({
						circle_bg_color : "#fefeee",
						use_background : false,
						bg_width : .0000001,
						fg_width : .0000001,
						time : {
							Days : {
								color : "#fefeee"
							},
							Hours : {
								color : "#fefeee"
							},
							Minutes : {
								color : "#fefeee"
							},
							Seconds : {
								color : "#fefeee"
							}
						}
					});
					$(window).scroll(function() {
						if ($(this).scrollTop() > 200) {
							$('#go-to-top').fadeIn('slow');
						} else {
							$('#go-to-top').fadeOut('slow');
						}
					});
					$('#go-to-top a').on("click", function() {
						$("html,body").animate({
							scrollTop : 0
						}, 750);
						return false;
					});
					var container = document.querySelector('#photo-gallery');
					var msnry;
					imagesLoaded(container, function() {
						msnry = new Masonry(container, {
							columnWidth : 0,
							itemSelector : '.item',
							"gutter" : 30
						});
					});
					$(function() {
						$('input, textarea').placeholder();
					});
					$(function() {
						$("#eventAttending").selectbox();
					});
					$('.gallery-popup')
							.magnificPopup(
									{
										type : 'image',
										closeBtnInside : true,
										removalDelay : 300,
										gallery : {
											enabled : true,
											preload : [ 0, 2 ],
											navigateByImgClick : true,
											arrowMarkup : '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
											closeMarkup : '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',
											tPrev : 'Previous (Left arrow key)',
											tNext : 'Next (Right arrow key)',
										}
									});
					var wow = new WOW({
						mobile : false
					});
					wow.init();
					var wishesData = [];
					var pre_post = 0;
					var curr_post = 0;
					var next_post = 0;
					$(function() {
						$.ajax({
							type : "GET",
							url : "includes/get_wishes.php",
							success : function(data) {
								wishesData = JSON.parse(data);
								pre_post = wishesData.length - 1;
								curr_post = 0;
								if (wishesData.length == 1)
									next_post = 0;
								else
									next_post = 1;
								displayPost();
							}
						});
					});
					$('#contact_form')
							.on(
									'submit',
									function(event) {
										event.preventDefault();
										var data = {
											name : $('#name').val(),
											email : $('#email').val(),
											phone : $('#phone').val(),
											eventAttending : $(
													'#eventAttending').val(),
											message : $('#message').val()
										};
										$.ajax({
											type : "POST",
											url : "includes/contact.php",
											data : data,
											success : function(msg) {
												$('.contact-success').fadeIn()
														.delay(3000).fadeOut();
											},
											error : function(error) {
												$('.contact-error').fadeIn()
														.delay(3000).fadeOut();
											}
										});
									});
					$('#wishes_form').on(
							'submit',
							function(event) {
								event.preventDefault();
								var data = {
									name : $('#w_name').val(),
									email : $('#w_email').val(),
									relation : $('#w_relation').val(),
									message : $('#w_message').val()
								};
								$.ajax({
									type : "POST",
									url : "includes/wishes.php",
									data : data,
									success : function(msg) {
										$('.contact-success').fadeIn().delay(
												3000).fadeOut();
									},
									error : function(error) {
										$('.contact-error').fadeIn()
												.delay(3000).fadeOut();
									}
								});
							});
					$('#next-post').on("click", function() {
						pre_post = curr_post;
						curr_post = next_post;
						if (next_post == wishesData.length - 1)
							next_post = 0;
						else
							next_post++;
						displayPost();
					});
					$('#prev-post').on("click", function() {
						next_post = curr_post;
						curr_post = pre_post;
						if (pre_post == 0)
							pre_post = wishesData.length - 1;
						else
							pre_post--;
						displayPost();
					});
					function displayPost() {
						$('#prev-post-title').text(
								"Wishes from " + wishesData[pre_post].name);
						$('#next-post-title').text(
								"Wishes from " + wishesData[next_post].name);
						$('#wellwisher-message-post').html(
								'<h3>' + wishesData[curr_post].name + '</h3>'
										+ '<div class="description">'
										+ '<blockquote><q>'
										+ wishesData[curr_post].message
										+ '</q></blockquote>' + '</div>'
										+ '<div class="wellwisher-postmata">'
										+ '<span>Posted By: <a>'
										+ wishesData[curr_post].relation
										+ '</a></span>' + '</div>').fadeIn();
					}
					if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
						var msViewportStyle = document.createElement('style')
						msViewportStyle
								.appendChild(document
										.createTextNode('@-ms-viewport{width:auto!important}'))
						document.querySelector('head').appendChild(
								msViewportStyle)
					}
				});