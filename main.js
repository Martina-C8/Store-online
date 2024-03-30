function cambiaTitolo(nuovoTesto) {
    var titolo = document.getElementById ("titolo") 
    titolo.innerHTML = nuovoTesto 
}

function cambiaColoreSfondo () {
    var colore = '#' + Math.floor(Math.random()*16777215).toString(16); 
    document.body.style.backgroundColor = colore;
}

function cambiaIndirizzo() {
    var elementoIndirizzo = document.getElementById("indirizzo");
    elementoIndirizzo.textContent = "Via dei dogali, 34 - Torino";
  }

  function aggiungiClasseAmazon() {
    const linksAmazon = document.querySelectorAll('a[href*="amazon.it"]');
        linksAmazon.forEach(link => {
      link.classList.add('amazon-link');
    });
  }
  
  function toggleVisibilitaImmagini() {
        var immagini = document.querySelectorAll('.card img');
        immagini.forEach(function(img) {
          img.classList.toggle('hidden');
        }); 
    }

    function cambiaColorePrezzo() {
        const hue = Math.floor(Math.random() * 361);
            const prezzi = document.querySelectorAll('.card p[id^="prezzo"]');
            prezzi.forEach((prezzo) => {
            prezzo.style.color = `hsl(${hue}, 100%, 50%)`;
        });
    }
    