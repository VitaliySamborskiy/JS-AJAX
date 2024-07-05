const click = document.querySelector(".button-click");
const container = document.querySelector(".container");
const clickTwo = document.querySelector(".button-click-2")

function loadPost (callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        if (res.ok) {
           return res.json();
        }
        throw new  Error('Помилка з\'єднання:' + res.statusText);
    })
    .then(result => {
        callback(result)
    })
    .catch(err => {
        console.error('Fetch error',err);
        alert('помилка запиту')
    })
}

click.addEventListener('click', (el) => {
    loadPost(result => {
        const fragment = document.createDocumentFragment();
        result.forEach(post => {
            const card = document.createElement("div");
            card.classList.add("card");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const titleCard = document.createElement("h4");
            titleCard.classList.add("card-title");
            titleCard.textContent = post.title;
            const paragraphCard = document.createElement("p");
            paragraphCard.classList.add("card-text");
            paragraphCard.textContent = post.body;
            cardBody.appendChild(titleCard);
            cardBody.appendChild(paragraphCard);
            card.appendChild(cardBody);
            fragment.appendChild(card);
        });
        container.appendChild(fragment);
    });
});

async function loadPhoto (callback) {
  let url = await  fetch('https://jsonplaceholder.typicode.com/photos');
  if (url.ok) {
      let result = await  url.json();
      callback(result);
  } else {
      throw new Error('Помилка з\'єднання:' + url.statusText);
  }
}

clickTwo.addEventListener('click', (el) => {
   loadPhoto( result => {
       const fragment = document.createDocumentFragment();

       result.forEach(photo => {
           const card = document.createElement("div");
           card.classList.add("card");
           const cardBody = document.createElement("div");
           cardBody.classList.add("card-body");
           cardBody.style.display = "flex";
           const titleCard = document.createElement("h4");
           titleCard.classList.add("card-title");
           titleCard.textContent = photo.title;
           let img = document.createElement("img");
           img.src = photo.url;
           // let imgTwo = document.createElement("img");
           // imgTwo.src = photo.thumbnailUrl;

           cardBody.appendChild(img);
           // cardBody.appendChild(imgTwo);
           cardBody.appendChild(titleCard);
           card.appendChild(cardBody);
           fragment.appendChild(card);
       })
       container.appendChild(fragment);
   })
})