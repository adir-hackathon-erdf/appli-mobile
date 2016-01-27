  var pdls = [];

  var nom1 = document.getElementById('nom-pdl1');
  var pdl1 = document.getElementById('pdl-1');
  var nom2 = document.getElementById('nom-pdl2');
  var pdl2 = document.getElementById('pdl-2');
  var nom3 = document.getElementById('nom-pdl3');
  var pdl3 = document.getElementById('pdl-3');
  var nom4 = document.getElementById('nom-pdl4');
  var pdl4 = document.getElementById('pdl-4');

  var lieu1 = document.getElementById('lieu1');
  var nb1 = document.getElementById('nb1');
  var lieu2 = document.getElementById('lieu2');
  var nb2 = document.getElementById('nb2');
  var lieu3 = document.getElementById('lieu3');
  var nb3 = document.getElementById('nb3');
  var lieu4 = document.getElementById('lieu4');
  var nb4 = document.getElementById('nb4');

  pdls.push(nom1);
  pdls.push(pdl1);
  pdls.push(nom2);
  pdls.push(pdl2);
  pdls.push(nom3);
  pdls.push(pdl3);
  pdls.push(nom4);
  pdls.push(pdl4);

  var bouton=document.getElementById('bouton');

  function stockagePdls()
  {
    var a = 1;
    for (i=0; i<pdls.length; i+=2)
    {
      var nom_pdl = 'nom_pdl'+a.toString();
      localStorage.setItem(nom_pdl, pdls[i].value);
      a++;
    }

    var a = 1;
    for (i=1; i<pdls.length; i+=2)
    {
      var num_pdl = 'num_pdl'+a.toString();
      localStorage.setItem(num_pdl, pdls[i].value);
      a++;
    }
    document.location.href="index.html";
  }
  
  if (bouton != null)
  {
    bouton.addEventListener('click', stockagePdls, false);  
  }
  else
  { 
    lieu1.innerHTML = "Lieu : " + localStorage.nom_pdl1;
    nb1.innerHTML = "PDL : " + localStorage.num_pdl1;
    lieu2.innerHTML = "Lieu : " + localStorage.nom_pdl2;
    nb2.innerHTML = "PDL : " + localStorage.num_pdl2;
    lieu3.innerHTML = "Lieu : " + localStorage.nom_pdl3;
    nb3.innerHTML = "PDL : " + localStorage.num_pdl3;
    lieu4.innerHTML = "Lieu : " + localStorage.nom_pdl4;
    nb4.innerHTML = "PDL : " + localStorage.num_pdl4;
  }
  
