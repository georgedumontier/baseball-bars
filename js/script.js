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
		    $(".chart").append('<div class="bar" style="width: '+ width + 'px">' + item.HR + '<div>');

	});
}





