const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
  const token = process.env.GITHUB_TOKEN;
  const octokit = github.getOctokit(token);
  
  const prNumber = core.getInput('pr_number');
  const repoName = core.getInput('repo_name');
  const [owner, repo] = repoName.split('/');

  await octokit.rest.repos.createDispatchEvent({
    owner,
    repo,
    event_type: 'ai-review',
    client_payload: {
      pr_number: parseInt(prNumber),
      repo_name: repoName
    }
  });

  console.log(`AI review triggered for PR #${prNumber} in ${repoName}`);
}

run();
