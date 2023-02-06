/**
 * dataFactory - factory function
 */
const dataFactory = () => {
  
  /**
   * initRecipes - initialise les données de la recette dans le tableau arrayRecipes
   * @param  {Int} id id de la recette
   * @param  {String} name nom de la recette
   * @param  {Int} servings nombre de personne qui peuvent être servies
   * @param  {Array} ingredients ingrédients de la recette
   * @param  {Int} time temps de préparation
   * @param  {String} description description de la recette
   * @param  {String} appliance appareil utilisé
   * @param  {Array} ustensils ustensile utilisé
   */
  const initRecipes = (
    id,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils
  ) => {
    arrayRecipes.push({
      id,
      name,
      servings,
      ingredients,
      time,
      description,
      appliance,
      ustensils,
    });
  };

  /**
   * initIngredient - initialise les ingrédients de la recette
   * @param  {Array} ingredient ingrédients de la recette
   */
  const initIngredient = (ingredient) => {
    arrayIngredients.push(ingredient);
  };

  /**
   * initTagIngredient - initialise le tag ingrédient de la recette dans le tableau arrayTagIngredients
   * @param  {String} tagIngredient tag ingrédient de la recette
   */
  const initTagIngredient = (tagIngredient) => {
    arrayTagIngredients.push(tagIngredient);
  };

  /**
   * initAppliance - initialise l'appareil de la recette
   * @param  {String} appareil appareil de la recette
   */
  const initAppliance = (appareil) => {
    arrayAppliances.push(appareil);
  };

  /**
   * initTagAppliance - initialise le tag appareil de la recette dans le tableau arrayTagAppliances
   * @param  {String} tagAppliance tag appareil de la recette
   */
  const initTagAppliance = (tagAppliance) => {
    arrayTagAppliances.push(tagAppliance);
  };

  /**
   * initUstensil - initialise les ustensils de la recette
   * @param  {Array} ustensil ustensils de la recette
   */
  const initUstensil = (ustensil) => {
    arrayUstensils.push(ustensil);
  };

  /**
   * initTagUstensil - initialise le tag ustensil de la recette dans le tableau arrayTagUstensils
   * @param  {String} tagUstensil tag ustensil de la recette
   */
  const initTagUstensil = (tagUstensil) => {
    arrayTagUstensils.push(tagUstensil);
  };

  /**
   * setRecipes - entre les recettes filtreés dans le tableau arrayRecipes
   * @param  {Array} dataRecipes tableau contenant les recettes filtrées
   * @param  {Array} dataRecipes tableau contenant les recettes filtrées
   * @param  {Array} dataRecipes tableau contenant les recettes filtrées
   */
  const setRecipes = (dataRecipes) => {
    arrayRecipes = dataRecipes;
  };

  /**
   * setOrigineRecipes - entre les recettes dans le tableau arrayOrigineRecipes
   * @param  {Array} dataRecipes tableau contenant les recettes
   * @param  {Array} dataRecipes tableau contenant les recettes
   * @param  {Array} dataRecipes tableau contenant les recettes
   */
  const setOrigineRecipes = (dataRecipes) => {
    arrayOrigineRecipes = dataRecipes;
  };

  /**
   * setIngredient - entre les ingrédients filtreés dans le tableau arrayIngrédients
   * @param  {Array} dataIngredients tableau contenant les ingrédients filtrées
   * @param  {Array} dataIngredients tableau contenant les ingrédients filtrées
   * @param  {Array} dataIngredients tableau contenant les ingrédients filtrées
   */
  const setIngredient = (dataIngredients) => {
    arrayIngredients = dataIngredients;
  };

  /**
   * setTagIngredient - entre les tags ingrédients dans le tableau arrayTagIngrédients
   * @param  {Array} dataTagIngredients tableau contenant les tags ingrédients
   * @param  {Array} dataTagIngredients tableau contenant les tags ingrédients
   * @param  {Array} dataTagIngredients tableau contenant les tags ingrédients
   */
  const setTagIngredient = (dataTagIngredients) => {
    arrayTagIngredients = dataTagIngredients;
  };

  /**
   * setAppliance - entre les appareils filtreés dans le tableau arrayAppliances
   * @param  {Array} dataAppliances tableau contenant les appareils filtrées
   * @param  {Array} dataAppliances tableau contenant les appareils filtrées
   * @param  {Array} dataAppliances tableau contenant les appareils filtrées
   */
  const setAppliance = (dataAppliances) => {
    arrayAppliances = dataAppliances;
  };

  /**
   * setTagAppliance - entre les tags appareils dans le tableau arrayTagAppliances
   * @param  {Array} dataTagAppliances tableau contenant les tags appareils
   * @param  {Array} dataTagAppliances tableau contenant les tags appareils
   * @param  {Array} dataTagAppliances tableau contenant les tags appareils
   */
  const setTagAppliance = (dataTagAppliances) => {
    arrayTagAppliances = dataTagAppliances;
  };

  /**
   * setUstensil - entre les ustensils filtreés dans le tableau arrayUstensils
   * @param  {Array} dataUstensils tableau contenant les ustensils filtrées
   * @param  {Array} dataUstensils tableau contenant les ustensils filtrées
   * @param  {Array} dataUstensils tableau contenant les ustensils filtrées
   */
  const setUstensil = (dataUstensils) => {
    arrayUstensils = dataUstensils;
  };

  /**
   * setTagUstensil - entre les tags ustensils dans le tableau arrayTagUstensils
   * @param  {Array} dataTagUstensils tableau contenant les tags ustensils
   * @param  {Array} dataTagUstensils tableau contenant les tags ustensils
   * @param  {Array} dataTagUstensils tableau contenant les tags ustensils
   */
  const setTagUstensil = (dataTagUstensils) => {
    arrayTagUstensils = dataTagUstensils;
  };

  /**
   * getRecipes - retourne le tableau arrayRecipes
   * @return  {Array} arrayRecipes contenant les recettes
   * @return  {Array} arrayRecipes contenant les recettes
   * @return  {Array} arrayRecipes contenant les recettes
   */
  const getRecipes = () => {
    return arrayRecipes;
  };

  /**
   * getOrigineRecipes - retourne le tableau arrayOrigineRecipes
   * @return  {Array} arrayOrigineRecipes contenant les recettes
   * @return  {Array} arrayOrigineRecipes contenant les recettes
   * @return  {Array} arrayOrigineRecipes contenant les recettes
   */
  const getOrigineRecipes = () => {
    return arrayOrigineRecipes;
  };

  /**
   * getIngredients - retourne le tableau arrayIngredients
   * @return  {Array} arrayIngredients contenant les ingrédients des recettes
   * @return  {Array} arrayIngredients contenant les ingrédients des recettes
   * @return  {Array} arrayIngredients contenant les ingrédients des recettes
   */
  const getIngredients = () => {
    return arrayIngredients;
  };

  /**
   * getTagIngredients - retourne le tableau arrayTagIngredients
   * @return  {Array} arrayTagIngredients contenant les tags ingrédients des recettes ajoutées
   * @return  {Array} arrayTagIngredients contenant les tags ingrédients des recettes ajoutées
   * @return  {Array} arrayTagIngredients contenant les tags ingrédients des recettes ajoutées
   */
  const getTagIngredients = () => {
    return arrayTagIngredients;
  };

  /**
   * getAppliances - retourne le tableau arrayAppliances
   * @return  {Array} arrayAppliances contenant les appareils des recettes
   * @return  {Array} arrayAppliances contenant les appareils des recettes
   * @return  {Array} arrayAppliances contenant les appareils des recettes
   */
  const getAppliances = () => {
    return arrayAppliances;
  };

  /**
   * getTagAppliances - retourne le tableau arrayTagAppliances
   * @return  {Array} arrayTagAppliances contenant les tags appareils des recettes ajoutées
   * @return  {Array} arrayTagAppliances contenant les tags appareils des recettes ajoutées
   * @return  {Array} arrayTagAppliances contenant les tags appareils des recettes ajoutées
   */
  const getTagAppliances = () => {
    return arrayTagAppliances;
  };

  /**
   * getUstensils - retourne le tableau arrayUstensils
   * @return  {Array} arrayUstensils contenant les ustensils des recettes
   * @return  {Array} arrayUstensils contenant les ustensils des recettes
   * @return  {Array} arrayUstensils contenant les ustensils des recettes
   */
  const getUstensils = () => {
    return arrayUstensils;
  };

  /**
   * getTagUstensils - retourne le tableau arrayTagUstensils
   * @return  {Array} arrayTagUstensils contenant les tags ustensils des recettes ajoutées
   * @return  {Array} arrayTagUstensils contenant les tags ustensils des recettes ajoutées
   * @return  {Array} arrayTagUstensils contenant les tags ustensils des recettes ajoutées
   */
  const getTagUstensils = () => {
    return arrayTagUstensils;
  };

  /**
   * searchRecipes - filtre le tableau arrayRecipes en function de la valeur search passée
   * @param  {String} search valeur passée dans la barre de recherche
   * @returns {Array} renvoie le tableau resultSearch contenant les recettes correspondant à la recherche
   */
  const searchRecipes = (search) => {
    let resultSearch = [];
    for (let i = 0; i < arrayRecipes.length; i++) {
        if (arrayRecipes[i].name.toLowerCase().includes(search) ||
            arrayRecipes[i].description.toLowerCase().includes(search)) {
            resultSearch.push(arrayRecipes[i]);
        }else {
          for (let y = 0; y < arrayRecipes[i].ingredients.length; y++) {
            if (arrayRecipes[i].ingredients[y].ingredient.toLowerCase().includes(search)) {
                resultSearch.push(arrayRecipes[i]);
            }
          }
        }
    }
    return resultSearch = Array.from(new Set(resultSearch));
};

  /**
   * searchIngredient - filtre le tableau arrayIngredients en function de la valeur search passée
   * @param  {String} search valeur passée dans la barre de recherche
   * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
   */
  const searchIngredient = (search) => {
    let resultSearch = [];
    for (let i = 0; i < arrayIngredients.length; i++) {
      if (arrayIngredients[i].toLowerCase().includes(search))
        resultSearch.push(arrayIngredients[i]);
    }
    return resultSearch;
  };

  /**
   * filtreRecipeIngredient - filtre le tableau arrayRecipes en function des valeurs dans le tableau arrayTagIngredients
   * @param  {Array} array tableau contenant les recettes a filtrer
   * @param  {String} tagIngredient valeur tag ingrédient
   * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
   */
  const filtreRecipeIngredient = (array, tagIngredient) => {
    let resultSearch = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].ingredients.length; j++) {
        if (
          array[i].ingredients[j].ingredient
            .toLowerCase()
            .includes(tagIngredient)
        )
          resultSearch.push(array[i]);
      }
    }
    return resultSearch;
  };

  /**
   * searchAppliance - filtre le tableau arrayAppliances en function de la valeur search passée
   * @param  {String} search valeur passée dans la barre de recherche
   * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
   */
  const searchAppliance = (search) => {
    let resultSearch = [];
    for (let i = 0; i < arrayAppliances.length; i++) {
      if (arrayAppliances[i].toLowerCase().includes(search))
        resultSearch.push(arrayAppliances[i]);
    }
    return resultSearch;
  };

  /**
   * filtreRecipeAppliance - filtre le tableau arrayAppliances en function des valeurs dans le tableau arrayTagAppliances
   * @param  {Array} array tableau contenant les recettes a filtrer
   * @param  {String} tagAppliance valeur tag appareil
   * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
   */
  const filtreRecipeAppliance = (array, tagAppliance) => {
    let resultSearch = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].appliance.toLowerCase().includes(tagAppliance))
        resultSearch.push(array[i]);
    }
    return resultSearch;
  };

  /**
   * searchUstensil - filtre le tableau arrayUstensils en function de la valeur search passée
   * @param  {String} search valeur passée dans la barre de recherche
   * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
   */
  const searchUstensil = (search) => {
    let resultSearch = [];
    for (let i = 0; i < arrayUstensils.length; i++) {
      if (arrayUstensils[i].toLowerCase().includes(search))
        resultSearch.push(arrayUstensils[i]);
    }
    return resultSearch;
  };

  /**
   * filtreRecipeUstensil - filtre le tableau arrayUstensils en function des valeurs dans le tableau arrayTagUstensils
   * @param  {Array} array tableau contenant les ustensils a filtrer
   * @param  {String} tagIngredient valeur tag ustensil
   * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
   */
  const filtreRecipeUstensil = (array, tagUstensil) => {
    let resultSearch = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].ustensils.length; j++) {
        if (array[i].ustensils[j].toLowerCase().includes(tagUstensil))
          resultSearch.push(array[i]);
      }
    }
    return resultSearch;
  };

  return {
    initRecipes,
    initIngredient,
    initTagIngredient,
    initAppliance,
    initTagAppliance,
    initUstensil,
    initTagUstensil,
    setRecipes,
    setOrigineRecipes,
    setIngredient,
    setTagIngredient,
    setAppliance,
    setTagAppliance,
    setUstensil,
    setTagUstensil,
    getRecipes,
    getOrigineRecipes,
    getIngredients,
    getTagIngredients,
    getAppliances,
    getTagAppliances,
    getUstensils,
    getTagUstensils,
    searchRecipes,
    searchIngredient,
    filtreRecipeIngredient,
    searchAppliance,
    filtreRecipeAppliance,
    searchUstensil,
    filtreRecipeUstensil,
  };
};

