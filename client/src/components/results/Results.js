import React, { Component} from 'react';
import Result from './Result';
import Card from '../Card';

class Results extends Component {
  
  componentDidMount(){
    if(this.props.isFetchingUberEstimate){
      return <Loader type="line-scale" active />
    }
  }
  
  componentDidUpdate(){
    return <Loader type="line-scale" hidden />
  }

  render(){
  return(
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Card label={this.props.label}>
        <Result header={"Uber"} estimates={this.props.uberEstimates} buttonTitle={"Take me to Uber"}/>/> 
        <Result header={"Lyft"} estimates={this.props.lyftEstimates} buttonTitle={"Take me to Lyft"}/>
      </Card>
    </div> 
  )};
}

export default Results;