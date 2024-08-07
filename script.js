const APIURL = "https://api.github.com/users/";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const getUser = async (username) => {
    const response = await fetch(`${APIURL}${username}`);
    const data = await response.json();
};

const getRepos = async(username) => {
    const response = await fetch(`${APIURL}${username}/repos?sort-created`);
};



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }

})