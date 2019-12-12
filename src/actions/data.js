import axios from 'axios';

const getData = ()=>(dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users/1/todos").then(res => {
        console.log(res);
        let data = res.data.filter((_,id) => id<10);
        dispatch({type: 'data_success',data})
    })
}

export default getData;