import React from 'react';
import Generator from './Generator.js'
import Tweeter from './tweeter.js';
import Background from './background.js';

import './main.css';


export default class MainIntro extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote:"Gon, you are light. Sometimes you shine so bright, I have to look away.",
      author:'- Killua Zoldyck'
    }
   }

   QuoteGenerator = (newQuote,newAuthor) => {
    this.setState({
      quote:newQuote,
      author:newAuthor
    });
   }

   render(){
    return(

      
     <div id="quote-box">
     <Background />
     
      <h1> Hunter x Hunter Quotes </h1>

      <div id="text">
        "{this.state.quote}"
      </div>

      <div id="author">{this.state.author}</div>

      <Generator QuoteGenerator={this.QuoteGenerator.bind(this)} /> 
      
      <Tweeter quotes={this.state.quote} authorer={this.state.author} />
      
    </div>
    );
}
}
