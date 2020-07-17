import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push('/'); // 정상적인 접근이 아닌 경우
        }
    }
    
    render() {
        const {location} = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;