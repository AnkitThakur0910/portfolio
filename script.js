

function named() {
    names = document.getElementById('nameofinner');

myname = "Ankit-Kumar-Thakur";
var i=0
let interval
    interval = setInterval(()=>{
        if(i<myname.length&&myname[i]!='-')
        {
            names.innerText = names.innerText.concat(myname[i]);
            i++;
        }
        else if(i<myname.length&&myname[i]=='-')
        {
            names.innerText = names.innerText +" "+myname[i+1];
            i++;
            i++;
        }
        else{
            i=0;
            names.innerText = '|';
        }
    },1000)
}
    


