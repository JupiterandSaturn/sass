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
	
	
})
