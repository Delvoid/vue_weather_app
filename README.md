## Front end

Front end made using Vue.js 3 - Vite

### Install dependencies

```
cd client
npm install
```

### Launch Frontend

```
npm run dev
```

## Backend Setup

For this project, you need both server and client running at the same time. You will also need a API key:

- In the `server` folder, rename `.env.sample` to `.env`
- Genrate an API key at `https://openweathermap.org/`
- Add your API key to `server/.env`

### Install dependencies

```
cd server
npm install
```

### Launch backend

```
nodemon index
```

### TODO

- add next 7 days of weather
- update frontend layout
