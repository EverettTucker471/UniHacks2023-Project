var input = document.getElementById("select-file");
var preview = document.getElementById("image-container");
var long_term_body = document.getElementById("long-term-body");

function buildLongTable(xml) {
  var longterm_xml = xml.getElementsByTagName("long_term_variables")[0];
  var row2 = document.getElementById("long-term-row2");
  for (var i = 0; i < longterm_xml.childElementCount*2+1; i++) {
    if (i % 2 == 1) { 
      var kid = longterm_xml.childNodes[i];
      var row_element = row2.children[(i-1)/2];
      row_element.innerText = kid.firstChild.nodeValue;
      row_element.style["padding"] = "10px";
      row_element.style["text-align"] = "center";
    }
  }
}

function buildShortTable(xml) {
  var shortterm_xml = xml.getElementsByTagName("daily_variables")[0];
  var row2 = document.getElementById("short-term-row2");
  for (var i = 0; i < shortterm_xml.childElementCount*2+1; i++) {
    if (i % 2 == 1) { 
      var kid = shortterm_xml.childNodes[i];
      var row_element = row2.children[(i-1)/2];
      row_element.innerText = kid.firstChild.nodeValue;
      row_element.style["padding"] = "10px";
      row_element.style["text-align"] = "center";
    }
  }
}

function uploadFile() { // when upload button is clicked
    let files = input.files;

    if (files.length == 0) return; // file must exist
    const file = files[0];

    if (file.type.startsWith('text/xml')) {
        let reader = new FileReader();
        
        reader.onload = (e) => {
          var toRead = e.target.result;
          let parser = new DOMParser();
          xmlDoc = parser.parseFromString(toRead, 'text/xml');

          console.log(xmlDoc.getElementsByTagName("floors_climbed")[0].firstChild.nodeValue);
          buildLongTable(xmlDoc);
          buildShortTable(xmlDoc);
        } // reader event close
        reader.readAsText(file);
    } // if statement close
} // function close
