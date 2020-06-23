const btn = document.getElementById("myBtn")
var nbAleatoire = Math.round(Math.random() * (99999 - 10000)+ 10000) 
console.log(nbAleatoire)
var chanseNumb = 1

btn.addEventListener("click", Test) //Event Listener For Check Button

//Fonction For Character Grouping 
function render_Zone_number(){
  let zoneNumber = ""
  for(var i = 0; i < 5 ; i++){
    zoneNumber += document.getElementById('inputListe').children[i].value
  }
  return zoneNumber
}

//Test For 5 Number
function Test (){
  let fullZoneNumber = render_Zone_number().toString()
  let nbAleaChaine = nbAleatoire.toString()
  let Taureau = 0, Vache = 0
  let i, j, childeListe = 0

  //Section OF conditions
  for(i=0; i < 5; i++){
    if(fullZoneNumber[i] == nbAleaChaine[i]){
      Taureau++
      document.getElementById("Taureau").innerHTML = Taureau
      document.getElementById('inputListe').children[i].style.backgroundColor ='#558b2f' 
    }else if(fullZoneNumber[i] !== nbAleaChaine[i] && (nbAleaChaine.countCharRapeate(fullZoneNumber[i])) > 0){
      Vache++
      for(j=0; j < 5; j++){
        if ( (i != j) && (fullZoneNumber[i] == nbAleaChaine[j]) ){
         document.getElementById('inputListe').children[i].style.backgroundColor ='#9e9e9e'
         document.getElementById("Vache").innerHTML = Vache
        }
      } 
    }else{
      document.getElementById('inputListe').children[i].style.backgroundColor ='#a30000'
    }
    //NB Vache Initialization
    if(Taureau == 5 ){
      document.getElementById("Vache").innerHTML = 0
    }
  } 

  //Creation OF new Part  
  if((chanseNumb<5)&& (Taureau<5)){
    const bottomPage = document.querySelector('#bottom-page')
    const list = document.createElement('ul')
    list.classList.add('inputListeClass')
    list.setAttribute("id", "inputListe")
    for (let i=0; i <5; i++) {
      const input = document.createElement('input') 
      input.setAttribute("onkeypress", "return isNumber(event)") 
      input.setAttribute("maxlength", "1") 
      //Append TO DOM
      list.appendChild(input);
    }
    bottomPage.appendChild(list)
    document.querySelectorAll('#inputListe')[childeListe].removeAttribute("id")
    childeListe++
    chanseNumb++
  }else{
    btn.removeEventListener("click", Test )
  }
}

//Count OF Repeated CHARACTER
String.prototype.countCharRapeate = function(char) { 
  var result = 0 

  for(let i=0 ; i < this.length ; i++)
    if(this[i].indexOf(char) != -1)
      result++
      
  return result
}

//Check Input Value IF is Number 
function isNumber(e){
  let key = Number(e.key)
  if (isNaN(key) || e.key === null || e.key === ' ' || key > 9) {
    return false
  }else{
    return true
  }
}