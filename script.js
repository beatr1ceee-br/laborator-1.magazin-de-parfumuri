const preturi = {
    30: { curent: "499,00 RON", vechi: "575,00 RON" },
    50: { curent: "699,00 RON", vechi: "765,00 RON" },
    100: { curent: "929,00 RON", vechi: "1025,00 RON" }
  };

  function actualizeazaPretul() {
    const volum = document.getElementById("volum").value;
    document.getElementById("pret-curent").textContent = preturi[volum].curent;
    document.getElementById("pret-vechi").textContent = preturi[volum].vechi;
  }

  function schimbaImagine(img) {
    const imaginePrincipala = document.getElementById("imagine-principala");
    imaginePrincipala.src = img.src;

    document.querySelectorAll('.thumbnails img').forEach(el => el.classList.remove("active"));
    img.classList.add("active");
  }

  function adaugaInCos() {
    alert("Produsul a fost adăugat în coș!");
  }