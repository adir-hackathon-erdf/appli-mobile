  var lieux = [];
  var pdls = [];
  var infoPdls = [];

  var nom1 = document.getElementById('nom-pdl1');
  var pdl1 = document.getElementById('pdl-1');
  var nom2 = document.getElementById('nom-pdl2');
  var pdl2 = document.getElementById('pdl-2');
  var nom3 = document.getElementById('nom-pdl3');
  var pdl3 = document.getElementById('pdl-3');
  var nom4 = document.getElementById('nom-pdl4');
  var pdl4 = document.getElementById('pdl-4');

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

    for (i=0; i<pdls.length; i+=2)
    {
      j = i + 1;

      var nom_pdl = 'nom_pdl'+i.toString();
      var num_pdl = 'num_pdl'+j.toString();

      localStorage.setItem(nom_pdl, pdls[i].value);
      localStorage.setItem(num_pdl, pdls[j].value);

      infoPdls.push(localStorage.getItem(nom_pdl));
      infoPdls.push(localStorage.getItem(num_pdl));
    
    }

  }
  
  if (bouton != null)
  {
    bouton.addEventListener('click', stockagePdls, false);  
    localStorage.clear();
  }
  else
  {
    console.log('Lieu 1 : '+localStorage.nom_pdl1);
    console.log('Pdl 1 : '+localStorage.num_pdl1);
    console.log('Lieu 2 : '+localStorage.nom_pdl2);
    console.log('Pdl 2 : '+localStorage.num_pdl2);
    console.log('Lieu 3 : '+localStorage.nom_pdl3);
    console.log('Pdl 3 : '+localStorage.num_pdl3);
    console.log('Lieu 4 : '+localStorage.nom_pdl4);
    console.log('Pdl 4 : '+localStorage.num_pdl4);
  }