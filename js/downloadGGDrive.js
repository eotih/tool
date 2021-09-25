function getLinkDownloadGgDrive(input) {
    const BASE_URL = "https://drive.google.com/uc?export=download&id="
    var result = BASE_URL + input; 
    document.getElementById("myInput").value = result;
}

function splitLink() {
    var dataInput = document.getElementById("link").value;
    var url = dataInput.split('/');
    var resultID = url[url.length - 2];
    getLinkDownloadGgDrive(resultID)
}
function copyText() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copy: "+ copyText.value)
}