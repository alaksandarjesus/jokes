
const display$ = document.getElementById("display");
const title$ = document.getElementById("title");
const another$ = document.getElementById("another");

const domains = ['chucknorris', 'jokeapi', 'jokedeno'];
getRandomJoke();

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomJoke() {
    another$.style.display = 'none';
    title$.innerText = '';
    display$.innerHTML = '';

    const index = randomInteger(0, (domains.length) - 1);
    const domain = domains[index];

    if (domain == 'chucknorris') {
        getChucknorrisJokes();
    }
    if (domain == 'jokeapi') {
        getJokeApi();
    }
    if (domain == 'jokedeno') {
        getJokeDenoApi();
    }
}

function getChucknorrisJokes() {
    const url = 'https://api.chucknorris.io/jokes/random';
    fetch(url).then(
        (res) => res.json()
    ).then(res => {
        let html$ = '';
        html$ += '<div class="joke">' + res.value + '</div>';
        display$.innerHTML = html$
        another$.style.display = 'block';
        title$.innerText = 'Chuck Norris Jokes';


    })
}

function getJokeApi() {
    const url = 'https://v2.jokeapi.dev/joke/any';
    fetch(url).then(
        (res) => res.json()
    ).then(res => {
        let text = res.setup || res.joke;
        if (res.type === 'twopart') {
            text += '<br>';
            text += res.delivery;
        }
        let html$ = '';
        html$ += '<div class="joke">' + text + '</div>';
        display$.innerHTML = html$
        another$.style.display = 'block';
        title$.innerText = 'Joke API';


    })
}

function getJokeDenoApi() {
    const url = 'https://joke.deno.dev/';
    fetch(url).then(
        (res) => res.json()
    ).then(res => {
        let text = res.setup;
        text += '<br>';
        text += res.punchline;
        display$.innerHTML = text;
        another$.style.display = 'block';
        title$.innerText = 'Joke Deno';

    })
}