fetch("data.json")
  .then((response) => response.json())
  .then((data) => initDataPage(data));

const factory = dataFactory();
let arrayRecipes = [];
let arrayOrigineRecipes = [];
let arrayIngredients = [];
let arrayTagIngredients = [];
let arrayAppliances = [];
let arrayTagAppliances = [];
let arrayUstensils = [];
let arrayTagUstensils = [];
const section1 = document.querySelector(".search-section");
const section2 = document.querySelector(".recipes-section");
const divIngredient = document.querySelector("#ingredients");
const divAppliance = document.querySelector("#appliances");
const divUstensil = document.querySelector("#ustensils");
const idListIngredient = document.querySelector("#listIngredients");
const idListAppliance = document.querySelector("#listAppliances");
const idListUstensil = document.querySelector("#listUstensils");
const searchRecipes = document.querySelector("#search");
const arrayEvent = ["click", "keypress"];

/**
 * initDataPage - initialise la page
 * @param  {Array} data liste des recettes
 */
const initDataPage = (data) => {
  initDataRecipes(data);
  initHtmlRecipes();
  initListIngredients();
  initListAppliances();
  initListUstensils();
  handleDivList();
  handleSearchRecipes();
  handleSearchIngredient();
  handleSearchAppliance();
  handleSearchUstensil();
  filtreTagRecipe();
};

