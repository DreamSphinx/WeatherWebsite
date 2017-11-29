//http://api.wunderground.com/api/e0bd8a41c8ada6da/forecast/geolookup/conditions/q/41.528891,-73.829167.json
var Geo={};
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success,error);
	
}else {
	alert('Geolocation is not supported');
}

function error(){
	alert("Unable to locate you!");
}
function success(position){
	Geo.lat = position.coords.latitude;
	Geo.lng = position.coords.longitude;
	var key = 'e0bd8a41c8ada6da';
	var Weather = "http://api.wunderground.com/api/"+ key +"/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";
	alert(Weather);
	$.ajax({
		url : Weather,
		dataType :"jsonp",
		success : function(data){
			//get all the info
			var location =data['current_observation']['observation_location']['full'];
			var temp = data['current_observation']['temp_f'];
			var img = data['current_observation']['icon_url'];
			var wind = data['current_observation']['wind_string'];

			
			//setting the spans to the correct parameters
			$('#location').html(location);
			$('#temp').html(temp);
			$('#wind').html(wind);
			//filling the image src attribute with the image url
			$('#img').attr('src', img);

		}
	});		
}