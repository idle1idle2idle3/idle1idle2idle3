 function idlecontrol() {
//     rnagathcold = coldnumb * empmultcold
//     if (rna<dnacop) {
//     dna = dna + rna
//     rna = rna - rna
//     dnacop = 0
//     }
//     if (rna<0) {
//       rna = 0
//     }
//     if (coldnumb<0) {
//       coldnumb = 0
//     }
//     hostcellgath = coldnumb * 1
     instructor(); 
//     updbuycold();
//     updbuys()
//     updbuya()
//     upbuyzcold()
//     display();
 }    
    function display() {
      document.getElementById("Baustein").innerHTML = 'Virus Modules: '+bausteine
      document.getElementById("Substanzen").innerHTML = 'Genetic Material: '+
      (substanzen>10 ? substanzen.toFixed(0) : substanzen.toFixed(1));
      document.getElementById("RNA").innerHTML = rna+' RNA';
      document.getElementById("DNA").innerHTML = dna+' DNA';
      document.getElementById("sRNAv").innerHTML = sRNAnumb+' Simple-RNA-Virus';
      document.getElementById("aRNAv").innerHTML = aRNAnumb+' Advanced-RNA-Virus';
      document.getElementById("coldv").innerHTML = coldnumb+' Cold Viruses';
      document.getElementById("zcoldv").innerHTML = aRNAnumb+' Zilla Cold Viruses';
      document.getElementById("hostcelloutput").innerHTML = hostcell+' Hostcells';
      document.getElementById("hostcellupgrd").innerHTML = (10 * upgrdm) +' Hostcells';
      document.getElementById("hostcellupgrde").innerHTML = (10 * upgrdme) +' Hostcells';
    
      document.getElementById("abuymax").innerHTML = maxBuya()+" Units";
      document.getElementById("sbuymax").innerHTML = maxBuys()+" Units";
      document.getElementById("coldbuymax").innerHTML = maxbuycold()+" Units";
      document.getElementById("zcoldbuymax").innerHTML = maxbuyzcold()+" Units";
      
      if (hostcell > 10 * upgrdm) {
        document.getElementById("moduleupgrd").innerHTML = 'Can upgrade';
        document.getElementById("moduleupgrd").disabled = "";
        document.getElementById("moduleupgrd").style.cursor = "pointer";
      }
      else {
        document.getElementById("moduleupgrd").innerHTML = "Can't upgrade";
        document.getElementById("moduleupgrd").disabled = "disabled";
        document.getElementById("moduleupgrd").style.cursor = "not-allowed";
      }
    
      if (hostcell > 10 * upgrdme) {
        document.getElementById("materialupgrd").innerHTML = 'Can upgrade';
        document.getElementById("materialupgrd").disabled = "";
        document.getElementById("moduleupgrd").style.cursor = "pointer";
      }
      else {
        document.getElementById("materialupgrd").innerHTML = "Can't upgrade";
        document.getElementById("materialupgrd").disabled = "disabled";
        document.getElementById("moduleupgrd").style.cursor = "not-allowed";
    
      }
    
  }

  