/**
 * initDataRecipes - envoie les données de la recette à la factory
 * @param  {Array} data liste des recettes
 */
const initDataRecipes = (data) => {
  data.forEach((recette) => {
    factory.initRecipes(
      recette.id,
      recette.name,
      recette.servings,
      recette.ingredients,
      recette.time,
      recette.description,
      recette.appliance,
      recette.ustensils
    );
  });
  factory.setOrigineRecipes(factory.getRecipes());
};

/**
 * initHtmlRecipes - stock les recettes dans la variable htmlRecipes
 * @param  {Array} data liste des recettes recherchées
 */
const initHtmlRecipes = (data = false) => {
  if (!data) data = factory.getRecipes();
  let htmlRecipes = "";
  for (let i = 0; i < data.length; i++) {
    let htmlRecipeIngredients = "";
    for (let j = 0; j < data[i].ingredients.length; j++) {
      let ingredientUnit;
      let ingredientQuantity;
      if (data[i].ingredients[j].quantity !== undefined)
        ingredientQuantity = data[i].ingredients[j].quantity;
      else ingredientQuantity = "0";
      if (data[i].ingredients[j].unit !== undefined)
        ingredientUnit = data[i].ingredients[j].unit;
      else ingredientUnit = "";
      htmlRecipeIngredients += `${data[i].ingredients[j].ingredient}: ${ingredientQuantity} ${ingredientUnit}<br>`;
    }
    htmlRecipes += `<article tabindex="0"><aside><h2 title="${data[i].name}">${data[i].name}</h2>
                    <p class="time"><i class="fa-regular fa-clock"></i> ${data[i].time} min</p>
                    <p class="ingrédients" title="${htmlRecipeIngredients}">${htmlRecipeIngredients}</p>
                    <p class="description" title="${data[i].description}">${data[i].description}</p></aside></article>`;
  }
  displayListRecipes(htmlRecipes);
};

