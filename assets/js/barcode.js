// var check = document.querySelector('[name="txt_input"]');

// if(check){

    document.querySelector('[name="txt_input"]').addEventListener('change', function() {
        var text = document.getElementById("txt_input").value;
        JsBarcode("#barcode", text);
    });
// }
console.log(check);

  