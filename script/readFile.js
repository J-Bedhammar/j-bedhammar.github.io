// Read text from file based on which page has been selected
// Add content to contentContainer.
function readFromFile(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        document.getElementById("demo").innerHTML = xhttp.responseText;
      }
  };
  xhttp.open("GET", "script/content/home.txt", true);
  xhttp.send();
}