import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import getData from './actions/data'
function ReduxApp(props) {
  return (
    <div>
    <div onClick={props.getData} className="App">
      hi
    </div>
    <div>
       { JSON.stringify(props.data)}
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data
  }
}

export default connect(mapStateToProps,{getData})(ReduxApp);
