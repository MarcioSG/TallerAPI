function getRandomCharacter() {
    var apiUrl = 'https://thronesapi.com/api/v2/Characters';

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (characters) {
            var randomIndicator = Math.floor(Math.random() * characters.length); //aquí se genera un número aleatorio entre 0 y la cant. de elementos del array
            var randomCharacter = characters[randomIndicator]; //aquí, este número aleatorio resultará en la posición del personaje en el array characters de la API.
            var characterContainer = document.getElementById('character-container');
            characterContainer.innerHTML = `
          <h2>${randomCharacter.fullName}</h2>
          <p>Casa: ${randomCharacter.family}</p>
          <p>Título: ${randomCharacter.title}</p>
          <p> <img src="${randomCharacter.imageUrl}" alt="${randomCharacter.fullName}"></p>
        `;
        })
        .catch(function (error) {
            console.log('Error:', error);
        });
}





