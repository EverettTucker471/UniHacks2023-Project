var input = document.getElementById("select_file");
var textarea = document.getElementById("text-container");
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
  // Setting Varibles for Computation
  var height = xmlDoc.getElementsByTagName("height")[0].firstChild.nodeValue;
  var minHR = xmlDoc.getElementsByTagName("min_heart_rate")[0].firstChild.nodeValue;
  var maxHR = xmlDoc.getElementsByTagName("max_heart_rate")[0].firstChild.nodeValue
  var DoB = xmlDoc.getElementsByTagName("dateOfBirth")[0].firstChild.nodeValue
  var weight = xmlDoc.getElementsByTagName("weight")[0].firstChild.nodeValue
  var steps = xmlDoc.getElementsByTagName("steps")[0].firstChild.nodeValue
  var dateArray = DoB.split("/")
  var age = 2023 - dateArray[2]
  var calcHR = 206.9 - (0.67 * age) // Add this as threshold heart rate
  var maxExertion = maxHR/calcHR * 100 // Add this
  var HRR = maxHR - minHR // Add this
  var VO2Max = 15.3 * (calcHR / minHR) // Add this
  var activeCalories = height * steps * weight * 0.0000031539179 // Add this - Magical Coeffcient
  document.getElementById('Max_HR').innerHTML = maxHR
  document.getElementById('maxExertion').innerHTML = maxExertion
  document.getElementById('HRR').innerHTML = HRR
  document.getElementById('VO2Max').innerHTML = VO2Max
  document.getElementById('active_cal').innerHTML = activeCalories
}


function uploadFile() { // when upload button is clickedam
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
