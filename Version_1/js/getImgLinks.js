function loadXMLDoc(){
	var xmlhttp;
	if(window.XMLHttpRequest){
		// code for IE7+, Firefox, Charome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else{
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			// do some thing
		}
		xmlhttp.open("POST","link you want",false);
		xmlhttp.send();
	}
}