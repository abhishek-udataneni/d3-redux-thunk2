import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import getData from './actions/data';
import TableComponent from './Views/TableComponent';
import { Button } from 'reactstrap';

function App(props) {
  let data = [{
    "project_name": "NC",
    "lab_name": "MTN59",
    "lab_location": "Middletown,NJ",
    "created_user": "sk2303",
    "requested_user_mail": "sk2303@att.com",
    "routers": [
      "cleaf",
      "rleaf"
    ],
    "schedule": [{
      "script_name": "monitoring",
      "schedule_date": "everyday",
      "schedule_time": "6.30am"
    },
    {
      "script_name": "fping",
      "schedule_date": "everyday",
      "schedule_time": "6.30am"
    }
    ]
  }]
  return (
    <div>
      <TableComponent data={data}/>
      <div onClick={props.getData} className="App">
      <Button color="danger">Get Data</Button>
      </div>
      <div>
        {JSON.stringify(props.data) !== "{}" && <h2>This is the data from the server</h2>}
        {JSON.stringify(props.data) !== "{}" && JSON.stringify(props.data)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data
  }
}

export default connect(mapStateToProps,{getData})(App);
