/**
 * @file
 * Parses the file with all the definitions and renders them on the DOM.
 */

function loadSheetFile(file) {
  var json = {};
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", file, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    json = JSON.parse(xmlhttp.responseText);
  }
  return json;
}
