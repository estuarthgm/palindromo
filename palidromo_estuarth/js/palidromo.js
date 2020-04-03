var palabra = prompt("Ingrese una palabra").toLowerCase();
function palindromo(){
	palabra=palabra.replace(/ /g, "");
 
	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
    return true;
}
 
if(palindromo()){
	alert(palabra + " ES PALINDROMO");
}else{
	alert(palabra + " NO ES PALINDROMO")
}
