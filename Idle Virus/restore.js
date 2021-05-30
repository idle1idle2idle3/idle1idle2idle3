function store() {
    document.cookie = 'hostcell='+hostcell;
    document.cookie = 'substanzen='+substanzen;
    document.cookie = 'bausteine='+bausteine;
    document.cookie = 'instruct='+instruct;
    document.cookie = 'rna='+rna;
    document.cookie = 'dna='+dna;
    document.cookie = 'smultp='+smultp;
    document.cookie = 'empmultcold='+empmultcold;
    document.cookie = 'empmultzcold='+empmultzcold;
    document.cookie = 'mmultp='+mmultp;
    document.cookie = 'mmultpt='+mmultpt;
    document.cookie = 'upgrdm='+upgrdm;
    document.cookie = 'upgrdme='+upgrdme;
    document.cookie = 'sRNAnumb='+sRNAnumb;
    document.cookie = 'aRNAnumb='+aRNAnumb;
    document.cookie = 'coldnumb='+coldnumb;
    document.cookie = 'zcoldnumb='+zcoldnumb;
  }
  
  function restore() {
    console.log(document.cookie);
    if ( document.cookie ) {
      var a = document.cookie.split(/;\s*/);
      for (var i = 0; i < a.length; i++) {
          var b = a[i].split(/=/);
          console.log(b);
          if (b[0] == "hostcell") {
            hostcell = parseInt(b[1]);
          }
          if (b[0] == "rna") {
            rna = parseInt(b[1]);
          }
          if (b[0] == "substanzen") {
            substanzen = parseInt(b[1]);
          }
          if (b[0] == "instruct") {
            instruct = parseInt(b[1]);
          }
          if (b[0] == "bausteine") {
            bausteine = parseInt(b[1]);
          }
          if (b[0] == "dna") {
            dna = parseInt(b[1]);
          }
          if (b[0] == "smultp") {
            smultp = parseInt(b[1]);
          }
          if (b[0] == "empmultcold") {
            empmultcold = parseInt(b[1]);
          }
          if (b[0] == "empmultzcold") {
            empmultzcold = parseInt(b[1]);
          }
          if (b[0] == "mmultp") {
            mmultp = parseInt(b[1]);
          }
          if (b[0] == "mmultpt") {
            mmultpt = parseInt(b[1]);
          }
          if (b[0] == "upgrdm") {
            upgrdm = parseInt(b[1]);
          }
          if (b[0] == "upgrdme") {
            upgrdme = parseInt(b[1]);
          }
          if (b[0] == "sRNAnumb") {
            sRNAnumb = parseInt(b[1]);
          }
          if (b[0] == "aRNAnumb") {
            aRNAnumb = parseInt(b[1]);
          }
          if (b[0] == "coldnumb") {
            coldnumb = parseInt(b[1]);
          }
          if (b[0] == "zcoldnumb") {
            zcoldnumb = parseInt(b[1]);
          }
      }
    }
    return true
  }