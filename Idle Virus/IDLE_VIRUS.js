var substanzen = 0;
var instruct = 0
var hostcell = 0
var bausteine = 0;
var rna = 100
var smultp = 1
var amultp = 2
var empmultcold = 1
var empmultzcold = 2
var dna = 0
var mmultp = 1
var mmultpt = 1
var sRNAnumb = 0
var aRNAnumb = 0
var coldnumb = 1
var zcoldnumb = 0
var upgrdm = 1
var upgrdme = 1
var hostcold =1
var counter = 0
var dnacop = 0
var rnagathcold = 0
var hostcellgath = 0
var calc = 1
var time = 0
var gmcalc = 100
var gmprogress = 0
var vmprogress = 0





function instructor() {
  if (sRNAnumb>=1 && instruct == 0) {
  counter = 1
  instruct = instruct + counter
  counter = 0
  }
  if (sRNAnumb>=3 && instruct == 1) {
  counter = 1
  instruct = instruct + counter
  counter = 0
  }
  if (coldnumb>=5 && instruct ==2) {
  counter = 1
  instruct = instruct + counter
  counter = 0
  }
  if (mmultp==2 && mmultpt==2 && instruct == 3) {
  counter = 1
  instruct = instruct + counter
  counter = 0
  }
  if (instruct==0) {
    document.getElementById("instructor").innerHTML = 'Hello. This is your Virus Company. Raise it to world Domination, but first you should purchase a RNA-Virus to copy RNA into DNA. Click on "RNA" and then on RNA-Virus.'
  }
  if (instruct==1) {
    document.getElementById("instructor").innerHTML = 'Cool. Now purchase more.'
  }
  if (instruct==2) {
    document.getElementById("instructor").innerHTML = 'Now purchase a Cold Virus. Go on DNA and purchase 5 units.'
  }
  if (instruct==3) {
    document.getElementById("instructor").innerHTML = 'The Cold Viruses produces RNA and Hostcells. Upgrade your Generators on "Virus Modules" and "Genetic Materials."'
  }
   if (instruct==4) {
    document.getElementById("instructor").innerHTML = 'With 100 units of a Virus you can purchase better Viruses. Now go on your own.'
  }

}

function close() {
   if (instruct == 4) {
    document.getElementById("closer").style.cursor = "pointer";
    document.getElementById("instructor").style.display = "none";
  }
  else {
    document.getElementById("closer").disabled = "disabled";
    document.getElementById("closer").style.cursor = "not-allowed";
  }
  return true
}
 




function starto() {
   time = 5
   setTimeout(start2, 5000)
   document.getElementById("starte").style.cursor = "progress";
   return true;
}

function start2() {
  instructor()
	 setInterval(idlecontrol, 1000);
	idlemoduleid = setInterval(idlemodule, 1000 / mmultp)	
	idlesubstanzenn = setInterval(idlematerial, 1000 / (mmultpt*2))
	if (coldnumb > 0) {
	idlernatime = setInterval(idlerna, 1000 / (coldnumb * empmultcold))
	}
	if (sRNAnumb > 0) {
	idlednacop = setInterval(idlecop, 1000 / (sRNAnumb * smultp))
	}
	if ( zcoldnumb > 0 ) {
		idlecoldnumbgen = setInterval(idlecoldnumb, 1000 / (zcoldnumb * empmultzcold))
	}
	if ( aRNAnumb > 0 ) {
		idlesRNAnumbgen = setInterval(idlesRNAnumb, 1000 / (aRNAnumb * amultp))
	}
	if ( coldnumb * hostcold > 0 ) {
		idlehostcell = setInterval(hostcellcollect, 1000 / (coldnumb * hostcold))
	}

     document.getElementById("Baustein").style.display = "";
     document.getElementById("Substanzen").style.display = "";
     document.getElementById("RNA").style.display = "";
     document.getElementById("DNA").style.display = "";
     document.getElementById("hostcelloutput").style.display = "";
     document.getElementById("starter").style.display = "none";
     document.getElementById("instructorfield").style.display = "";
     document.getElementById("Changer").style.display = "";
}


