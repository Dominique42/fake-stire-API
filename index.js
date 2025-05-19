fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
                data.forEach(element => {
                    document.getElementById("cardContainer").innerHTML += `
                     <div class="carte">
        <div class="article spaceBetween">
            <p class="color">${element.title}</p>
            <p class=" color p1" >${element.rating}</p>
        </div>
        <div class="article photo">
            <img  src ="${element.image}" alt="Pantalon">
        </div>
        <div>
            <p>${element.category}</p>
        </div>
        <div>
            <h4>${element.description}</h4>
            <div class="flex">
            <p class="p1">${element.price}</p>
            <p class="p1">Avis</p>
            </div>
        </div>
        <div class="click-event">
            <button id="btn-1">Valider</button>
        </div>
    </div>
                    `
                });


})