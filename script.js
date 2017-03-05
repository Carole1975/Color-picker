$(document).ready(function(){

	var red = 100;
	var blue = 100;
	var green = 100;

	var Red = 100;
	var Blue = 100;
	var Green = 100;


	$("#r").click(function(){
		$(this).on("change mousemove", function(){
			red =$(this).val();
			$('#body').css({'background-color': 'rgb(' + red + ',' + green + ',' + blue +')'});
			console.log($('#r').val(), $('#g').val(), $('#b').val());

		})
	});

	$("#g").click(function(){
		$(this).on("change mousemove", function(){
			green =$(this).val();
			$('#body').css({'background-color': 'rgb(' + red + ',' + green + ',' + blue +')'});
			console.log($('#r').val(), $('#g').val(), $('#b').val());

		})
	});

	$("#b").click(function(){
		$(this).on("change mousemove", function(){
			blue =$(this).val();
			$('#body').css({'background-color': 'rgb(' + red + ',' + green + ',' + blue +')'});
			console.log($("#r").val(), $("#g").val(), $("#b").val());

		})
	});

	

});


