$(function(){
	
	$loginSelect = $('.login-article .login-window .login-window-small .login-window-list .login-window-list-title .login-select');
	$registerSelect = $('.login-article .login-window .login-window-small .login-window-list .login-window-list-title .register-select');
	$loginListOne = $('.login-article .login-window .login-window-small .login-window-list .login-window-list-article');
	$loginListTwo = $('.login-article .login-window .login-window-small .login-window-list .login-window-list-article-input');
	$loginSelect.click(function(){
		$(this).css('color','black');
		$loginListTwo.css('display','none');
		$loginListOne.css('display','block');
		return false;
		
	})
	$registerSelect.click(function(){
		$(this).css('color','black');
		$loginListOne.css('display','none');
		$loginListTwo.css('display','block');
		return false;
	})
})
