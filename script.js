function onlyNumberKey(evt) { 
          
    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
    if (ASCIICode > 31 && (ASCIICode < 42 || ASCIICode > 57)) 
        return false; 
     else if(ASCIICode === 44)
     return false;   
    return true; 
}

function defaultValue(){
    document.getElementById('result').defaultValue = 0;
}
function resetValue (){
    document.getElementById('result').value = '';

}
function resetDefaultValue(){
    document.getElementById('result').defaultValue = '';

}
function getValue(num){
    resetDefaultValue();
    var result = document.getElementById('result');
    
    result.value += num
     

}
function getResult(){
    var result = document.getElementById('result');

   result.value = eval(result.value)
   

}
function clearInput(){
    var result = document.getElementById('result');
    result.value = ''
}