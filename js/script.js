var bgcolorlist = new Array("#23819C", "#800080", "#5757FF", "#FF4848", "#59955C", "#B9264F", "#FF800D");

// set default values
var width = 200;
var height = 200;
var background = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)];
var border_radius = 3;
var border_width = 0;

$(document).ready(function() {
	$("#element").css("background", background);
	updateCode();
}); 


function updateCode(){
	
	$("#code").html(
		"#element {<br>"+
	 	"<span class='code-property'>&nbsp&nbsp&nbsp&nbsp margin: </span>" + "0 auto; </br>" + 
	 	"<span class='code-property'>&nbsp&nbsp&nbsp&nbsp background: </span>" + background +"; <br>" + 
	 	"<span class='code-property'>&nbsp&nbsp&nbsp&nbsp width: </span>" + width + "px; <br>" + 
	 	"<span class='code-property'>&nbsp&nbsp&nbsp&nbsp height: </span>" + height + "px; <br>" + 
	 	"<span class='code-property'>&nbsp&nbsp&nbsp&nbsp border-radius: </span>" + border_radius +"px; <br>" +
	 	"<span class='code-property'>&nbsp&nbsp&nbsp&nbsp border-width: </span>" + border_width +"px; <br>" +
	 	"<span class='code-property'>&nbsp&nbsp&nbsp&nbsp border-color: </span>" + "#000000; <br>" +
	 	"}"
	 );
	
	 
}
	


$(function() {

	$("#width").slider({
		value : 200,
		min : 50,
		max : 250,
		step : 10,
		slide : function(event, ui) {
			$("#width_amount").val(ui.value+"px");
			// this changes the width of the box
			$("#element").css("width", ui.value);
			width = ui.value;
			updateCode();

		}
	});
	$("#width_amount").val($("#width").slider("value")+"px");




	$("#height").slider({
		value : 200,
		min : 50,
		max : 250,
		step : 10,
		slide : function(event, ui) {
			$("#height_amount").val(ui.value+"px");
			// this changes the height of the box
			$("#element").css("height", ui.value);
			height = ui.value;
			updateCode();
		}
	});
	$("#height_amount").val($("#height").slider("value")+"px");
	
	
	
	
	
	$("#border_radius").slider({
		value : 3,
		min : 0,
		max : 100,
		step : 1,
		slide : function(event, ui) {
			$("#border_radius_amount").val(ui.value+"px");
			// this changes the height of the box
			$("#element").css("border-radius", ui.value);
			border_radius = ui.value;
			updateCode();
		}
	});
	$("#border_radius_amount").val($("#border_radius").slider("value")+"px");
	
	
	$("#border_width").slider({
		value : 0,
		min : 0,
		max : 20,
		step : 1,
		slide : function(event, ui) {
			$("#border_width_amount").val(ui.value+"px");
			// this changes the height of the box
			$("#element").css("border-width", ui.value);
			border_width = ui.value;
			updateCode();
		}
	});
	$("#border_width_amount").val($("#border_width").slider("value")+"px");

	

});


