const express = require('express')
const qs = require('qs')
const axios = require('axios')
require('dotenv').config()
const app = express()
const port = 5000

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = process.env.API_KEY

// &appid=${apiKey}

app.get('/', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  let query = req.query
  query.appid = apiKey
  let queryString = qs.stringify(query)

  try {
    const weather = await axios(`${apiUrl}?${queryString}`)
    return res.status(200).send(weather.data)
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
