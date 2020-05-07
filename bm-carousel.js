$(document).ready(function () {
	if ($('.bm-carousel ').length > 0) {
		$('.bm-carousel  .bm-carousel-inner').prepend(
			"<div class='bm-ui-loading'><span></span></div>"
		);
		var autoSlideInterval = [],
			bm_data_delay = 0,
			bm_data_ease_in = 1000,
			bm_data_ease_out = 1000,
			bm_data_in = 'fade',
			bm_data_out = 'fade',
			bm_data_top = '',
			bm_data_left = '',
			bm_data_bck_clr = false,
			startInvlTmr = 6000,
			enableNavClick = '',
			galSldrCrIdx = 0,
			galSldrCrIdxNXT = 0;

		function getProperties(el, elProp) {
			var _thisslde = $(el).find('.bm-carousel-item');
			(bm_data_delay = 0),
				(bm_data_ease_in = 1000),
				(bm_data_ease_out = 1000),
				(bm_data_in = 'fade'),
				(bm_data_out = 'fade'),
				(bm_data_top = ''),
				(bm_data_left = ''),
				(bm_data_bck_clr = false);
			if (
				typeof elProp.attr('bm-data-delay') !== typeof undefined &&
				elProp.attr('bm-data-delay') !== false
			) {
				bm_data_delay = parseInt(elProp.attr('bm-data-delay'));
			}
			if (
				typeof elProp.attr('bm-data-ease-in') !== typeof undefined &&
				elProp.attr('bm-data-ease-in') !== false
			) {
				bm_data_ease_in = parseInt(elProp.attr('bm-data-ease-in'));
			}
			if (
				typeof elProp.attr('bm-data-ease-out') !== typeof undefined &&
				elProp.attr('bm-data-ease-out') !== false
			) {
				bm_data_ease_out = parseInt(elProp.attr('bm-data-ease-out'));
			}
			if (
				typeof elProp.attr('bm-data-in') !== typeof undefined &&
				elProp.attr('bm-data-in') !== false
			) {
				bm_data_in = elProp.attr('bm-data-in');
			}
			if (
				typeof elProp.attr('bm-data-out') !== typeof undefined &&
				elProp.attr('bm-data-out') !== false
			) {
				bm_data_out = elProp.attr('bm-data-out');
			}
			if (
				typeof elProp.attr('bm-data-top') !== typeof undefined &&
				elProp.attr('bm-data-top') !== false
			) {
				bm_data_top = parseInt(elProp.attr('bm-data-top'));
			}
			if (
				typeof elProp.attr('bm-data-left') !== typeof undefined &&
				elProp.attr('bm-data-left') !== false
			) {
				bm_data_left = parseInt(elProp.attr('bm-data-left'));
			}
			if (
				typeof $(_thisslde).attr('bm-data-bck-clr') !== typeof undefined &&
				$(_thisslde).attr('bm-data-bck-clr') !== false
			) {
				bm_data_bck_clr = elProp.attr('bm-data-bck-clr');
			}
		}

		var ccc = 0;
		function slideMove(el, galSldrCrIdx, galSldrCrIdxNXT) {
			var _thisslde = $(el).find('.bm-carousel-item');
			var _thisnavbubbl = $(el).find('.bm-nav-bullet span');
			$(_thisslde)
				.find(':animated')
				.promise()
				.done(
					function () {
						$(_thisslde).find(':animated').clearQueue();
						getProperties(el, $(_thisslde).eq(galSldrCrIdxNXT));
						if (bm_data_bck_clr) {
							$(el).animate(
								{
									backgroundColor: bm_data_bck_clr,
								},
								bm_data_ease_out
							);
						}
						$(_thisslde)
							.eq(galSldrCrIdxNXT)
							.find('> *')
							.each(function () {
								var this_elProp = $(this);
								getProperties(el, this_elProp);

								/* ======================== Slider Out ======================== */
								/*   Fade Effect*/
								if (bm_data_out == 'fade') {
									$(this_elProp).animate(
										{
											opacity: 0,
										},
										bm_data_ease_out,
										function () {
											$(this_elProp).css({
												top: '',
												left: '',
											});
										}
									);
								}
								if (bm_data_out == 'fadeLeft') {
									$(this_elProp).animate(
										{
											left: '-102%',
											opacity: 0,
										},
										bm_data_ease_out,
										function () {
											$(this_elProp).css({
												top: '',
												left: '',
											});
										}
									);
								}
								if (bm_data_out == 'fadeRight') {
									$(this_elProp).animate(
										{
											left: '102%',
											opacity: 0,
										},
										bm_data_ease_out,
										function () {
											$(this_elProp).css({
												top: '',
												left: '',
											});
										}
									);
								}
								if (bm_data_out == 'fadeUp') {
									$(this_elProp).animate(
										{
											top: '-102%',
											opacity: 0,
										},
										bm_data_ease_out,
										function () {
											$(this_elProp).css({
												top: '',
												left: '',
											});
										}
									);
								}
								if (bm_data_out == 'fadeBottom') {
									$(this_elProp).animate(
										{
											top: '102%',
											opacity: 0,
										},
										bm_data_ease_out,
										function () {
											$(this_elProp).css({
												top: '',
												left: '',
											});
										}
									);
								}
								/* Slide Effect*/
								if (bm_data_out == 'slideLeft') {
									$(this_elProp).animate(
										{
											left: '-102%',
										},
										bm_data_ease_out,
										function () {
											$(this_elProp).css({
												top: '',
												left: '',
											});
										}
									);
								}
								if (bm_data_out == 'slideRight') {
									$(this_elProp).animate(
										{
											left: '102%',
										},
										bm_data_ease_out,
										function () {
											$(this_elProp).css({
												top: '',
												left: '',
											});
										}
									);
								}
								if (bm_data_out == 'slideUp') {
									$(this_elProp).animate(
										{
											top: '-102%',
										},
										bm_data_ease_out,
										function () {
											$(this_elProp).css({
												top: '',
												left: '',
											});
										}
									);
								}
								if (bm_data_out == 'slideBottom') {
									$(this_elProp).animate(
										{
											top: '102%',
										},
										bm_data_ease_out,
										function () {
											$(this_elProp).css({
												top: '',
												left: '',
											});
										}
									);
								}
							});
					},
					function () {
						$(_thisslde)
							.eq(galSldrCrIdxNXT)
							.find(':animated')
							.promise()
							.done(function () {
								$(_thisslde).find(':animated').clearQueue();
								$(_thisslde).eq(galSldrCrIdxNXT).css('display', 'none');
								getProperties(el, $(_thisslde).eq(galSldrCrIdx));
								if (bm_data_bck_clr) {
									$(el).animate(
										{
											backgroundColor: bm_data_bck_clr,
										},
										bm_data_ease_out
									);
								}
								$(_thisslde)
									.eq(galSldrCrIdx)
									.find('> *')
									.each(function () {
										var this_asset = $(this);
										/* ========================Slider In ======================== */
										$(_thisslde)
											.eq(galSldrCrIdxNXT)
											.find(':animated')
											.promise()
											.done(function () {
												$(_thisslde)
													.eq(galSldrCrIdxNXT)
													.promise()
													.done(function () {
														getProperties(el, this_asset);
														$(_thisslde)
															.eq(galSldrCrIdx)
															.css('display', 'block'); /* Fade Effect*/
														if (bm_data_in == 'fade') {
															$(this_asset)
																.css('display', '')
																.css({
																	top: bm_data_top,
																	left: bm_data_left,
																	opacity: 0,
																})
																.delay(bm_data_delay)
																.animate(
																	{
																		opacity: 1,
																	},
																	bm_data_ease_in
																);
														}
														if (bm_data_in == 'fadeLeft') {
															$(this_asset)
																.css('display', '')
																.css({
																	top: bm_data_top,
																	left: '102%',
																	opacity: 0,
																})
																.delay(bm_data_delay)
																.animate(
																	{
																		left: bm_data_left,
																		opacity: 1,
																	},
																	bm_data_ease_in
																);
														}
														if (bm_data_in == 'fadeRight') {
															$(this_asset)
																.css('display', '')
																.css({
																	top: bm_data_top,
																	left: '-102%',
																	opacity: 0,
																})
																.delay(bm_data_delay)
																.animate(
																	{
																		left: bm_data_left,
																		opacity: 1,
																	},
																	bm_data_ease_in
																);
														}
														if (bm_data_in == 'fadeUp') {
															$(this_asset)
																.css('display', '')
																.css({
																	top: '-102%',
																	left: bm_data_left,
																	opacity: 0,
																})
																.delay(bm_data_delay)
																.animate(
																	{
																		top: bm_data_top,
																		opacity: 1,
																	},
																	bm_data_ease_in
																);
														}
														if (bm_data_in == 'fadeBottom') {
															$(this_asset)
																.css('display', '')
																.css({
																	top: '102%',
																	left: bm_data_left,
																	opacity: 0,
																})
																.delay(bm_data_delay)
																.animate(
																	{
																		top: bm_data_top,
																		opacity: 1,
																	},
																	bm_data_ease_in
																);
														}
														/* Slide Effect*/
														if (bm_data_in == 'slideLeft') {
															$(this_asset)
																.css('display', '')
																.css({
																	top: bm_data_top,
																	left: '102%',
																	opacity: 1,
																})
																.delay(bm_data_delay)
																.animate(
																	{
																		left: bm_data_left,
																	},
																	bm_data_ease_in
																);
														}
														if (bm_data_in == 'slideRight') {
															$(this_asset)
																.css('display', '')
																.css({
																	top: bm_data_top,
																	left: '-102%',
																	opacity: 1,
																})
																.delay(bm_data_delay)
																.animate(
																	{
																		left: bm_data_left,
																	},
																	bm_data_ease_in
																);
														}
														if (bm_data_in == 'slideUp') {
															$(this_asset)
																.css('display', '')
																.css({
																	top: '-102%',
																	top: bm_data_top,
																	opacity: 1,
																})
																.delay(bm_data_delay)
																.animate(
																	{
																		top: bm_data_top,
																	},
																	bm_data_ease_in
																);
														}
														if (bm_data_in == 'slideBottom') {
															$(this_asset)
																.css('display', '')
																.css({
																	top: '102%',
																	top: bm_data_top,
																	opacity: 1,
																})
																.delay(bm_data_delay)
																.animate(
																	{
																		top: bm_data_top,
																	},
																	bm_data_ease_in
																);
														}
														$(_thisslde)
															.eq(galSldrCrIdx)
															.find(':animated')
															.promise()
															.done(function () {
																$(_thisslde)
																	.eq(galSldrCrIdx)
																	.promise()
																	.done(function () {
																		$(_thisnavbubbl).removeClass('active');
																		$(_thisnavbubbl)
																			.eq(galSldrCrIdx)
																			.addClass('active');
																	});
															});
													});
											});
									});
							});
					}
				);
		}

		$(document).on('click', '.bm-carousel .bm-carousel-nav', function () {
			var el = $(this).closest('.bm-carousel');
			var carouselIndex = $(el).prevAll('.bm-carousel').length;
			clearTimeout(autoSlideInterval[carouselIndex]);

			var maxL = $(el).find('.bm-carousel-item').length - 1;
			var _thisslde = $(el).find('.bm-carousel-item');
			var _this = $(this);
			$(el, _thisslde).finish();
			$(_thisslde).find(':animated').finish();
			$(_thisslde)
				.eq(galSldrCrIdxNXT)
				.find(':animated')
				.promise()
				.done(function () {
					if ($(_this).attr('id') == 'prev') {
						if (galSldrCrIdx == 0) {
							galSldrCrIdxNXT = galSldrCrIdx;
							galSldrCrIdx = maxL;
						} else {
							galSldrCrIdxNXT = galSldrCrIdx;
							galSldrCrIdx--;
						}
						slideMove(el, galSldrCrIdx, galSldrCrIdxNXT);
					} else if ($(_this).attr('id') == 'next') {
						if (galSldrCrIdx == maxL) {
							galSldrCrIdxNXT = galSldrCrIdx;
							galSldrCrIdx = 0;
						} else {
							galSldrCrIdxNXT = galSldrCrIdx;
							galSldrCrIdx++;
						}
						slideMove(el, galSldrCrIdx, galSldrCrIdxNXT);
					}
				});
		});

		$(document).on('click', '.bm-carousel .bm-nav-bullet span', function () {
			galSldrCrIdxNXT = galSldrCrIdx;
			galSldrCrIdx = $(this).index();
			var el = $(this).closest('.bm-carousel');
			var carouselIndex = $(el).prevAll('.bm-carousel').length;
			clearTimeout(autoSlideInterval[carouselIndex]);
			var maxL = $(el).find('.bm-carousel-item').length - 1;
			var _thisslde = $(el).find('.bm-carousel-item');
			var _this = $(this);
			$(el, _thisslde).finish();
			$(_thisslde).find(':animated').finish();
			$(_thisslde)
				.eq(galSldrCrIdxNXT)
				.find(':animated')
				.promise()
				.done(function () {
					slideMove(el, galSldrCrIdx, galSldrCrIdxNXT);
					$(el).find('.bm-nav-bullet span').removeClass('active');
					$(_this).addClass('active');
				});
		});

		function slideInterval(el) {
			var calIndex = $(el).prevAll('.bm-carousel').length;
			var _thisslde = $(el).find('.bm-carousel-item');

			if ($(_thisslde).length > 1) {
				var maxL = $(_thisslde).length - 1;
				$(_thisslde)
					.eq(galSldrCrIdxNXT)
					.find(':animated')
					.promise()
					.done(function () {
						$(_thisslde)
							.eq(galSldrCrIdxNXT)
							.promise()
							.done(function () {
								if (galSldrCrIdx == maxL) {
									galSldrCrIdxNXT = galSldrCrIdx;
									galSldrCrIdx = 0;
								} else {
									galSldrCrIdxNXT = galSldrCrIdx;
									galSldrCrIdx++;
								}
								slideMove(el, galSldrCrIdx, galSldrCrIdxNXT);
								var setTimeoutS = bm_data_ease_out;
								if (bm_data_ease_out > 1000) {
									setTimeoutS = 1000;
								}
								autoSlideInterval[calIndex] = setTimeout(function () {
									slideInterval(el);
								}, startInvlTmr);
							});
					});
			}
		}

		$('.bm-carousel').each(function () {
			var _this = $(this);
			var carouselIndex = $(_this).prevAll('.bm-carousel ').length;
			var _thisslde = $(_this).find('.bm-carousel-item');
			var bullnav = '';
			$(_thisslde).each(function () {
				bullnav += '<span></span>';
			});
			if ($(_thisslde).length > 1) {
				$(_this).find('.bm-carousel-inner').append(
					`<div class='bm-carousel-nav' id='next'>
						<span>&#10095;</span>
					</div>
					<div class='bm-carousel-nav' id='prev'>
					   <span>&#10094; </span>
					</div>
					<div class='bm-nav-bullet'> ${bullnav} </div>`
				);
			}
			var _thisarNav = $(_this).find('.bm-carousel-nav');
			var _thisnavbubbl = $(this).find('.bm-nav-bullet span');

			/* Load first active Slide */
			var find_active = $(_this).find('.bm-carousel-item.active').index() - 1;
			$(_thisnavbubbl).eq(find_active).addClass('active');
			$(_this).css('background-color', bm_data_bck_clr);

			var maxL = $(_thisslde).length - 1;
			galSldrCrIdx = find_active;
			galSldrCrIdxNXT = find_active + 1;
			$('.bm-carousel  .bm-carousel-inner .bm-ui-loading').fadeOut(function () {
				slideMove(_this, galSldrCrIdx, galSldrCrIdxNXT);
				if ($(_thisslde).length > 1) {
					autoSlideInterval[carouselIndex] = setTimeout(function () {
						slideInterval(_this);
					}, startInvlTmr);
				}
			});
		});

		$('.bm-carousel ').hover(
			function () {
				var carouselIndex = $(this).prevAll('.bm-carousel').length;
				clearTimeout(autoSlideInterval[carouselIndex]);
			},
			function () {
				var carouselIndex = $(this).prevAll('.bm-carousel').length;
				var _this = $(this);
				autoSlideInterval[carouselIndex] = setTimeout(function () {
					slideInterval(_this);
				}, startInvlTmr);
			}
		);

		/*resizablevarvar */
		$galsldr = $('.bm-carousel .bm-carousel-inner');
		var elHeight = $galsldr.outerHeight();
		var elWidth = $galsldr.outerWidth();
		var $wrapper = $('.bm-carousel');

		function doResize(event, ui) {
			var scale, origin;
			scale = Math.min(ui.size.width / elWidth, ui.size.height / elHeight);
			$galsldr.css({
				transform: 'translate(-50%, -50%) ' + 'scale(' + scale + ')',
			});
		}
		var starterData = {
			size: {
				width: $wrapper.width(),
				height: $wrapper.height(),
			},
		};
		doResize(null, starterData);
		$(window).resize(function () {
			var starterData = {
				size: {
					width: $wrapper.width(),
					height: $wrapper.height(),
				},
			};
			doResize(null, starterData);
		});
	}
});
