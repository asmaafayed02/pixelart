// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
  
function makeGrid() {
  // Your code goes here!
var table = document.getElementById('pixelCanvas');
//to make table empty
table.innerHTML = "";
var rows = document.getElementById('inputHeight').value;
var colnms = document.getElementById('inputWidth').value;
var tableData = '';
//to  make table row and colms independ on user input
for(var i = 0; i<rows;i++){
  tableData += '<tr>';
  for(var j = 0; j<colnms; j++){
    tableData += '<td></td>'
  }
  tableData += '</tr>'
}
 //alert(tableData); 
 table.innerHTML = tableData;
 addEventForTd();
}
//for color td which user click
function addEventForTd(){
  var tds = document.getElementsByTagName('td');
  for(var x = 0; x<tds.length; x++){
    tds[x].addEventListener('click',function(event){
      var currentTd = event.target;
      currentTd.style.backgroundColor= document.getElementById('colorPicker').value;
    })
  }
}
//for color td when document loaded
document.addEventListener('DOMContentLoaded',function(){
  addEventForTd();
})