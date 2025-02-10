import express from 'express'
import { StatusCodes } from 'http-status-codes'

const app = express()

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' })
})

import { PORT } from './config/serverConfig.js'
app.listen(PORT, () => {
  console.log('Server is running on the port ' + PORT)
})
