var request = new XMLHttpRequest();  
request.open('GET', 'http://www.mozilla.org', true);  
request.send();  
 
if (request.status === "404") {  
    alert("No existe pagina");