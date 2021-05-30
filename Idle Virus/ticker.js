function idlemodule() {
    bausteine = bausteine + 1;
     display();
  }
  
  function idlematerial() {
    substanzen = substanzen + 0.1;
       display();
  }
  
  function idlerna() {
    rna = rna + 1
    clearInterval(idlernatime)
    idlernatime = setInterval(idlerna, 1000 / (coldnumb * empmultcold))
    display()
  }
  
  function hostcellcollect() {
     var hostchance = Math.random()
     if(hostchance>0.33){
     hostcell = hostcell + 1
     idlehostcell = setInterval(gmbarcount, 1000 / (coldnumb * hostcold),hostcellcollect, 1000 / (coldnumb * hostcold))
     display()
     }
  }
  var idlednacop;
  var idlernatime;
  var idlehostcell;
  var idlecoldnumbgen;
  var idlesRNAnumbgen;
  var gmcalc = 10 / (mmultpt*2);
  
  function idlecop() {
    if(rna>0) {
      calc = 1
      rna = rna - calc
      dna = dna + calc
    }
    if(rna==0) {
      calc = 0
      rna = rna - calc
      dna = dna + calc
    }
    clearInterval(idlednacop)
    idlednacop = setInterval(idlecop, 1000 / (sRNAnumb * smultp))
    display()
  }
  
  function idlecoldnumb() {
    coldnumb = coldnumb + 1
    clearInterval(idlecoldnumbgen)
    idlecoldnumbgen = setInterval(idlecoldnumb, 1000 / (zcoldnumb * empmultzcold))
    display()
  }
  
  function idlesRNAnumb() {
    sRNAnumb = sRNAnumb + 1
    clearInterval(idlesRNAnumbgen)
    idlesRNAnumbgen = setInterval(idlesRNAnumb, 1000 / (aRNAnumb * amultp))
    display()
  }

  function gmbarcount(){
    gmprogress = hostcell / upgrdme * 10
    document.getElementById("gmbar").style.width = gmprogress + "px";
    if(gmprogress > 100){
      document.getElementById("gmbar").style.width = 100 + "px";
    }
  }
  function vmbarcount(){
    vmprogress = hostcell / upgrdm * 10
    document.getElementById("vmbar").style.width = vmprogress + "px";
    if(vmprogress > 100){
      document.getElementById("vmbar").style.width = 100 + "px";
    }
  }