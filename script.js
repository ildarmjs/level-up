$(document).ready(function () {
	$('[name=tel]').bind('change keyup input click', function () {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '')
		}
	})
	$('.menu-burger__header').click(function () {
		$('.menu-burger__header').toggleClass('open-menu')
		$('.header__nav').toggleClass('open-menu')
	})
	$('.next').click(() => {
		let currentImage = $('.reviews__card.curry')
		let currentIndex = $('.reviews__card.curry').index()
		let nextImageIndex = currentIndex + 1
		let nextImage = $('.reviews__card').eq(nextImageIndex)
		currentImage.fadeOut(1000)
		currentImage.removeClass('curry')

		if (nextImageIndex === $('reviews__card:last').index() + 1) {
			$('.reviews__card').eq(0).fadeIn(1000)
			$('.reviews__card').eq(0).addClass('curry')
		} else {
			nextImage.fadeIn(1000)
			nextImage.addClass('curry')
		}
	})

	$('.prev').click(() => {
		let currentImage = $('.reviews__card.curry')
		let currentIndex = $('.reviews__card.curry').index()
		let prevImageIndex = currentIndex - 1
		let prevImage = $('.reviews__card').eq(prevImageIndex)
		currentImage.fadeOut(1000)
		currentImage.removeClass('curry')
		prevImage.fadeIn(1000)
		prevImage.addClass('curry')
	})
})

$('a[href^="#"]').click(function () {
	let anchor = $(this).attr('href')
	$('html, body').animate(
		{
			scrollTop: $(anchor).offset().top,
		},
		600
	)
})

let seconds = 30 * 60 + 1,
	h,
	m,
	s,
	t
function countDown() {
	if (seconds > 0) {
		seconds--
		;(h = (seconds / 3600) ^ 0),
			(m = ((seconds - h * 3600) / 60) ^ 0),
			(s = seconds - h * 3600 - m * 60),
			(time = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s))
		$('.timer').text(time)
	}
	setTimeout(function () {
		countDown()
	}, 1000)
}
$(function () {
	countDown()
})