/**
 * displayListRecipes - affiche la liste des recettes dans le html
 * @param  {String} htmlRecipes liste des recettes en html
 */
const displayListRecipes = (htmlRecipes) => {
  let icone = document.querySelector("header > a > div > img");
  if (htmlRecipes.length !== 0) section2.innerHTML = htmlRecipes;
  else
    section2.innerHTML = `<div id="searchFailed">
            <span>Aucune recette ne correspond à votre critère…
            <br>Vous pouvez chercher par exemple: «tarte aux pommes», «poisson», ...</span>
        </div>`;
  icone.style.marginLeft = "0em";
  icone.style.marginBottom = "0.5em";
  icone.style.transform = "rotate(0deg)  scale(1)";
};

/**
 * initListIngredients - envoie chaque ingrédient unique dans chaque recette à la factory
 * @param  {Array} recettes liste des recettes recherchées
 */
const initListIngredients = (recettes = false) => {
  if (!recettes) recettes = factory.getRecipes();
  factory.setIngredient([]);
  for (let i = 0; i < recettes.length; i++) {
    for (let j = 0; j < recettes[i].ingredients.length; j++) {
      let ingredient = recettes[i].ingredients[j].ingredient;
      ingredient =
        ingredient.charAt(0).toUpperCase() +
        ingredient.substring(1).toLowerCase();
      factory.initIngredient(ingredient);
    }
  }
  let listIngredients = factory.getIngredients();
  listIngredients = Array.from(new Set(listIngredients));
  factory.setIngredient(listIngredients);
  displayListFiltre(listIngredients, idListIngredient);
  addTagIngredient();
};

