<h1 align="center">
  🦅 App observability using Discord 🦅
</h1>
<p align="center">Observability is an extremely important practice so that you have an idea of what is happening in your app and receive updates from new interactions.</p>

See a **How to build** blog post in dev.to:

## How To Run
### Requirements
- Have a discord channel and your webhook link

#### Clone this repository, go into and install dependencies
```bash
git clone https://github.com/vinibgoulart/observability-with-discord
cd observability-with-discord
yarn
```

#### Create .env based on .env.example variables
```bash
DISCORD_CHANNEL_WEBHOOK=
```

#### Start the server
```bash
yarn start
```
Now just access `localhost:4000/observability` in your browser

Now, if you access this url `localhost:4000/observability` you will see it:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tb2kuguwurqoo1wtbxnt.png)

And if you check your discord channel it has something like this:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y7jepewbrzphm2j6f9xo.png)