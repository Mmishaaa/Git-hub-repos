const gitHub = require("./github.js");

const username = process.argv[2];

gitHub.getRepos(username, (err, repos) => {

  if(err) return console.error(err.message);

  repos.forEach((repo) => console.log(repo.name));
});

