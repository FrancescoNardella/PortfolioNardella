function jsonCall() {
		$("#Nazione").val("");
		$("#Longitudine").val("");
		$("#Latitudine").val("");
		$("#Temperatura").val("");
		$("#Temp_min").val("");
		$("#Temp_max").val("");
		$("#pressure").val("");
		$("#humidity").val("");
    $("#rain").val("");
		$("#wind").val("");

var indirizzo= "http://api.openweathermap.org/data/2.5/forecast";
console.log($("#city").val() + ", " + $("#units").val());
	var parameters = {
		APPID:"092b192ce7eb170f58142a4a0aa5aaee",
		q: $("#city").val(),
		unit: $("#units").val(),
		lang: "IT"
	};



	$.getJSON(indirizzo,parameters,function(data) {
			//Success !
			console.log("Success !!");
			manageResponseData(data);
		}
	)
	.error(function(jqXHR, textStatus, errorThrown) {
		console.log("ERRORE AJAX: " + errorThrown);
		$("#city").val(errorThrown);
		/*$("#Nazione").val(errorThrown);
		$("#Longitudine").val(errorThrown);
		$("#Latitudine").val(errorThrown);*/
		$("#units").val(errorThrown);
	/*$("#Temp_min").val(errorThrown);
		$("#Temp_max").val(errorThrown);
		$("#pressure").val(errorThrown);
		$("#humidity").val(errorThrown);
    $("#rain").val(errorThrown);
		$("#wind").val(errorThrown);*/


		alert("ERRORE AJAX: " + errorThrown);
		//debugger;
	});
}

// Funzione deputata all'elaborazione dei dati ricevuti dal web service
function manageResponseData(data) {
	//debugger;

	var temp="";
	var temp_min="";
	var temp_max="";
	var vento="";
	var piog="";
	var umid="";
	var press="";
  var vis;
		$("#city").val(data.city.name);
		$("#Nazione").val(data.city.country);
		$("#Longitudine").val(data.city.coord.lon);
		$("#Latitudine").val(data.city.coord.lat);
	for(var i=0;i<data.list.length;i++){

		vis=data.list[i].dt_txt.substr(11, 5);
		if(vis=="12:00")
		{
		temp+=data.list[i].main.temp+"°c"+"\n";
		temp_min+=data.list[i].main.temp_min+"°c"+"\n";
		temp_max+=data.list[i].main.temp_max+"°c"+"\n";
		vento+=data.list[i].main.wind+"\n";
		piog+=data.list[i].main.rain+"%"+"\n";
		umid+=data.list[i].main.humidity+"%"+"\n";
		press+=data.list[i].main.pressure+" pa"+"\n";
		}
 }
	 $("#Temperatura").val(temp);
		$("#Temp_min").val(temp_min);
		$("#Temp_max").val(temp_max);
		$("#pressure").val(press);
		$("#humidity").val(umid);
    $("#rain").val(piog);
		$("#wind").val(vento);
		$("#pressure").val(press);


	}
