const API_KEY = '72417af4a8275bc1b87ba01411b997c1';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFecth = async (endpoint) => {
  const req = await fecth (`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return[
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomedados para você',
        items:await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items:await basicFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items:await basicFecth(`/discover/movie?with_genres=28$language=pt-BR&api_key=${API_KEY}`)
      },
       {
        slug: 'comedy',
        title: 'Comédia',
        items:await basicFecth(`/discover/movie?with_genres=35$language=pt-BR&api_key=${API_KEY}`)
      },
       {
        slug: 'horror',
        title: 'Terror',
        items:await basicFecth(`/discover/movie?with_genres=27$language=pt-BR&api_key=${API_KEY}`)
      },
       {
        slug: 'romance',
        title: 'Romance',
        items:await basicFecth(`/discover/movie?with_genres=10749$language=pt-BR&api_key=${API_KEY}`)
      },
       {
        slug: 'documentary',
        title: 'Documentarios',
        items:await basicFecth(`/discover/movie?with_genres=99$language=pt-BR&api_key=${API_KEY}`)
      },

    ];
  }
}