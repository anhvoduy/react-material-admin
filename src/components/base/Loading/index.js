import React, { Component, PropTypes } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let { loading } = this.props;
    return (
      loading ?
      <div className="spinner-loading">
        <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle className="path" fill="none" cx="33" cy="33" r="30" />
        </svg>
      </div>
      : null
    );
  }
}

Loading.propTypes = {
  loading: PropTypes.bool
};

export default Loading;