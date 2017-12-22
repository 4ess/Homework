function updateTermometer(){
  var input = document.getElementById('temperature-input').value;
  var indicator = document.getElementById('termometer-indicator').style.width = `${3*input+60}px`;
  
}