/**
 * initListAppliances - envoie chaque appareil unique dans chaque recette à la factory
 * @param  {Array} recettes liste des recettes recherchées
 */
const initListAppliances = (recettes = false) => {
  if (!recettes) recettes = factory.getRecipes();
  factory.setAppliance([]);
  for (let i = 0; i < recettes.length; i++) {
    factory.initAppliance(recettes[i].appliance);
  }
  let listAppliances = factory.getAppliances();
  listAppliances = Array.from(new Set(listAppliances));
  factory.setAppliance(listAppliances);
  displayListFiltre(listAppliances, idListAppliance);
  addTagAppliance();
};

/**
 * initListUstensils - envoie chaque ustensil unique dans chaque recette à la factory
 * @param  {Array} recettes liste des recettes recherchées
 */
const initListUstensils = (recettes = false) => {
  if (!recettes) recettes = factory.getRecipes();
  factory.setUstensil([]);
  for (let i = 0; i < recettes.length; i++) {
    for (let j = 0; j < recettes[i].ustensils.length; j++) {
      let ustensil = recettes[i].ustensils[j];
      ustensil =
        ustensil.charAt(0).toUpperCase() + ustensil.substring(1).toLowerCase();
      factory.initUstensil(ustensil);
    }
  }
  let listUstensils = factory.getUstensils();
  listUstensils = Array.from(new Set(listUstensils));
  factory.setUstensil(listUstensils);
  displayListFiltre(listUstensils, idListUstensil);
  addTagUstensil();
};

/**
 * displayListFiltre - affiche la liste reçue dans son élément id reçu
 * @param  {Array} arrayList liste d'ingrédients ou d'appareils ou d'ustensiles uniques
 * @param  {Array} idElement élément id dom html
 */
const displayListFiltre = (arrayList, idElement) => {
  let htmlListFiltre = "";
  arrayList.forEach((element) => {
    htmlListFiltre += `<span class="tag" tabindex="0">${element}</span>`;
  });

  idElement.innerHTML = htmlListFiltre;
};

/**
 * closeDivList - ferme l'element passé
 * @param  {Array} element élément html du dom
 */
const closeDivList = (element) => {
  divIngredient.querySelector("span").textContent = "Ingrédients";
  divAppliance.querySelector("span").textContent = "Appareils";
  divUstensil.querySelector("span").textContent = "Ustensiles";
  element.style.width = "140px";
  element.style.minWidth = "initial";
  element.style.height = "54px";
  console.log("clicked");
  element.querySelector(".fa-chevron-up").style.transform = "rotate(180deg)";
  element.querySelector("div").style.display = "none";
};

/**
 * handleDivList - ouvre le div list lorsque que l'élément est click ou keypress
 */
const handleDivList = () => {
  arrayEvent.forEach((event) => {
    [ingredients, appliances, ustensils].forEach((element) => {
      element.querySelector(".fa-chevron-up").addEventListener(event, () => {
        if (element.style.width === "140px") {
          // On ferme tous les divList
          for (let i = 0; i < 3; i++) {
            let divList = section1.querySelectorAll(".tagList")[i];
            divList.style.width = "140px";
            divList.style.minWidth = "initial";
            divList.style.height = "54px";
            divList.querySelector(".fa-chevron-up").style.transform =
              "rotate(180deg)";
            divList.querySelector("div").style.display = "none";
          }
          divIngredient.querySelector("span").textContent = "Ingrédients";
          divAppliance.querySelector("span").textContent = "Appareils";
          divUstensil.querySelector("span").textContent = "Ustensiles";

          element.style.width = "90%";
          element.style.minWidth = "240px";
          element.style.height = "250px";

          if (element === divIngredient) {
            element.querySelector(
              "span"
            ).innerHTML = `<input type="search" placeholder="Rechercher un ingrédient" aria-label="Rechercher un ingrédient" 
                name="searchIngredient" id="searchIngredient" class="searchInputList">`;
          } else if (element === divAppliance) {
            element.querySelector(
              "span"
            ).innerHTML = `<input type="search" placeholder="Rechercher un appareil" aria-label="Rechercher un appareil" 
                name="searchAppliance" id="searchAppliance" class="searchInputList">`;
          } else if (element === divUstensil) {
            element.querySelector(
              "span"
            ).innerHTML = `<input type="search" placeholder="Rechercher un ustensile" aria-label="Rechercher un ustensile" 
                name="searchUstensil" id="searchUstensil" class="searchInputList">`;
          }
          element.querySelector(".fa-chevron-up").style.transform =
            "rotate(0deg)";
          element.querySelector("div").style.display = "flex";
        } else {
          closeDivList(element);
        }
      });
    });
  });
};

