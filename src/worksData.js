import subsManagerPng from './assets/subs-manager-img.png';
import watchMoviesPng from './assets/nuxtMovies.png';
import clothingStorePng from './assets/react-clothing-store.png';
import reactFoodPng from './assets/react-food.png';
import reactGamesPng from './assets/react-games.png';
import nextRGXPPng from './assets/nextRGXP.png';
import reactAnimePng from './assets/react-animlist.png';
import reactDogPng from './assets/react-dogs.png';
import blogPng from './assets/blog-v2.png';
import weatherAppPng from './assets/weather-app.png';

export const worksItems = [
  {
    id: 1,
    name: 'React Dogs',
    poster: reactDogPng,
    reverse: true,
    linkToLive: 'https://react-dogs-theta.vercel.app/',
    linkToGitHub: 'https://github.com/ruslankrilkivyy/react-dogs',
    description: `In this app you can add dog photos to your favorites, sort them by various data,
  upload your dog's photo and much more`,
    workTech: ['ReactJS', 'TypeScript', 'MobX', 'react-mobx-lite', 'classnames'],
  },
  {
    id: 2,
    name: 'Clothing Store',
    poster: clothingStorePng,
    reverse: false,
    linkToLive: 'https://react-clothing-store.vercel.app/',
    linkToGitHub: 'https://github.com/ruslankrilkivyy/react-clothing-store',
    description: `I was inspired by the site of the famous blogger Itpedia, and decided to make his
  clothing store site in React and TypeScript. Here you can browse products, add to
  cart, change the size of clothes or the number of clothes added, and much more.`,
    workTech: ['ReactJS', 'TypeScript', 'Styled Components', 'Formik', 'Redux / Redux Thunk'],
  },
  {
    id: 3,
    name: 'AnimeList',
    poster: reactAnimePng,
    reverse: true,
    linkToLive: 'https://react-anime-xi.vercel.app/',
    linkToGitHub: 'https://github.com/ruslankrilkivyy/react-anime',
    description: `In this project you can view all information about anime, you can add anime to
  several different types, such as add to watch later, etc.`,
    workTech: ['ReactJS', 'TypeScript', 'Redux Toolkit', 'React Cookie', 'Formik', 'Kitsu API'],
  },
  {
    id: 4,
    name: 'DeliveryFood',
    poster: reactFoodPng,
    reverse: false,
    linkToLive: 'https://react-food.vercel.app/',
    linkToGitHub: 'https://github.com/ruslankrilkivyy/react-food',
    description: `This was my first experience using MobX, here you can add the food of your choice
  to the basket, as well as change the quantity, etc.`,
    workTech: ['ReactJS', 'TypeScript', 'Mobx / react-mobx-lite'],
  },
  {
    id: 5,
    name: 'Games!',
    poster: reactGamesPng,
    reverse: true,
    linkToLive: 'http://react-games-git-main-ruslankrilkivyy.vercel.app/',
    linkToGitHub: 'https://github.com/ruslankriklivyy/react-games',
    description: `This was my first experience using Redux Saga, in this project I relayed the
  registration through Google and Githab. Here you can view information about any
  game, add desired games and see what stores are available for the game`,
    workTech: ['ReactJS', 'TypeScript', 'Redux / Redux Saga', 'FireBase', 'RAWG API'],
  },
  {
    id: 6,
    name: 'Subscriptions manager',
    poster: subsManagerPng,
    reverse: false,
    linkToLive: 'https://vibrant-villani-602451.netlify.app/',
    linkToGitHub: 'https://github.com/ruslankriklivyy/react-subscription-manager',
    description: `In this project I learned the basics of the effector. You can add subscriptions,
  set their color, price, etc. You will also see a graphical display of your
  spending from your paycheck`,
    workTech: ['ReactJS', 'TypeScript', 'Effector', 'CSS / SCSS Modules', 'react-colorful', 'uuid'],
  },
  {
    id: 7,
    name: 'Next RGXP!',
    poster: nextRGXPPng,
    reverse: true,
    linkToLive: 'https://romantic-volhard-70e4b0.netlify.app/',
    linkToGitHub: 'https://github.com/ruslankriklivyy/next-rgxp',
    description: `A collection of regular expressions for JavaScript`,
    workTech: ['ReactJS', 'TypeScript', 'NextJS', 'Redux Toolkit', 'CSS / SCSS Modules'],
  },
  {
    id: 8,
    name: 'Watch Movies!',
    poster: watchMoviesPng,
    reverse: false,
    linkToLive: 'https://nuxt-movies-lemon.vercel.app/',
    linkToGitHub: 'https://github.com/ruslankriklivyy/nuxt-movies',
    description: `You can search for movies, filter by genre and other types. You can also view
  information about the movie, such as the trailer, or read the description.`,
    workTech: ['VueJS', 'TypeScript', 'NuxtJS', 'TMDB API'],
  },
  {
    id: 9,
    name: 'Weather App',
    poster: weatherAppPng,
    reverse: true,
    linkToLive: 'https://vue3-weather-app.netlify.app/',
    linkToGitHub: 'https://github.com/ruslankriklivyy/vue-weather-app',
    description: `See the weather forecast for the week and many other indicators, such as wind
  speed, humidity, or visibility. There are other options as well`,
    workTech: ['VueJS', 'JavaScript', 'Vuex', 'SCSS', 'vue-debounce'],
  },
  {
    id: 10,
    name: 'Kriklivyy Blog',
    poster: blogPng,
    reverse: false,
    linkToLive: 'https://kriklivyy-blog-v2.netlify.app/',
    linkToGitHub: 'https://github.com/ruslankriklivyy/kriklivvy-blog-v2',
    description: `My blog made with the help of NextJS. You can leave comments, read my thoughts on
  development, and much more`,
    workTech: ['ReactJS', 'NextJS', 'TypeScript', 'Markdown', 'Gitalk'],
  },
];
