function splitLink() {
    var dataInput = document.getElementById("link").value;
    var url = dataInput.split('=');
    var resultID = url[url.length - 1];
    getImage(resultID);
}
function getImage(input) {
    const BASE_URL = "https://img.youtube.com/vi/"
    var result = BASE_URL + input +'/sddefault.jpg'; 
    document.getElementById("showImage").src = result;
}