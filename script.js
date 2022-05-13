function init(){
    let visitasActuales = localStorage.getItem("visitas");
    if (visitasActuales) {
      let aumento = parseInt(visitasActuales) + 1;
      document.getElementById("visitas").innerHTML = aumento;
      localStorage.setItem("visitas", aumento);
    } else {
      localStorage.setItem("visitas", 1);
      document.getElementById("visitas").innerHTML = 1;
    }

}