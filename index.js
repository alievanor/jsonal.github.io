async function populate() {

    const requestURL = '../ProyectoJson/SuperHero.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroesText = await response.text();

    const superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);

  }

  function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.nombreCuadrilla;
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `CiudadNatal: ${obj.CiudadNatal} // Formada_el: ${obj.Formada_el} // Base_Secreta: ${obj.Base_Secreta}`;
    header.appendChild(myPara);
  }

  function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.miembros;

    for (const hero of heroes) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');

      myH2.textContent = hero.Nombre;
      myPara1.textContent = `Identidad Secreta: ${hero.secretIdentity}`;
      myPara2.textContent = `Edad: ${hero.age}`;
      myPara3.textContent = 'Super poder:';

      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement('li');
        listItem.textContent = power;
        myList.appendChild(listItem);
      }

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);

      section.appendChild(myArticle);
    }
  }

  populate();
