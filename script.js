let toggle=false;
function toggleTheme(){
    const calculator = document.querySelector('.calculator');
    
    toggle= !toggle;
    if(toggle){
        calculator.classList.add('dark-mode');
    }
    else{
        calculator.classList.remove('dark-mode');
    }
}


function appendValue(str){
    const val=document.getElementById("input").value;
    const valstr=val+str;
    console.log(valstr);
    document.getElementById('input').value=valstr;
    
}
function clearDisplay(){
    document.getElementById("input").value="";
}
function deleteCharacter(){
    const val=document.getElementById("input");
    input.value=input.value.slice(0,-1);
}
function calculate(){
    const val = document.getElementById("input").value;
    try{
        document.getElementById("input").value=eval(val);
    }
    catch(error){
        document.getElementById("input").value="";
    }
    
}