var playerData;

$(document).ready(function() {
    getData();

});



function getData() {
	$.getJSON("js/dumontier_brettgardner.json", function(data){
		playerData = data;
		drawChart();
	});
}

function drawChart() {
	$.each(playerData.stats, function(i,item){
	    console.log(item);
	    var width = item.HR * 10;
	    $(".chart").append(
	    	'<div class="col-md-12 bar-container">' +
	    		'<div class="year">' + item.year + '</div>' +
	    		'<div class="bar" style="width: '+ width + 'px"></div>' + 
	    		'<div class="total">' + item.HR + '<div>' +
	    	'</div>'
	    );

	    var sbWidth = item.SB * 10;
	    $(".chart2").append(
	    	'<div class="col-md-12 bar-container">' +
	    		'<div class="year">' + item.year + '</div>' +
	    		'<div class="bar" style="width: '+ sbWidth + 'px"></div>' + 
	    		'<div class="total">' + item.SB + '<div>' +
	    	'</div>'
	    );

	});
}





