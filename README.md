1. Create a new folder for your project and go into it with `cd <folder name>`
1. Make it a git repository with `git init`
1. Copy .github, .dockerignore, .gitignore to this new folder.
1. Create a new NodeJS project with `npm init`
1. Edit `package.json` to add a start script, such as `"start": "node server.js"`
1. Install Express.js with `npm i express`
1. Copy the example server from `server.js` over to this folder
1. Install flyctl with `iwr https://fly.io/install.ps1 -useb | iex`
1. Create a fly account with `flyctl auth signup`
1. > Sign up with GitHub
1. > Authorize Fly.io
1. Input your credit card details, needed even if you dont use more than the free tier.
1. You should see `successfully logged in as EMAIL` in the terminal
1. Run `flyctl launch`
1. Enter a name for your app, choose a region. Choose no to a Postgresql database and to deploy now
1. Create a repository on GitHub
1. Enable GitHub actions in the Actions tab
1. Go to Settings>Secrets>Actions and create a new secret
1. Name the secret FLY_API_TOKEN and run `flyctl auth token` and paste the result as the value
1. Follow the `…or push an existing repository from the command line` steps
