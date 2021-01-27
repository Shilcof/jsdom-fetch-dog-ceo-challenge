console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

function fetchDogs() {
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => addImages(json.message));
}

function addImages(images) {
    const imageContainer = document.querySelector('#dog-image-container');
    images.forEach(image => {
        const img = document.createElement('img');
        img.source = image;
        imageContainer.append(img)
    })
}

function fetchBreeds() {
    return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breeds = Object.keys(json.message);
            addBreeds(breeds);
            addBreedFilterListener();
        });
}

function addBreeds(breeds) {
    const breedsList = document.querySelector('#dog-breeds');
    breeds.forEach(breedInfo => {
        const breed = document.createElement('li');
        breed.innerText = breedInfo;
        breedsList.append(breed);
        breed.addEventListener('click', changeLiColour);
    })
}

function changeLiColour(event) {
    event.target.style.color = "blue";
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchBreeds();
})

function addBreedFilterListener() {
    const dropDown = document.querySelector('#breed-dropdown');
    dropDown.addEventListener('change', function (event) {
        filterDogsBy(event.target.value)
    })

}

function filterDogsBy(letter) {
    updateBreeds(breeds.filter(breed => breed.startsWith(letter)))
}

function updateBreeds(breeds) {
    let ul = document.querySelector('#dog-breeds');
    const breedsList = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breedInfo => {
        const breed = document.createElement('li');
        breed.innerText = breedInfo;
        breedsList.append(breed);
        breed.addEventListener('click', changeLiColour);
    })
}

function removeChildren(el) {
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
}