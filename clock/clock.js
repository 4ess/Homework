//setTimeout() <> clearTimeout()
//setInterval() <> clearInterval()
function clock(){
    //variabile
  var d = new Date();    //capturam momentul curent : data,ora, min, sec.
  var h = d.getHours();  //extrage ora
  var m = d.getMinutes();//extrage min
  var s = d.getSeconds();//extrage sec
  var puncte = " &nbsp; " ;
  var zero =0;
    //daca
  if(s%2==0){  //daca par
    puncte;
  }else{
    puncte=" : ";
   }
  if(h<=9){
  h="0"+h;
  }else{
    h;
  }
  if(s<=9){
  s="0"+s;
  }else{
    s;
  }
  if(m<=9){
  m="0"+m;
  }else{
    m;
  }

  var display = `<div id="d">
                <span class="hours">     ${h}</span>
                <span class="dots"> ${puncte}</span>
                <span class="minutes">   ${m}</span>
                <span class="dots"> ${puncte}</span>
                <span class="seconds">   ${s}</span>
                </div>`;
  var display1 = h+ ":" +m+ ":"+s;

document.title = display1;
document.body.innerHTML = display;

}
setInterval(clock, 1000);
