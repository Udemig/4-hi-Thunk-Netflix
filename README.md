# Kütüphaneler

- react-router-dom
- @splidejs/react-splide
- axios
- redux
- react-redux
- redux-thunk

# Kaynaklar

- Popular : https://api.themoviedb.org/3/movie/popular
- Kategoriler: https://api.themoviedb.org/3/genre/movie/list
- ResimUrl: https://image.tmdb.org/t/p/original

# Yapılacaklar

- Redux kurlumunu yap
- Popüler film verisini çek > store'a aktar
- Rastgele bir populer filmi seç `Hero.jsx` 'de ekrana bas'
- Filmlerin kategori verisini çek > store'a aktar
- Herbir kategori için ekrana filmleri listeleyecek bileşeni bas`ListMovies.jsx`
- - list movies listelene kategorinin ismini
- - birde o kategoriye ait film verisni çek ve listele

- filmlerden birine tıklanınca film detay sayfasına yönlendir
- - yönlendidiğin urlye parametre olarak filmin idsini ekle
- - yönlendilecek url /movie/film.id

- Film detay sayfası oluştur `MovieDetail.jsx`
- urlden parametreyi(film id'sini) al
- parametredeki id' ye ilgili filmin detaylarını içeren endpoint'e istek at
- gelen veriyi listele