function maxBuys() {
  return Math.floor(Math.min(bausteine/5, substanzen));
}

function maxBuya() {
  return Math.floor(Math.min(bausteine/250, substanzen/20, dna/150, sRNAnumb/100));
}


function maxbuycold() {
  return Math.floor(Math.min(bausteine/10, substanzen/2, dna/10));
}

function maxbuyzcold() {
  return Math.floor(Math.min(bausteine/150, substanzen/100, dna/1000, coldnumb/100));
}


function showRNA() {
   document.getElementById("RNAdisplay").style.display = "block";
   document.getElementById("RNAgathering").style.display = "none";
   document.getElementById("Module").style.display = "none";
   document.getElementById("Material").style.display = "none";
   document.getElementById("Changelog").style.display = "none";
   return true;
  
}

function showDNA() {
   document.getElementById("RNAgathering").style.display = "block";
   document.getElementById("RNAdisplay").style.display = "none";
   document.getElementById("Module").style.display = "none";
   document.getElementById("Material").style.display = "none";
   document.getElementById("Changelog").style.display = "none";
   return true;

}

function showmodule() {
   document.getElementById("Module").style.display = "block";
   document.getElementById("Material").style.display = "none";
   document.getElementById("RNAgathering").style.display = "none";
   document.getElementById("RNAdisplay").style.display = "none";
   document.getElementById("Changelog").style.display = "none";
   return true;

}

function changeloger() {
   document.getElementById("Module").style.display = "none";
   document.getElementById("Material").style.display = "none";
   document.getElementById("RNAgathering").style.display = "none";
   document.getElementById("RNAdisplay").style.display = "none";
   document.getElementById("Changelog").style.display = "block";
   return true;


}

function showmaterial() {
   document.getElementById("Module").style.display = "none";
   document.getElementById("Material").style.display = "block";
   document.getElementById("RNAgathering").style.display = "none";
   document.getElementById("RNAdisplay").style.display = "none";
   document.getElementById("Changelog").style.display = "none";
   return true;
}

function showsRNAinf(id) {
  document.getElementById("sRNAvinf").style.display = (id == "sRNAvinf" ? "block" : "none");
  document.getElementById("aRNAvinf").style.display = (id == "aRNAvinf" ? "block" : "none");
  return true;
}

function showscoldvinf(id) {
  document.getElementById("coldvinf").style.display = (id == "coldvinf" ? "block" : "none");
  document.getElementById("zcoldvinf").style.display = (id == "zcoldvinf" ? "block" : "none");
  return true
}

var blinker = 1
function blink() {
  document.getElementById("beware").style.display = (blinker == 1 ? "" : "none");
  if (blinker == 1) {
    blinker = 0
  }
  else {
    blinker = 1
  } 
}

var idbeware = setInterval(blink, 1000)

function deletesave() {
  if (confirm("Are you sure?")){
    substanzen = 0;
    instruct = 0
    hostcell = 0
    bausteine = 0;
    rna = 100
    smultp = 1
    amultp = 2
    empmultcold = 1
    empmultzcold = 2
    dna = 0
    mmultp = 1
    mmultpt = 1
    sRNAnumb = 0
    aRNAnumb = 0
    coldnumb = 0
    zcoldnumb = 0
    upgrdm = 1
    upgrdme = 1
    hostcold =1
    counter = 0
    dnacop = 0
    rnagathcold = 0
    hostcellgath = 0
    calc = 1
 time = 0
 idlernatime = setInterval(idlerna, 1000 / (coldnumb * empmultcold))
 idlehostcell = setInterval(hostcellcollect, 1000 / (coldnumb * hostcold))
 idlednacop = setInterval(idlecop, 1000 / (sRNAnumb * smultp))
 setInterval(idlecontrol, 1000);
 idlemoduleid = setInterval(idlemodule, 1000 / mmultp)
 idlecoldnumbgen = setInterval(idlecoldnumb, 1000 / (zcoldnumb * empmultzcold))
 idlesRNAnumbgen = setInterval(idlesRNAnumb, 1000 / (aRNAnumb * amultp))
  }
 
 return true
}


//machst du toll!!! Georg. Willkommen bi 73 Game Studio.