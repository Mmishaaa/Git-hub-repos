
function getRepos(username) {
  const option = {
    hostname: "api.github.com",
    path: `/users/${username}/repos`,
    headers: {
      "User-Agent": "github-app",
    },
  };

  https.get(option, (res) => {
    console.log(res.statusCode);
  })
}