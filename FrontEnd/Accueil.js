// 1. Récupérer les données de l'API

// 2. Création des élements des projets

// 3. Afficher les projets


async function getWorks() {
  const res = await fetch("http://localhost:5678/api/works");
  const WorksData = await res.json();

  const Gallery = document.getElementById("gallery");

  WorksData.forEach(work => {
    const Figure = document.createElement("figure");
    const Image = document.createElement("img");
    const Caption = document.createElement("figcaption");

    Image.src = work.imageUrl;
    Caption.textContent = work.title;

    Gallery.appendChild(Figure);
    Figure.appendChild(Image);
    Figure.appendChild(Caption);
  });
}

getWorks();

async function getCategoriess() {
  const res = await fetch("http://localhost:5678/api/categories");
  const CategoriessData = await res.json();
}

getCategories();