/**
 * handleSearchRecipes - capture la valeur passée dans la barre de recherche et l'envoie à la factory
 */
const handleSearchRecipes = () => {
  searchRecipes.addEventListener("keyup", () => {
    if (searchRecipes.value.length >= 3) {
      const recettes = factory.searchRecipes(searchRecipes.value.toLowerCase());
      if (recettes.length !== 0) factory.setRecipes(recettes);
      initHtmlRecipes(recettes);
      initListIngredients(recettes);
      initListAppliances(recettes);
      initListUstensils(recettes);
    } else {
      filtreTagRecipe();
      initHtmlRecipes(factory.getRecipes());
      initListIngredients();
      initListAppliances();
      initListUstensils();
    }
  });
};

/**
 * handleSearchIngredient - capture la valeur passée dans la barre de recherche ingrédients et l'envoie à la factory
 */
const handleSearchIngredient = () => {
  const searchIngredient = document.querySelector(".spanIngredients");
  searchIngredient.addEventListener("keyup", () => {
    if (searchIngredient.querySelector("#searchIngredient").value.length >= 3) {
      const ingredient = factory.searchIngredient(
        searchIngredient.querySelector("#searchIngredient").value.toLowerCase()
      );
      displayListFiltre(ingredient, idListIngredient);
      addTagIngredient();
    } else {
      initListIngredients();
    }
  });
};

/**
 * addTagIngredient - capture la valeur du tag dans la liste ingrédients et l'envoie à la factory
 */
const addTagIngredient = () => {
  const arrayIngredients = factory.getIngredients();
  const divIngredients = document.querySelector("#ingredients");
  const listTagIngredient = document.querySelector("#tagIngredients");
  for (let i = 0; i < arrayIngredients.length; i++) {
    let tagIngredient = divIngredients.querySelectorAll(
      "#listIngredients > span.tag"
    )[i];
    arrayEvent.forEach((event) => {
      tagIngredient.addEventListener(event, () => {
        const arrayListTagIngredient = factory.getTagIngredients();
        if (
          arrayListTagIngredient.length === 0 ||
          arrayListTagIngredient.indexOf(
            tagIngredient.textContent.toLowerCase()
          ) === -1
        ) {
          if (listTagIngredient.textContent.length === 17) {
            listTagIngredient.innerHTML = `<p class="tag tagIngredient">${tagIngredient.textContent}
                                <i class="fa-regular fa-circle-xmark"></i></p>`;
          } else {
            listTagIngredient.innerHTML += `<p class="tag tagIngredient">${tagIngredient.textContent}
                            <i class="fa-regular fa-circle-xmark"></i></p>`;
          }
          factory.initTagIngredient(tagIngredient.textContent.toLowerCase());
          const recetteTagIngredient = factory.filtreRecipeIngredient(
            factory.getRecipes(),
            tagIngredient.textContent.toLowerCase()
          );
          factory.setRecipes(recetteTagIngredient);
          const recettes = factory.getRecipes();
          initListIngredients(recettes);
          initListAppliances(recettes);
          initListUstensils(recettes);
          initHtmlRecipes(recettes);
          spliceTagIngredient();
        }
      });
    });
  }
};

/**
 * spliceTagIngredient - capture la valeur du tag ingrédient supprimé et l'envoie à la factory
 */
