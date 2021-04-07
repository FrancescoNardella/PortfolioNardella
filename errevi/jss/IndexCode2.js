function jsonCall() {
	//Svuotiamo i campi in cui mostreremo il risultato
	//Chiamata AJAX al web service che restituisce il file di esempio JSON:
	var webService = "http://api.openweathermap.org/data/2.5/forecast";
	console.log($("#citta").val() + ", " + $("#temperatura").val());
	var parameters = {
		APPID: "926fce3e6b31cdca118412d27bb2d213",
		q: $("#citta").val(),
		units: $("#temperatura").val(),
		lang: "IT"
	};
	
	$.getJSON(webService, 
		parameters, 
		function(data) {
			//Success !
			console.log("Success !!");
			manageResponseData(data);
		}
	)
	.error(function(jqXHR, textStatus, errorThrown) {
		console.log("ERRORE AJAX: " + errorThrown);
		$("#citta").val(errorThrown);
		$("#temperatura").val(errorThrown);
		
		alert("ERRORE AJAX: " + errorThrown);
		//debugger;
	});
}

// Funzione deputata all'elaborazione dei dati ricevuti dal web service
function manageResponseData(data) {
		var umidita="";
		var tmax="";
		var tmin="";
		var pressure="";
		var dclima="";
		var contr;
		$("#visuacitta").val(data.city.name);
		$("#long").val(data.city.coord.lon);
		$("#lat").val(data.city.coord.lat);
		$("#nazione").val(data.city.country);
		for(var i=0; i<data.list.length; i++)
		{
			contr=data.list[i].dt_txt.substr(11, 5);
			if(contr=="12:00")
			{
				umidita+=data.list[i].main.humidity+"%"+"\n";
				tmax+=data.list[i].main.temp_max+"\n";
				tmin+=data.list[i].main.temp_min+"\n";
				pressure+=data.list[i].main.pressure+"Pa"+"\n";
				dclima+=data.list[i].weather[0].description+"\n";
			}
		}
		$("#visuaumi").val(umidita);
		$("#visuatmax").val(tmax);
		$("#visuatmin").val(tmin);
		$("#visuaclima").val(pressure);
		$("#visuadclima").val(dclima);
}

