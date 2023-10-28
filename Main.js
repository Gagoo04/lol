function desplegable(claseMostrar, claseOcultar){
  var ocultar = document.getElementsByClassName(claseOcultar);
  var mostrar = document.getElementsByClassName(claseMostrar);
  console.log(ocultar);
  for(var i = 0; i < ocultar.length; i++){
    ocultar[i].classList.add('hidden');
  }
  for(var i = 0; i < mostrar.length; i++){
    mostrar[i].classList.remove('hidden');
  }
  var activos=document.getElementsByClassName("active");
  for(var i = 0; i < activos.length; i++){
    activos[i].classList.remove("active");
  }
  document.getElementById(claseMostrar).classList.add("active");
}
function play(){
  var audioElement = document.getElementById('miAudio');
  if(audioElement.classList.contains("playing")){
    audioElement.classList.remove("playing");
    audioElement.pause();
  }else{
    audioElement.play();
    audioElement.classList.add("playing");
  }
}
  document.getElementById("NombreCampeon").addEventListener('click', play);