import React, { Component } from 'react'
import Details from './Details';
import Question from './Question';
export class Container extends Component {
    constructor(props){
        super(props);
        this.state= {
          name: null,
          email:null,
          question: {
            q1: null,
            q2: null,
            q3: null,
            other: null,
          },
          isSubmitted: false,
        };
    }

    detailSubmitHandler =(event)=>{
      const name = event.target.name.value;
      const email = event.target.email.value;
      console.log(name);
      console.log(email);
      this.setState({name, email}, ()=>{
        console.log(this.state);
      });
     event.preventDefault();
    }

    questionSubmitHandler = (event) =>{
      const questions ={};
      questions.q1 = event.target.q1.value;
      questions.q2 = event.target.q2.value;
      questions.q3 = event.target.q3.value;
      questions.other = event.target.other.value;
      
      this.setState({questions});
      event.preventDefault();
    }

  render() {
    return (
      <>
      <div className="container-fluid">
        <div className="container card mt-2">
          <h1 className="text-center text-primary">Survey</h1>
        </div>
      </div>
      {(this.state.name === null && this.state.email === null) ?
      (<Details submit = {this.detailSubmitHandler}/>):
      (<Question submit = {this.questionSubmitHandler}/>)}
      
      </>
    )
  }
}

export default Container