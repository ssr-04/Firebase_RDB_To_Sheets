//Author - Sachin Sabariram (ssr-04)
//Distributed under opensource



function update() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var sheet = ss.getActiveSheet();
 
  var firebaseUrl = "Your firebase Realtime database URL";

  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);
  var dataSet = base.getData();

  var values = [];
  var datetime = new Date().toLocaleString();
  values.push(datetime);
  
  for(var key in dataSet) {
  var value = dataSet[key];
  values.push(value);
}
sheet.appendRow(values);

}

function doGet(e) {
  var x = HtmlService.createTemplateFromFile("index.html");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function getSheetData()  { 
  var a= SpreadsheetApp.getActiveSpreadsheet();
  var b = a.getSheetByName('Sheet1'); 
  var c = b.getDataRange();
  return c.getValues().reverse();  
}
