import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link to={{pathname: "/movie-detail", state: {year, title, summary, poster, genres } }}>
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genres"> {genre} </li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    year : PropTypes.number.isRequired, // 연도
    title : PropTypes.string.isRequired, // 제목
    summary : PropTypes.string.isRequired, // 줄거리
    poster : PropTypes.string.isRequired, // 이미지 주소
    genres : PropTypes.arrayOf(PropTypes.string).isRequired, // 장르
};

export default Movie;