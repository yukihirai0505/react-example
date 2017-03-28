import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export {getRepos, getUserData};

function getRepos(github_username) {
  const url = `${BASE_URL}/users/${github_username}/repos?per_page=250`;
  return axios.get(url).then(response => response.data);
}

function getUserData(github_username) {
  return axios.all([
    axios.get(`${BASE_URL}/users/${github_username}`),
    axios.get(`${BASE_URL}/users/${github_username}/orgs`),
  ])
  .then(([user, orgs]) => ({
    user: user.data,
    orgs: orgs.data,
  }));
}
