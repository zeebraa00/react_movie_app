import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster}) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie_data">
                <h3 class="movie_title">{title}</h3>
                <h5 class="movie_year">{year}</h5>
                <p class="movie_summary">{summary}</p>
            </div>
        </div>

    );
}

Movie.propTypes = {
    year : PropTypes.number.isRequired, // 연도
    title : PropTypes.string.isRequired, // 제목
    summary : PropTypes.string.isRequired, // 줄거리
    poster : PropTypes.string.isRequired, // 이미지 주소
};

export default Movie;