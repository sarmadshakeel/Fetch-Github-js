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
    const data = await response.json();
};





const createUserCard = (user) => {
    const cardHTML = `
        <div class="card">
        <div>
            <img src="${user.avatar_url} alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.follwing} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>repo</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
        </div>
    `

    main.innerHTML = cardHTML;
};

const createErrorCard = (error) => {
    const cardHTML = `
        <div class="card">
            <h1>${error}</h1>
        </div>
    `
    main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
    const reposE1 = document.getElementById('repos');

    repos.slice(0, 5).forEach((repo) => {
        const reposE1 = document.createElement('a');
        
    });

};



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }

})