const APIURL = "https://api.github.com/users/";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const getUser = async (username) => {
    try {
        const response = await fetch(`${APIURL}${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const data = await response.json();
        createUserCard(data);
        getRepos(username);
    } catch (error) {
        createErrorCard(error.message);
    }
};

const getRepos = async (username) => {
    try {
        const response = await fetch(`${APIURL}${username}/repos?sort=created`);
        if (!response.ok) {
            throw new Error('Repositories not found');
        }
        const data = await response.json();
        addReposToCard(data);
    } catch (error) {
        createErrorCard(error.message);
    }
};

const createUserCard = (user) => {
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio || 'No bio available'}</p>
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
};

const createErrorCard = (error) => {
    const cardHTML = `
        <div class="card">
            <h1>${error}</h1>
        </div>
    `;
    main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
    const reposE1 = document.getElementById('repos');

    repos.slice(0, 5).forEach((repo) => {
        const repoE1 = document.createElement('a');
        repoE1.classList.add("repo");
        repoE1.href = repo.html_url;
        repoE1.target = "_blank"; // Changed to "_blank" for better practice
        repoE1.innerHTML = repo.name;

        reposE1.appendChild(repoE1);
    });
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value.trim(); // Trim whitespace

    if (user) {
        getUser(user);
        search.value = "";
    }
});
