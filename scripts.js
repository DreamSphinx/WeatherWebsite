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
	var Map ="http://api.wunderground.com/api/e0bd8a41c8ada6da/animatedradar/animatedsatellite/geolookup/q/"+Geo.lat + "," + Geo.lng+".gif?num=6&delay=50&interval=30"
	$('#map').attr('src', Map);	
	//alert(Weather);
	
	
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
	
			$('#MapAndSatellite').html(location);
								//filling the image src attribute with the image url
			$('#img').attr('src', img);
		}
	});		
	var forecast = "http://api.wunderground.com/api/e0bd8a41c8ada6da/forecast10day/geolookup/q/" + Geo.lat + "," + Geo.lng + ".json"
	//alert(forecast);
	$.ajax({
			url : forecast,
			dataType :"jsonp",
			success : function(data){
				//get all the info
				var dayOne = data['forecast']['txt_forecast']['forecastday'][2]['title'];
				var dataOne = data['forecast']['txt_forecast']['forecastday'][2]['fcttext'];
				var iconOne = data['forecast']['txt_forecast']['forecastday'][2]['icon_url'];
				
				var dayTwo = data['forecast']['txt_forecast']['forecastday'][4]['title'];
				var dataTwo = data['forecast']['txt_forecast']['forecastday'][4]['fcttext'];
				var iconTwo = data['forecast']['txt_forecast']['forecastday'][4]['icon_url'];
						
				var dayThree = data['forecast']['txt_forecast']['forecastday'][6]['title'];
				var dataThree = data['forecast']['txt_forecast']['forecastday'][6]['fcttext'];
				var iconThree = data['forecast']['txt_forecast']['forecastday'][6]['icon_url'];
				
				var dayFour = data['forecast']['txt_forecast']['forecastday'][8]['title'];
				var dataFour = data['forecast']['txt_forecast']['forecastday'][8]['fcttext'];
				var iconFour = data['forecast']['txt_forecast']['forecastday'][8]['icon_url'];
				
				var dayFive = data['forecast']['txt_forecast']['forecastday'][10]['title'];
				var dataFive = data['forecast']['txt_forecast']['forecastday'][10]['fcttext'];
				var iconFive = data['forecast']['txt_forecast']['forecastday'][10]['icon_url'];
				
				var daySix = data['forecast']['txt_forecast']['forecastday'][12]['title'];
				var dataSix = data['forecast']['txt_forecast']['forecastday'][12]['fcttext'];
				var iconSix = data['forecast']['txt_forecast']['forecastday'][12]['icon_url'];
				
				var daySeven = data['forecast']['txt_forecast']['forecastday'][14]['title'];
				var dataSeven = data['forecast']['txt_forecast']['forecastday'][14]['fcttext'];
				var iconSeven = data['forecast']['txt_forecast']['forecastday'][14]['icon_url'];
				
				//setting the spans to the correct parameters
				$('#dayOne').html(dayOne);
				$('#dataOne').html(dataOne);
				//			
				$('#dayTwo').html(dayTwo);
				$('#dataTwo').html(dataTwo);
				//			
				$('#dayThree').html(dayThree);
				$('#dataThree').html(dataThree);
				
				$('#dayFour').html(dayFour);
				$('#dataFour').html(dataFour);
				//			
				$('#dayFive').html(dayFive);
				$('#dataFive').html(dataFive);
				//			
				$('#daySix').html(daySix);
				$('#dataSix').html(dataSix);
				
				$('#daySeven').html(daySeven);
				$('#dataSeven').html(dataSeven);
				
				$('#imgOne').attr('src', iconOne);
				$('#imgTwo').attr('src', iconTwo);
				$('#imgThree').attr('src', iconThree);
				$('#imgFour').attr('src', iconFour);
				$('#imgFive').attr('src', iconFive);
				$('#imgSix').attr('src', iconSix);
				$('#imgSeven').attr('src', iconSeven);
			}
		});	
		
		var weatherAlert = "http://api.wunderground.com/api/e0bd8a41c8ada6da/alerts/geolookup/q/"  + Geo.lat + "," + Geo.lng +  ".json"
		//alert(weatherAlert);
		$.ajax({
			url : weatherAlert,
			dataType :"jsonp",
			success : function(data){
				//get all the info
				var warning = data['alerts'][0]['message'];
							
				//setting the spans to the correct parameters
				$('#warning').html(warning);
					
			}
		});	
}


//http://api.wunderground.com/api/e0bd8a41c8ada6da/alerts/q/ND/garrison.json