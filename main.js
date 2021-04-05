var display = document.getElementById("result");

var count = 0;
var loop = function(){
    //if(count > 7){
    //    display.innerHTML += "It gets inaccurate by itr=7 because of accumulating floating point errors";
    //    return false;
    //}
    
    var fact = 1;
    for(var i = 1; i < count+1; i++){
        fact *= i;
    }
    //console.log(fact);
    var pi = (Math.E**(2*count))*fact*fact/(2*(count+1/6)*((count)**(2*count)));
    console.log(pi);
    display.innerHTML += "itr: "+count+" factorial: "+fact+"\n";
    display.innerHTML += "π = "+pi+"\n";
    count++;
    setTimeout(loop,500);
};

loop();