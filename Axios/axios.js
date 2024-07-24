const addPost = document.querySelector('.postData');
const loadData = document.querySelector('.loadData');
const allPost = document.querySelector('.allPost');
const notification = document.querySelector('.notification');
const form = document.forms.dataForm;

loadData.addEventListener('click', async () => {
    let render = await getPost();
    renderPost(render);
});

addPost.addEventListener('click', async () => {
    let data = getForm(form);
    if (data.text.trim() === '' || data.title.trim() === '' || data.userId.trim() === '') {
        renderNotification('дані не ведені', 'info');
        return;
    } else {
        await postData(data);
    }
})

async function getPost () {
     return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if(response.status === 200) {
                return response.data;
            }
        }).catch((err) => {
          alert(err.message);
    })
}

function getForm (form) {
    return {
        userId: form.elements.userId.value,
        title: form.elements.title.value,
        text: form.elements.text.value,
    }
}

async function postData (data) {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: data.userId,
        title: data.title,
        body: data.text
    }).then((response) => {
            renderNotification(`Ваші дані були успішно додані, користовач: ${response.data.userId}, заголовок: ${response.data.title}, текст посту: ${response.data.text}`,'success');
            console.log(response.data);
        }).catch((err) => {
            renderNotification(`ваші дані не були успішно надіслані: ${err.message}`, 'error');
            console.log(err.message);
    })
}

function renderNotification (text, textClass) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = text;
    p.className = textClass;
    div.className = 'notification-div';
    div.appendChild(p);
    notification.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 5000);
}

function renderPost (elements) {
    elements.forEach((element) => {
        let card = document.createElement('div');
        let body = document.createElement('div');
        let title = document.createElement('h3');
        let text = document.createElement('p');

        card.className = 'cards-container';
        body.className = 'card';
        title.className = 'card-title';
        title.textContent = element.title;
        text.textContent = element.body;
        text.className = 'card-text';

        body.appendChild(title);
        body.appendChild(text);
        card.appendChild(body);
        allPost.appendChild(card);
    })
}
