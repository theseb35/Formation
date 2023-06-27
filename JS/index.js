

  /**
   * fonction d'initialisation: declaration de JS DOC
   * @returns {undefined} aucun retour
   */
  function init(){
    var currentDate=new Date();
    console.log(currentDate.toISOString());
    var footer=document.getElementsByTagName('footer')[0]
    footer.innerHTML=currentDate.toISOString()

  }
  document.addEventListener('DOMContentLoaded',function(evt){
    console.log(evt);
    init();
})
document