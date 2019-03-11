var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
ajax.open('get', '../src/json/produce.json?t=' + new Date().getTime());
ajax.send();
ajax.onreadystatechange = function() {
	if(ajax.readyState == 4 && ajax.status == 200) {
		var arr = JSON.parse(ajax.responseText);
		var str = '';

		for(var i = 0; i < arr.length; i++) {
			str += `
			<div class="product-intro-first">
						<p>${arr[i].english}${arr[i].chinese}</p>
						<p>${arr[i].introduce}</p>
						<p>${arr[i].id}</p>
					</div>
			<div class="product-intro-second">
						<span id = "product-price">￥${arr[i].price}</span>
						<del>￥11163</del>
						<span class="product-vip">红卡会员价</span>
						<div></div>
						<span class="product-fenqiprice">分期价</span>
						<span class="product-message"><span class="product-last-price">￥344.81</span> x 12期 ></span>
					</div>
			
			`;
			$id('.product-intro').innerHTML = str;
		}
	}
}

function $id(id) {
	return document.querySelector(id);
}