function getData() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://swapi.co/api/planets/22/');
    request.onload = function () {
        var myData = JSON.parse(this.responseText);
        document.getElementById("response-container").innerHTML =
            myData.diameter + myData.name;
    }
    request.send();
}