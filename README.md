1. `iwr https://fly.io/install.ps1 -useb | iex`
2. flyctl auth signup
3. > Sign up with GitHub
4. > Authorize Fly.io
5. Input your credit card details, needed even if you dont use more than the free tier.
6. You should see `successfully logged in as EMAIL` in the terminal
7. Run `flyctl launch`
8. Enter a name for your app, choose a region. Choose no to a Postgresql database and to deploy now
9. Create a repository on GitHub
10. Follow the `…or push an existing repository from the command line` steps