const spliceTagIngredient = () => {
  let arrayListTagIngredient = factory.getTagIngredients();
  const listTagIngredient = document.querySelector("#tagIngredients");
  for (let i = 0; i < arrayListTagIngredient.length; i++) {
    let tagIngredient = listTagIngredient.querySelectorAll("p.tag")[i];
    arrayEvent.forEach((event) => {
      tagIngredient.querySelector("i").addEventListener(event, () => {
        const positionTag = arrayListTagIngredient.indexOf(
          tagIngredient.textContent.toLowerCase()
        );
        arrayListTagIngredient.splice(positionTag, 1);
        factory.setTagIngredient(arrayListTagIngredient);
        filtreTagRecipe();
        initHtmlRecipes();
        tagIngredient.remove();
      });
    });
  }
};

/**
 * handleSearchAppliance - capture la valeur passée dans la barre de recherche appareils et l'envoie à la factory
 */
const handleSearchAppliance = () => {
  const searchAppliance = document.querySelector(".spanAppliances");
  searchAppliance.addEventListener("keyup", () => {
    if (searchAppliance.querySelector("#searchAppliance").value.length >= 3) {
      const appareil = factory.searchAppliance(
        searchAppliance.querySelector("#searchAppliance").value.toLowerCase()
      );
      displayListFiltre(appareil, idListAppliance);
      addTagAppliance();
    } else {
      initListAppliances();
    }
  });
};

/**
 * addTagAppliance - capture la valeur du tag dans la liste appareils et l'envoie à la factory
 */
const addTagAppliance = () => {
  const arrayAppliances = factory.getAppliances();
  const divAppliances = document.querySelector("#appliances");
  const listTagAppliance = document.querySelector("#tagAppliances");
  for (let i = 0; i < arrayAppliances.length; i++) {
    let tagAppliance = divAppliances.querySelectorAll(
      "#listAppliances > span.tag"
    )[i];
    arrayEvent.forEach((event) => {
      tagAppliance.addEventListener(event, () => {
        const arrayListTagAppliance = factory.getTagAppliances();
        if (
          arrayListTagAppliance.length === 0 ||
          arrayListTagAppliance.indexOf(
            tagAppliance.textContent.toLowerCase()
          ) === -1
        ) {
          if (listTagAppliance.textContent.length === 15)
            listTagAppliance.innerHTML = `<p class="tag tagAppliance">${tagAppliance.textContent}
                                          <i class="fa-regular fa-circle-xmark"></i></p>`;
          else
            listTagAppliance.innerHTML += `<p class="tag tagAppliance">${tagAppliance.textContent}
                                          <i class="fa-regular fa-circle-xmark"></i></p>`;
          factory.initTagAppliance(tagAppliance.textContent.toLowerCase());
          const recetteTagAppliance = factory.filtreRecipeAppliance(
            factory.getRecipes(),
            tagAppliance.textContent.toLowerCase()
          );
          factory.setRecipes(recetteTagAppliance);
          const recettes = factory.getRecipes();
          initListIngredients(recettes);
          initListAppliances(recettes);
          initListUstensils(recettes);
          initHtmlRecipes(recettes);
          spliceTagAppliance();
        }
      });
    });
  }
};

/**
 * spliceTagAppliance - capture la valeur du tag appareil supprimé et l'envoie à la factory
 */
const spliceTagAppliance = () => {
  let arrayListTagAppliance = factory.getTagAppliances();
  const listTagAppliance = document.querySelector("#tagAppliances");
  for (let i = 0; i < arrayListTagAppliance.length; i++) {
    let tagAppliance = listTagAppliance.querySelectorAll("p.tag")[i];
    arrayEvent.forEach((event) => {
      tagAppliance.querySelector("i").addEventListener(event, () => {
        const positionTag = arrayListTagAppliance.indexOf(
          tagAppliance.textContent.toLowerCase()
        );
        arrayListTagAppliance.splice(positionTag, 1);
        factory.setTagAppliance(arrayListTagAppliance);
        filtreTagRecipe();
        initHtmlRecipes();
        tagAppliance.remove();
      });
    });
  }
};

/**
 * handleSearchUstensil - capture la valeur passée dans la barre de recherche ustensiles et l'envoie à la factory
 */
const handleSearchUstensil = () => {
  const searchUstensil = document.querySelector(".spanUstensiles");
  searchUstensil.addEventListener("keyup", () => {
    if (searchUstensil.querySelector("#searchUstensil").value.length >= 3) {
      const ustensil = factory.searchUstensil(
        searchUstensil.querySelector("#searchUstensil").value.toLowerCase()
      );
      displayListFiltre(ustensil, idListUstensil);
      addTagUstensil();
    } else {
      initListUstensils();
    }
  });
};

