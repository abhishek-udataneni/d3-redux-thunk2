import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import ReduxApp from './ReduxApp';
import "./styles.css";
import MysteriousSankey from "./MysteriousSankey";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

class App extends React.Component {
  state = { data: null, width: 0, height: 0 };
  svgRef = React.createRef();

  componentDidMount() {
    d3.json("/ugr-sankey-openspending.json").then(data =>
      this.setState({ data })
    );
    this.measureSVG();
    window.addEventListener("resize", this.measureSVG);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.measureSVG);
  }

  measureSVG = () => {
    const { width, height } = this.svgRef.current.getBoundingClientRect();

    this.setState({
      width,
      height
    });
  };

  render() {
    const { data, width, height } = this.state;

    return (
      <div className="App">
        <ReduxApp />
        <svg width="100%" height="600" ref={this.svgRef}>
          {data && (
            <MysteriousSankey data={data} width={width} height={height} />
          )}
        </svg>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);
