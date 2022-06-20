const { Octokit } = require("@octokit/core");
require('dotenv').config();

const OWNER = process.env.OWNER;
const TOKEN = process.env.TOKEN
const repoArr = require('./delete.json')
const octokit = new Octokit({
    auth: TOKEN
});

(async () => {
    const funcs = []
    repoArr.forEach(item => {
        funcs.push(
            octokit.request('DELETE /repos/{owner}/{repo}', {
                owner: OWNER,
                repo: item
            })
        )
    })

    await Promise.all(funcs)
})()
