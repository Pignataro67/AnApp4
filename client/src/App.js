import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ConfirmRouteContainer from './containers/ConfirmRouteContainer';
import ResultsContainer from './containers/ResultsContainer';
import SearchContainer from './containers/SearchContainer';
import Background from './images/Background.jpg';
import { getMapboxKey } from './actions/fetchLocations';
import PageTitle from './components/PageTitle';

class App extends Component {
  
  componentDidMount(){
    if(this.props.isFetchingUberEstimate){
      return <Loader type="line-scale" active />
    }
  }
  
  componentDidUpdate(){
    return <Loader type="line-scale" hidden />
  }

  componentDidMount(){
    this.props.getMapboxKey()
  }

  render() {
  return (
    <div style={{
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${Background})`
        }}className="App">
      <Router>
        <div>
          <Route exact path="/" component={SearchContainer}/>
          <Route exact path="/confirm_route" component={ConfirmRouteContainer}/>
          <Route exact path="/results" component={ResultsContainer}/>
        </div>
      </Router>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {startingLocation: state.StartingLocation, destination: state.destination}
}

const mapDispatchToProps = (dispatch) => {
  return {getMapboxKey: () => dispatch(getMapboxKey())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);