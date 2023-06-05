import axios from 'axios';

// yapılacak bütün isteklerde gönderilecek ve isteği kimin attığını söyliyecek
export const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzFhYTVmNTkwMjBlM2JlODJlNGZkOTA2MGM2ZTYzNiIsInN1YiI6IjY0NzQ5OTM5OTQwOGVjMDBjMjhmYTU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KKe2uazo7iAtiZVbMS4VQ2mhnm32Kx7p1q6IiVwkdbw',
  },
};

axios.defaults.baseURL = ' https://api.themoviedb.org/3';

/*
thunk' un en büyük faydası aksiyonları dispatch etmeden önce
async işlemleri yapmamamızı sağlar
bu sayade önce apiye istek atıp verileri çekeriz
daha sonra api den gelen cevabı dispatch edip reducera aktarırız
*/

// asenkron aksiyon fonksiyon
export const getMovies = () => (dispatch) => {
  // reducer'a göndermeden önce yapılacak işlemler
  axios.get('/movie/popular', options).then((res) =>
    dispatch({
      type: 'SET_MOVIES',
      payload: res.data.results,
    })
  );
};

export const getGenres = () => (dispatch) => {
  // kategori verisini çek
  axios.get('/genre/movie/list', options).then((res) =>
    dispatch({
      type: 'SET_GENRES',
      payload: res.data.genres,
    })
  );
};

// uzun yol
function getMovies1() {
  return async function (dispatch) {
    // asenkron işlemler

    // işlemler sonucu gelen cevabı dispatch reducera aktar
    dispatch({
      type: 'SET_MOVIES',
      payload: res.data,
    });
  };
}

// Kural: aksiyon fonksiyonlarının kendisi async olamaz
