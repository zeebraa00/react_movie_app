import React from 'react';

// App 클래스는 React.Component를 상속받았다. 즉, React.Component 클래스의 기능을 추가한 App 클래스
// 클래스형 컴포넌트를 사용하는 이유 : state를 사용하기 위해서
class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {
    count : 0,
  };

  add = () => {
    this.setState(current => ({ // current에는 현재 state가 넘어온다
      count : current.count + 1
    }))
  }

  minus = () => {
    this.setState(current => ({
      count : current.count - 1
    }))
  }

  componentDidMount() {
    console.log('component rendered')
  }

  componentDidUpdate() {
    console.log('i just updated')
  }

  componentWillUnmount() {
    console.log('goodbye')
  }

  render() {
    console.log('rendering')
    return (
      <div>
        <h1> The number is {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;