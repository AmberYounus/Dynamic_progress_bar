i=0;
function move(){
    if(i==0){
        i=1;
        var bar = document.getElementById("myBar");
        var width = 10;
        var progress = setInterval(frame,10)
            function frame(){
                if(width >=100){
                    clearInterval(progress);
                    i=0;
                }else{
                    width++;
                     bar.style.width = width +"%";
                //    bar.innerHTML = width + "%"
                   
                }
            }      
    }
}

//styling using DOM
document.getElementById("myBar").style.color = "#fff";
document.getElementById("myBar").style.width = "10%";
document.getElementById("myBar").style.height = "30px";
document.getElementById("myBar").style.textAlign = "center";
document.getElementById("myBar").style.lineHeight = "300px";
document.getElementById("myBar").style.marginTop = "200px";
document.getElementById("myBar").style.backgroundColor = "#04AA6D";

document.getElementById("myProgress").style.width = "100%";
document.getElementById("myProgress").style.backgroundColor = "#ddd";




