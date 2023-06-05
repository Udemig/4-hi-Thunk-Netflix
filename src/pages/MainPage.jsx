import { useEffect } from 'react';
import { getMovies, getGenres } from '../app/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';
import ListMovies from '../components/ListMovies';

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    // popular film verisini çek ve store'a aktar
    dispatch(getMovies());
    //  filmlerin kategori verisini çek ve store'a aktar
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {state?.genres.slice(0, 10).map((genre) => (
        <ListMovies
          title={genre.name}
          fetchUrl={`/discover/movie?with_genres=${genre.id}`}
        />
      ))}
    </div>
  );
};

export default MainPage;
