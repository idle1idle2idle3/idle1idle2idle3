function buymaxaunit() {
    var buy = maxBuya();
    bausteine = bausteine - buy * 250
    substanzen = substanzen - buy * 20
    dna = dna - buy * 150
    sRNAnumb = sRNAnumb - buy * 100
    aRNAnumb = aRNAnumb + buy
    clearInterval(idlesRNAnumbgen)
    idlesRNAnumbgen = setInterval(idlesRNAnumb, 1000 / (aRNAnumb * amultp))
    return true
    }
    
    function buymaxsunit() {
    var buy = maxBuys();
    bausteine = bausteine - buy * 5
    substanzen = substanzen - buy * 1
    sRNAnumb = sRNAnumb + buy
    dnacop = sRNAnumb * smultp
    if (idlednacop!==undefined){
        clearInterval(idlednacop)
    }
    idlednacop = setInterval(idlecop, 1000 / (sRNAnumb * smultp))
    return true
    }
    
    
    function buymaxcoldunit() {
    var buy = maxbuycold();
    bausteine = bausteine - buy * 10
    substanzen = substanzen - buy * 2
    dna = dna - buy * 10
    coldnumb = coldnumb + buy
    rnagathcold = coldnumb * empmultcold
    clearInterval(idlernatime)
    idlernatime = setInterval(idlerna, 1000 / (coldnumb * empmultcold))
    clearInterval(idlehostcell)
     idlehostcell = setInterval(hostcellcollect, 1000 / (coldnumb * hostcold))
    return true
    }
    
    function buymaxzcoldunit() {
    var buy = maxbuyzcold();
    bausteine = bausteine - buy * 150
    substanzen = substanzen - buy * 100
    dna = dna - buy * 1000
    coldnumb = coldnumb - 100 * buy
    zcoldnumb = zcoldnumb + buy 
    clearInterval(idlecoldnumbgen)
    idlecoldnumbgen = setInterval(idlecoldnumb, 1000 / (zcoldnumb * empmultzcold))
    return true
    }
    function updbuys() {
        var n = document.getElementById("sbuynumb").value;
        if (n<1){
        n=1
        }
        if (n>maxBuys()) {
          n = maxBuys();
        }
        document.getElementById("sbuy").innerHTML = n + " Units";
        return parseInt(n)
      }
      
      function updbuya() {
        var n = document.getElementById("abuynumb").value;
        if (n<1){
        n=1
        }
        if (n>maxBuya()) {
          n = maxBuya();
        }
        document.getElementById("abuy").innerHTML = n + " Units";
        return parseInt(n)
      }
      function updbuycold() {
        var n = document.getElementById("coldbuynumb").value;
        if (n<1){
        n=1
        }
        if (n>maxbuycold()) {
          n = maxbuycold()
        }
        document.getElementById("coldbuy").innerHTML = n + " Units"; 
        return parseInt(n)
      } 
      
      function upbuycoldbuy() {
        var buy = updbuycold();
        bausteine = bausteine - buy * 10
        substanzen = substanzen - buy * 2
        dna = dna - buy * 10
        coldnumb = coldnumb + buy
        rnagathcold = coldnumb * empmultcold
        clearInterval(idlernatime)
        idlernatime = setInterval(idlerna, 1000 / (coldnumb * empmultcold))
        clearInterval(idlehostcell)
        idlehostcell = setInterval(hostcellcollect, 1000 / (coldnumb * hostcold))
        return true
      }
      
      function upbuyzcold() {
        var n = document.getElementById("coldbuynumb").value;
        if (n<1){
        n=1
        }
        if (n>maxbuyzcold()) {
          n = maxbuyzcold()
        }
        document.getElementById("zcoldbuy").innerHTML = n + " Units"; 
        return parseInt(n)
      } 
      
      function upbuyzcoldbuy() {
        var buy = upbuyzcold();
        bausteine = bausteine - buy * 150
        substanzen = substanzen - buy * 100
        dna = dna - buy * 1000
        coldnumb = coldnumb - 100 * buy
        zcoldnumb = zcoldnumb + buy 
        clearInterval(idlecoldnumbgen)
        idlecoldnumbgen = setInterval(idlecoldnumb, 1000 / (zcoldnumb * empmultzcold))
        return true
      }
      function upbuyabuy() {
        var buy = updbuya();
        bausteine = bausteine - buy * 250
        substanzen = substanzen - buy * 20
        DNA = DNA - buy * 150
        sRNAnumb = sRNAnumb - buy * 100
        aRNAnumb = aRNAnumb + buy
        clearInterval(idlesRNAnumbgen)
        idlesRNAnumbgen = setInterval(idlesRNAnumb, 1000 / (aRNAnumb * amultp))
        return true
      }
      
      
      
      function upbuysbuy() {
        var buy = updbuys();
        bausteine = bausteine - buy * 5
        substanzen = substanzen - buy * 1
        sRNAnumb = sRNAnumb + buy
        dnacop = sRNAnumb * smultp
        clearInterval(idlednacop)
        idlednacop = setInterval(idlecop, 1000 / (sRNAnumb * smultp))
        return true
      }
      function moduleupgrd() {
        hostcell = hostcell - 5 * upgrdm
        upgrdm = upgrdm * 5
        mmultp = mmultp * 2
        clearInterval(idlemoduleid)
        idlemoduleid = setInterval(idlemodule, 1000 / mmultp)
      }
      
      function materialupgrd() {
        hostcell = hostcell - 5 * upgrdme
        upgrdme = upgrdme * 5
        mmultpt = mmultpt * 2
        gmcalc = gmcalc / 10
        clearInterval(idlesubstanzenn)
        idlesubstanzenn = setInterval(idlematerial, 1000 / mmultpt)
      }