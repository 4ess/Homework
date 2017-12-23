function optionClick(){
var div_maliga = document.getElementById("mamaliga-option");
var div_hotdog = document.getElementById("hotdog-option");
var div_hamburger = document.getElementById("hamburger-option");

//var checkbox = div.firstElementChild;
var checkbox_maliga= div_maliga.firstElementChild;
var checkbox_hotdog = div_hotdog.firstElementChild;
var checkbox_hamburger = div_hamburger.firstElementChild;

//var quantity = div.lastElementChild;
var quantity_maliga = div_maliga.lastElementChild;
var quantity_hotdog= div_hotdog.lastElementChild;
var quantity_hamburger = div_hamburger.lastElementChild;

//var checked = div.className;
var checked_maliga = div_maliga.className;
var checked_hotdog = div_hotdog.className;
var checked_hamburger = div_hamburger.className;
// daca bifa este activata
//1
if( checkbox_maliga.checked ){
  //quantity.disabled = false;
    quantity_maliga.disabled = false;
  //quantity.value = 1;
  quantity_maliga.value = 1;
  div_maliga.className = "option-selected";
}else{
  //quantity.disabled = true;
  quantity_maliga.disabled = true;
  //quantity.value = 0;
  quantity_maliga.value = 0;
  //div.className  = "";
  div_maliga.className = "option-notselected";
}
//2
if(checkbox_hotdog.checked){
  //quantity.disabled = false;
    quantity_hotdog.disabled = false;
  //quantity.value = 1;
  quantity_hotdog.value = 1;

  div_hotdog.className = "option-selected";

}else{
  //quantity.disabled = true;

  quantity_hotdog.disabled = true;


  //quantity.value = 0;

  quantity_hotdog.value = 0;

  //div.className  = "";

  div_hotdog.className = "option-notselected";

}
//3
if( checkbox_hamburger.checked){
  //quantity.disabled = false;
    quantity_hamburger.disabled = false;
  //quantity.value = 1;
  quantity_hamburger.value = 1;
  div_hamburger.className = "option-selected";
}else{
  //quantity.disabled = true;
  quantity_hamburger.disabled = true;

  //quantity.value = 0;
  quantity_hamburger.value = 0;
  //div.className  = "";
  div_hamburger.className = "option-notselected";
}

  //  console.dir( quantity);
    console.dir(checkbox_maliga );
}

function filterValue(){
  var div_maliga = document.getElementById("mamaliga-option");
  var div_hotdog = document.getElementById("hotdog-option");
  var div_hamburger = document.getElementById("hamburger-option");

  var maliga_nume = document.getElementById("maliga").innerHTML;
  var hotdog_nume = document.getElementById("hotdog").innerHTML;
  var hamburger_nume = document.getElementById("hamburger").innerHTML;

  var quantity_maliga = div_maliga.lastElementChild;
  var quantity_hotdog= div_hotdog.lastElementChild;
  var quantity_hamburger = div_hamburger.lastElementChild;

  var checkbox_maliga= div_maliga.firstElementChild;
  var checkbox_hotdog = div_hotdog.firstElementChild;
  var checkbox_hamburger = div_hamburger.firstElementChild;

  var pret_maliga = 20;
  var pret_hotdog = 30;
  var pret_hamburger = 35;

  var total_maliga = pret_maliga*quantity_maliga.value;
  var total_hotdog = pret_hotdog*quantity_hotdog.value;
  var total_hamburger = pret_hamburger*quantity_hamburger.value;

  var total = total_maliga + total_hotdog + total_hamburger;
  //1
    if(quantity_maliga.value <= 10){

      quantity_maliga.disabled = false;

    }else{
      quantity_maliga.disabled = false;


      checkbox_maliga.checked = false;


      div_maliga.className = "option-notselected";

    }
//2
if(quantity_hotdog.value <= 10 ){
  quantity_hotdog.disabled = false;
}else{
  quantity_hotdog.disabled = false;

  checkbox_hotdog.checked = false;

  div_hotdog.className = "option-notselected";

}
//3
if(
  quantity_hamburger.value <= 10){

  quantity_hamburger.disabled = false;

}else{
  quantity_hamburger.disabled = false;

  checkbox_hamburger.checked = false;

  div_hamburger.className = "option-notselected";
}
    var display =
     `<div class="total">
        ${maliga_nume} ${total_maliga} Lei +
        ${hotdog_nume} ${total_hotdog} Lei +
        ${hamburger_nume} ${total_hamburger} Lei
     </div>
     <div>
       Total
       ${total}
      </div>`;

document.getElementById("total_tot").firstElementChild.innerHTML = display;

}
