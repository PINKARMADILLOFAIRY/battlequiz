import React, {Component, useState, useEffect }  from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import questions from '../assets/quizQuestions'
import Timer from './Timer'


//"Fisher-Yates Shuffle" Algorithm to randomize question order.
const shuffleArray = (array) =>{
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
}


class Quiz extends Component{

    constructor(props) {
    super(props);
    this.state = {
      quizQuestions:shuffleArray(questions),
      questionNumber: 0,
      incorrectAnswers:0,
      correctAnswers:0,
      consecutiveCorrectAnswers: 0,
      consecutiveIncorrectAnswers: 0,
      timer:1
    };
  }


  evaluateAnswer = (e) => {
    e.persist()
    const answerButton = e.target;
    const answer = e.target.id;

    if(answer === this.state.quizQuestions[this.state.questionNumber]['Ans']){
      e.target.style.color = 'green';
      const _correctAnswers = this.state.correctAnswers + 1;
      const _consecutiveCorrectAnswers = this.state.consecutiveCorrectAnswers + 1;
      this.setState({
        correctAnswers:_correctAnswers,
        consecutiveCorrectAnswers:_consecutiveCorrectAnswers
      });
      this.props.setTurns(this.props.turn + 1);
    } else {
      e.target.style.color = 'red';
      const _incorrectAnswers = this.state.incorrectAnswers+ 1;
      const _consecutiveIncorrectAnswers = this.state.consecutiveIncorrectAnswers + 1;
      this.setState({
        incorrectAnswers:_incorrectAnswers,
        consecutiveIncorrectAnswers:_consecutiveIncorrectAnswers
      });
    };

    //Set state.timer to false in order to 
    //stop the timer.
    const _timer = false;
    this.setState({timer:_timer})
  };


  generateNewQuestion = () =>{

    const _answerTextColor = 'black';
    if(this.state.questionNumber + 1 === 60){
      const _questionNumber = 0;
      this.setState({
        questionNumber:_questionNumber,
      })
    } else {
      const _questionNumber = this.state.questionNumber + 1;
      this.setState({
        questionNumber:_questionNumber,
      })
    }

    document.getElementById('A').style.color = 'black';
    document.getElementById('B').style.color = 'black';
    document.getElementById('C').style.color = 'black';
    document.getElementById('D').style.color = 'black';

    //Increment timer key value to force the Timer
    //component to update with the button click.
    const _timer = this.state.timer + 1;
    this.setState({timer:_timer})
  }

  render(){



    return (
      <div id = 'Question Container' style ={{ width:"25vw", right:"0"}}>
        <Timer key = {this.state.timer} timer = {this.state.timer}/>
        <Paper elevation ={2} style ={{margin:"auto", marginTop:"0.5vh", height:"7.25vh"}}>
          <div style ={{textAlign:"center",fontWeight:"bold", fontSize:"1.75vh"}}>JavaScript Questions</div>
          <div style ={{display:"flex", marginTop:"1vh"}}>
            <div style ={{textAlign:"left",fontWeight:"bold"}}>Correct Answers</div>
            <div style ={{textAlign:"left",fontWeight:"bold",marginLeft:"0.55vw"}}>:{String(this.state.correctAnswers)}</div>
          </div>
          <div style ={{textAlign:"left",fontWeight:"bold", marginTop:"0.5vh", marginBottom:"0.75vh"}}>Incorrect Answers:{String(this.state.incorrectAnswers)}</div>
        </Paper>
        <Paper elevation ={2} style ={{margin:"auto", marginTop:"0.5vh"}}>
          <div style ={{margin:"auto"}}>
            <div style ={{fontWeight:"bold",textAlign:"left", height:"5vh",overflowWrap:"break-word"}}>{this.state.quizQuestions[this.state.questionNumber]['Question']}</div>
            <button id = "A" style = {{marginTop:"0.5vh",width:"25vw",textAlign:"left",fontWeight:"bold", color:this.state.answerATextColor}} onClick = {this.evaluateAnswer}>{String('A: '+this.state.quizQuestions[this.state.questionNumber]['A'])}</button>
            <button id = "B" style = {{marginTop:"0.25vh",width:"25vw",textAlign:"left",fontWeight:"bold", color:this.state.answerBTextColor}} onClick = {this.evaluateAnswer}>{String('B: '+this.state.quizQuestions[this.state.questionNumber]['B'])}</button>
            <button id = "C" style = {{marginTop:"0.25vh",width:"25vw",textAlign:"left",fontWeight:"bold", color:this.state.answerCTextColor}} onClick = {this.evaluateAnswer}>{String('C: '+this.state.quizQuestions[this.state.questionNumber]['C'])}</button>
            <button id = "D" style = {{marginTop:"0.25vh",width:"25vw",textAlign:"left",fontWeight:"bold", color:this.state.answerDTextColor}} onClick = {this.evaluateAnswer}>{String('D: '+this.state.quizQuestions[this.state.questionNumber]['D'])}</button>
          </div>
          <div>
            {/* <button style ={{marginTop:"1.25vh", marginLeft: "6.25vw", marginBottom: "1vh", width:"12.5vw"}} onClick = {this.generateNewQuestion}>Generate New Question</button> */}
            <Button variant="contained" color="secondary" style ={{marginTop:"1.25vh", marginLeft: "6.25vw", marginBottom: "1vh", width:"12.5vw"}} onClick = {this.generateNewQuestion}>Generate New Question</Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Quiz;