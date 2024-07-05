const click = document.querySelector('.button-click');
const container = document.getElementById("container");


function getPost(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        callback(response);
    });

    xhr.addEventListener('error', () => {
        console.log('error');
    });

    xhr.send();
}

click.addEventListener('click', () => {
    getPost(response => {
        const fragment = document.createDocumentFragment();

        response.forEach(post => {
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
