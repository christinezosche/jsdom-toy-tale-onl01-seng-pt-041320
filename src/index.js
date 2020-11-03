document.addEventListener('DOMContentLoaded', function() {

  fetch("http://localhost:3000/toys")
            .then(function(response) {
                return response.json();
            })
            .then(function(objects) {
              renderToys(objects);
            });

});

function renderToys(toys) {
  const collection = document.getElementById('toy-collection')
  toys.forEach(toy => {
    const newDiv = document.createElement('div')
    const name = document.createElement('h2')
    name.innerHTML = toy.name
    const image = document.createElement('img')
    image.innerHTML = toy.image
    image.setAttribute('class', 'toy-avatar')
    const likes = document.createElement('p')
    likes.innerHTML = ``${toy.likes} Likes"
    const button = document.createElement('button')
    button.innerHTML = ``Like <3"
    button.setAttribute('class', 'like-btn')
    newDiv.appendChild(name, image, likes, button)
    newDiv.setAttribute('class', 'card')
    collection.appendChild(newDiv)
  })
}

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
