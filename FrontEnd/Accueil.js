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

    Figure.dataset.category = work.categoryId;
  });
}

getWorks();

async function getCategories() {
  const res = await fetch("http://localhost:5678/api/categories");
  const CategoriesData = await res.json();

  const Categories = document.getElementById("categories");

  CategoriesData.forEach(category => {
    const Button = document.createElement("button");
    Button.textContent = category.name;
    Button.classList.add("btn-category");
    Button.setAttribute("data-category", category.id);
    Button.addEventListener("click", () => {
      const Thiscategory = Button.dataset.category;
      filter(Thiscategory);
    });

    Categories.appendChild(Button);
  });
}

const DisplayAll = document.getElementById("Tous");
DisplayAll.addEventListener("click", () =>{
  const Thiscategory = DisplayAll.dataset.category;
  filter(Thiscategory);
});

getCategories();

function filter(category) {
  const figures = document.querySelectorAll("#gallery figure");

  figures.forEach(figure => {
    if (category === "0" || figure.dataset.category === category) {
      figure.style.display = "block";
    } else {
      figure.style.display = "none";
    }
  });
}