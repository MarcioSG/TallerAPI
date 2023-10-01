function getRandomCharacter() {
    var apiUrl = 'https://thronesapi.com/api/v2/Characters';

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (characters) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            var randomCharacter = characters[randomIndex];
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





