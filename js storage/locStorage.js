
  document.body.children[1].onclick = save;
  function save(){
    var name = document.body.firstElementChild.value;
    if(name.length <= 2){
        var avIncor = document.getElementById('incorect').innerHTML = 'incorect';
        var disBtn = document.getElementById('but').disabled = true;
    }if(name.length >= 3){
        var avCor = document.getElementById('alert').innerHTML = 'corect';
          localStorage.setItem('user', name); // storege
          alert('stored');
     }if (localStorage.getItem('user', name)){
      var user = document.body.firstElementChild.placeholder = name;
     }
}









//console.dir(document.querySelector('button'));
