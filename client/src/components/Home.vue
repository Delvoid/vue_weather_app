<template>
  <div class="home">
    <h1>Weather App</h1>
    <div class="enter-city">
      <input
        v-model="data.city"
        @keyup.enter="getWeather"
        type="text"
        placeholder="Enter City"
      />
    </div>
    <div v-if="data.weather" class="weather">
      <h1>{{ Math.round(data.weather.main.temp) }}&deg;</h1>
      <h2>{{ data.weather.weather[0].main }}</h2>
      <h3>{{ data.weather.weather[0].description }}</h3>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import axios from 'axios'
  export default {
    name: 'Home',
    setup() {
      let data = ref({
        city: '',
        weather: null,
      })

      const apiUrl = 'http://localhost:5000/'

      const getWeather = async () => {
        const res = await axios.get(
          `${apiUrl}?units=metric&q=${data.value.city}`
        )
        data.value.weather = res.data
      }
      return {
        data,
        getWeather,
      }
    },
  }
</script>

<style>
  .enter-city input {
    font-size: 40px;
  }
  .weather {
    margin-top: 10px;
  }

  .weather h1 {
    font-size: 80px;
  }

  .weather h1,
  h2,
  h3 {
    margin: 0;
  }
</style>
