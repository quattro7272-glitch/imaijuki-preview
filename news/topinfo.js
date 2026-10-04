$(function(){

	$.ajax({
		url:'news/oshiraselist.html',
		type: 'get',
		dataType: 'html',
	})
	.done(function(data){
		$('#information').html(data);
	})
	.fail(function(){
		$('#information').html('');
	});

})
