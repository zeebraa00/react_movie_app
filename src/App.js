import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

const foodLike=[
  {
    id : 1,
    name : "Kimchi",
    image : "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating : 5
  },
  {
    id : 2,
    name : "Samgyeopsal",
    image : "https://lh3.googleusercontent.com/proxy/JceN4UW98jDmUcenGS3PpAMZgHNcEe3nA8ID37lVjT9If4UdhLipFN_QcFPrFk7D_O8npCLCpFXY05auryH1oeu-GzBgKL9P4ryFxT_Bl0qvow8ms_pZuuGOmgwPDWfXeQnV07ZJPw",
    rating : 4.9
  },
  {
    id : 3,
    name : "Bibimbap",
    image : "https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
    rating : 3
  },
  {
    id : 4,
    name : "Doncasu",
    image : "https://mp-seoul-image-production-s3.mangoplate.com/951194_1545618824282984.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    rating : 3.9
  },
  {
    id : 5,
    name : "Kimbab",
    image : "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating : 4.8
  }
];

// 화살표 함수 : function renderFood(dish) 랑 같은 뜻임


function App() {
  return (
    <div>
      {/* Food component에, foodLike의 원소 dish마다, dish.name과 dish.image 두 개를 props로 넘겨줘라 */}
      {foodLike.map(dish =>
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      )}
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

export default App;