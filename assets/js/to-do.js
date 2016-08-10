//mark task as complete/not complete
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete task
$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

//add new task
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$('ul').append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
		$(this).val("");
	}
});

//toggle new task field
$('.fa-pencil-square-o').click(function(){
	$("input[type='text']").fadeToggle();
});