/**
 * addTagUstensil - capture la valeur du tag dans la liste ustensils et l'envoie à la factory
 */
const addTagUstensil = () => {
  const arrayUstensils = factory.getUstensils();
  const divUstensils = document.querySelector("#ustensils");
  const listTagUstensil = document.querySelector("#tagUstensils");
  for (let i = 0; i < arrayUstensils.length; i++) {
    let tagUstensil = divUstensils.querySelectorAll(
      "#listUstensils > span.tag"
    )[i];
    arrayEvent.forEach((event) => {
      tagUstensil.addEventListener(event, () => {
        const arrayListTagUstensil = factory.getTagUstensils();
        if (
          arrayListTagUstensil.length === 0 ||
          arrayListTagUstensil.indexOf(
            tagUstensil.textContent.toLowerCase()
          ) === -1
        ) {
          if (listTagUstensil.textContent.length === 16)
            listTagUstensil.innerHTML = `<p class="tag tagUstensil">${tagUstensil.textContent}
              <i class="fa-regular fa-circle-xmark"></i></p>`;
          else
            listTagUstensil.innerHTML += `<p class="tag tagUstensil">${tagUstensil.textContent}
              <i class="fa-regular fa-circle-xmark"></i></p>`;
          factory.initTagUstensil(tagUstensil.textContent.toLowerCase());
          const recetteTagUstensil = factory.filtreRecipeUstensil(
            factory.getRecipes(),
            tagUstensil.textContent.toLowerCase()
          );
          factory.setRecipes(recetteTagUstensil);
          const recettes = factory.getRecipes();
          initListIngredients(recettes);
          initListAppliances(recettes);
          initListUstensils(recettes);
          initHtmlRecipes(recettes);
          spliceTagUstensil();
        }
      });
    });
  }
};

/**
 * spliceTagUstensil - capture la valeur du tag ustensil supprimé et l'envoie à la factory
 */
const spliceTagUstensil = () => {
  let arrayListTagUstensil = factory.getTagUstensils();
  const listTagUstensil = document.querySelector("#tagUstensils");
  for (let i = 0; i < arrayListTagUstensil.length; i++) {
    let tagUstensil = listTagUstensil.querySelectorAll("p.tag")[i];
    arrayEvent.forEach((event) => {
      tagUstensil.querySelector("i").addEventListener(event, () => {
        const positionTag = arrayListTagUstensil.indexOf(
          tagUstensil.textContent.toLowerCase()
        );
        arrayListTagUstensil.splice(positionTag, 1);
        factory.setTagUstensil(arrayListTagUstensil);
        filtreTagRecipe();
        initHtmlRecipes();
        tagUstensil.remove();
      });
    });
  }
};

/**
 * filtreTagRecipe - refiltre chaque recherche avancée
 */
const filtreTagRecipe = () => {
  let arrayListTagIngredient = factory.getTagIngredients();
  let arrayListTagAppliance = factory.getTagAppliances();
  let arrayListTagUstensil = factory.getTagUstensils();
  let origineRecipe = factory.getOrigineRecipes();
  arrayListTagIngredient.forEach((tag) => {
    const recetteTagIngredient = factory.filtreRecipeIngredient(
      origineRecipe,
      tag
    );
    origineRecipe = recetteTagIngredient;
    factory.setRecipes(origineRecipe);
  });
  arrayListTagAppliance.forEach((tag) => {
    const recetteTagAppliance = factory.filtreRecipeAppliance(
      origineRecipe,
      tag
    );
    origineRecipe = recetteTagAppliance;
    factory.setRecipes(origineRecipe);
  });
  arrayListTagUstensil.forEach((tag) => {
    const recetteTagUstensil = factory.filtreRecipeUstensil(origineRecipe, tag);
    origineRecipe = recetteTagUstensil;
    factory.setRecipes(origineRecipe);
  });
  if (searchRecipes.value.length >= 3) {
    const recettesSearch = factory.searchRecipes(
      searchRecipes.value.toLowerCase()
    );
    if (recettesSearch.length !== 0) factory.setRecipes(recettesSearch);
  }
  if (
    arrayListTagIngredient.length === 0 &&
    arrayListTagAppliance.length === 0 &&
    arrayListTagUstensil.length === 0 &&
    searchRecipes.value.length <= 2
  )
    factory.setRecipes(origineRecipe);
  initListIngredients();
  initListAppliances();
  initListUstensils();
};
