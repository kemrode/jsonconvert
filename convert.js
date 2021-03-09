
//bring back the script to use jQuery
var script = document.createElement('jQuery');
script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

let validateBtn = document.querySelector('.btnValid');
let xmlInput = document.getElementById('link');

xmlInput.addEventListener('change', handleFileSelect, false)


var ExcelToJSON = function() {

    console.log("je suis dans la fonction");
    this.parseExcel = function(file) {
        console.log("Kevin1");
        var reader = new FileReader();
        console.log(reader);

        reader.onload = function(e) {
            console.log("kevin2");
            var data = e.target.result;
            var workbook = XLSX.read(data, {
            type: 'binary'
            });
            workbook.SheetNames.forEach(function(sheetName) {
                console.log("kevin3");
            // Here is your object
            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            var json_object = JSON.stringify(XL_row_object);
            console.log(JSON.parse(json_object));
            jQuery( '#xlx_json' ).val( json_object );
            })
        };

        reader.onerror = function(ex) {
            console.log(ex);
        };

        reader.readAsBinaryString(file);
        };
    };

    function handleFileSelect(evt) {
    
    var files = evt.target.files; // FileList object
    var xl2json = new ExcelToJSON();
    xl2json.parseExcel(files[0]);
}