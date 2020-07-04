import React from 'react';

function Food(props) {
  return <h2> I Like {props.fav} </h2>;
}

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Food fav="kimchi" />
      {/* props의 이름 : fav, 즉, fav에 kimchi를 담아서 Food에 보낸거임 */}
      {/* props에 있는 데이터는 문자열 제외하고 무조건 중괄호로 감싸야함 */}
      {/* e.g. <Food something={true} papapapa={[1,2,3]} */}
      <Food fav="ramen" />
      <Food fav="sushi" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
