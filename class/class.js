const addButton = document.querySelector('.add-block');
const removeButton = document.querySelector('.remove-block');
const block = document.querySelector('.block-container');

let currentCounter = -1;
let loadPost;

async function loadRequest (counter) {
     let url = await fetch('https://jsonplaceholder.typicode.com/posts')
     if (url.ok) {
         let result = await url.json();
         return result[counter];
     } else {
         alert('помилка запиту');
         throw new Error('Помилка з\'єднання:' + url.statusText);
     }
}

async function requestAccumulator (...urls) {
    const url = urls.shift();

    if (url === undefined) {
        return;
    }
    let post = await loadRequest(url);
    await new Promise(resolve => {setTimeout(resolve, 1000)});
    await requestAccumulator(...urls);
    return post;
}

function counter (number) {
    if (number <= 100) {
        number++;
    } else {
        number = -1;
    }
    return number;
}

class LoadPost {
    constructor(post, block) {
        this.titlePost = post.title;
        this.textPost = post.body;
        this.block = block;
    }

    addPost () {
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const card = document.createElement('div');
        card.className = 'card mb-3 w-100';

        const text = document.createElement("p");
        text.className = 'card-text';
        text.textContent = this.textPost;

        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = this.titlePost;

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        card.appendChild(cardBody);
        this.block.appendChild(card);
    }

    removeAllPost () {
        const allPosts = this.block.querySelectorAll('.card');
        allPosts.forEach(post => post.remove());
    }
}

addButton.addEventListener('click',  async () => {
    currentCounter = counter(currentCounter);
    const result = await requestAccumulator(currentCounter);
    loadPost = new LoadPost(result, block);
    loadPost.addPost();
});

removeButton.addEventListener('click', () => {
    currentCounter = -1;
    loadPost.removeAllPost();
})
