 

 var c1;
 var c2;
 
 function generarGradient( c1, c2){
    var c1 = document.getElementById("color1").value;
    var c2 = document.getElementById("color2").value;
    console.log(c1, c2);
document.getElementById("jumbox").style.background ="linear-gradient(to right , "+c1 +","+ c2 + ")";
  document.getElementById("css1").innerHTML = "background: linear-gradient(to right, " + c1 +","+c2+");" ;
}


 function geneGradient(color1, color2, color3){
var color1 = document.getElementById("color11").value;
var color2 = document.getElementById("color22").value;
var color3 = document.getElementById("color3").value;

document.getElementById("jumbox2").style.background = "linear-gradient(to right , "+color1 + ","+color2+","+color3+")";
document.getElementById("css2").innerHTML = "background: linear-gradient(to right, " + color1 +","+color2+","+color3+");";

 }
 