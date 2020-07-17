import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  };
  getMovies = async () => { // async 함수는 기다려줘야해
    const {
      data : {
        data : {movies},
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // axios.get 이 될 때까지
    // 구조분해할당 한 것임 : console.log(movies.data.data.movies) 랑 같음
    this.setState({ movies, isLoading : false }) // ES6 문법 : key : value 같으면 하나만 써도 됨 {movies : movies} = {movies}
    
  };
  componentDidMount () {
    // 영화 데이터 로딩이 완료되면,
    this.getMovies();
  };
  render() {
    const {isLoading, movies} = this.state; // 구조분해 할당을 이용해서 this.state에 있는 isLoading을 
    return (
      <section className="container">
        {isLoading  ? (
          <div className="movoies">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {
              movies.map((movie) => {
                console.log(movie);
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                )
              })
            }
          </div>
        )}
      </section>
  )}
}

export default Home;