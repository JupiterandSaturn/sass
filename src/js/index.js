$(function() {

	//	banner轮播图
	$imageBanner = $('#imageBanner .image-list li');
	$borderindex = $('#imageBanner .border-index li');
	$btnLeft = $('#btnLeft');
	$btnRight = $('#btnRight');
	let index = 5;
	var timer = null;

	$btnLeft.mouseenter(function() {
		clearInterval(timer);
	})

	$btnRight.mouseenter(function() {
		clearInterval(timer);
	})
	$btnLeft.mouseleave(function() {
		autoPlay();
	})
	$btnRight.mouseleave(function() {
		autoPlay();
	})

	$btnLeft.click(function() {
		index--;
		if(index === -1) {
			index = $imageBanner.size() - 1;
		}
		slide();
	})

	$btnRight.click(function() {
		index++;
		if(index === $imageBanner.size()) {
			index = 0;
		}
		slide();
	})

	slide();
	autoPlay();

	function slide() {

		//$imageBanner.eq(index).fadeIn(1500).siblings().fadeOut(1500);
		$imageBanner.eq(index).animate({
			left: '-100%'
		}, 1000);
		if(index == 0) {
			$imageBanner.css('left', '0');
			$borderindex.css({background:'white',border:'1px solid white'});
		} else {
			$imageBanner.eq(0).css('left', '0');
			$borderindex.eq(0).css({background:'white',border:'1px solid white'});
		}

		$borderindex.eq(index).css({
			'background': 'red',
			'border': '1px solid red'
		});

	}

	function autoPlay() {
		timer = setInterval(function() {
			index--;
			if(index === -1) {
				index = $imageBanner.size() - 1;
			}
			slide();
		}, 3000)
	}
	///-----------------------------------------------------///
	$blandpic = $('#flagShipBrand .bland-pic li span');
	$.each($blandpic, function() {
		$(this).mouseenter(function() {
			$(this).animate({
				top: '180px'
			}, 500);

		})
		$(this).mouseleave(function() {
			$(this).animate({
				top: '260px'
			}, 500)
		})
	});

	//小图轮播
	$SmallBtnLeft = $('#flagShipBrand .hot-store .right');
	$SmallBtnRight = $('#flagShipBrand .hot-store .left');
	$smallpic = $('#flagShipBrand .bland-list');
	$SmallBtnLeft.click(function(){
		$smallpic.animate({
			left: '-1203px'
			
		}, 1000);
		$SmallBtnLeft.click(function() {
		$smallpic.animate({
			left: '0'
			
		}, 1000);
		
	})
	})
	
	$SmallBtnRight.click(function() {
		$smallpic.animate({
			left: '-1203px'
		}, 1000);
		$SmallBtnRight.click(function() {
		$smallpic.animate({
			left: '-2406px'
			
		}, 1000);
		
	})
	})
	
})