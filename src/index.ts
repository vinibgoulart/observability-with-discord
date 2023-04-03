import { config } from "./config";
import axios from "axios";
import express from 'express'

const app = express()

app.get('/observability', async (req, res) => {
  await axios.post(config.DISCORD_CHANNEL_WEBHOOK, { content: 'Hello World' }, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  res.send('observability done successfully')
})

app.listen(config.API_PORT, () => {
  console.log(`Server listening on port ${config.API_PORT}`)
})