function onlyNumberKey(evt) { 
          
    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
    if (ASCIICode > 31 && (ASCIICode < 42 || ASCIICode > 57)) 
        return false; 
     else if(ASCIICode === 44)
     return false;   
    return true; 
}