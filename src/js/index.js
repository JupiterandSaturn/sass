$(function(){
	
	
	$bussinessCard = $('#bussiniss-Card');
	$bussinessCard.click(function(){
		//这里还没添加跳转页面
		location.href = "";
	})
	
	$select5lux = $('.select-5lux');
	$list5lux = $('.list-5lux');
	$list5luxa = $('.list-5lux dd a');
	$.each($list5luxa,function(){
		$(this).mouseenter(function(){
		$(this).css('color','red');
		})
	})
	$.each($list5luxa,function(){
		$(this).mouseleave(function(){
		$(this).css('color','#635f60');
		})
	})
	
	$select5lux.mouseenter(function(){
		$list5lux.css('display','block');
	})
	
	$list5lux.mouseleave(function(){
		$list5lux.css('display','none');
	})
	
	//头部移入事件，手机下载
	$phoneDownload = $('.phone-download');
	$phoneErweima = $('.phone-erweima');
	$phoneDownload.mouseenter(function(){
		$phoneErweima.css('display','block');
	})
		$phoneDownload.mouseleave(function(){
		$phoneErweima.css('display','none');
	})
	$phoneErweima.mouseenter(function(){
		$phoneErweima.css('display','block');
	})
	$phoneErweima.mouseleave(function(){
		$phoneErweima.css('display','none');
	})
	
	//搜索框：jsonP获取
	//请求 URL: https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=&cb=
	$search = $('#search');
	$searchvalue = $('.search-value');
	
	$search.keyup(function(){
		$text =  $search.val();
		$.getJSON('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+$text+'&cb=?',function(data){
			$arr = data.s;
			console.log($arr);
			$searchvalue.html('');
			$.each($arr,function(index,value){
				
				$li = $('<li></li>').html($arr[index]).css('background','white');
				$searchvalue.append($li);
				
			})
		})
		
	})
	$searchvalue.click(function(){
		$searchvalue.css('display','none');
	})
	
//	banner轮播图
	$imageBanner = $('#imageBanner .image-list li');
	$btnLeft = $('#btnLeft');
	$btnRight = $('#btnRight');
	var index = 5;
	var timer = null;
	
	$btnLeft.mouseenter(function(){
		clearInterval(timer);
	})
	
	$btnRight.mouseenter(function(){
		clearInterval(timer);
	})
	$btnLeft.mouseleave(function(){
		autoPlay();
	})
	$btnRight.mouseleave(function(){
		autoPlay();
	})
	
	
	$btnLeft.click(function(){
		index --;
		if(index === -1){
			index = $imageBanner.size() - 1;
		}
		slide();
	})
	
	$btnRight.click(function(){
		index ++;
		if(index === $imageBanner.size()){
			index = 0;
		}
		slide();
	})
	
	slide();
	autoPlay();
	function slide(){
		
		//$imageBanner.eq(index).fadeIn(1500).siblings().fadeOut(1500);
		$imageBanner.eq(index).animate({left:'-100%'},1000);
		if(index == 0){
			$imageBanner.css('left','0');
		}else {
			$imageBanner.eq(0).css('left','0');
			
		}
		
	}
	function autoPlay(){
		timer = setInterval(function(){
			index--;
			if(index === -1){
				index = $imageBanner.size() - 1;
			}
			slide();
		},3000)
	}
	
})
