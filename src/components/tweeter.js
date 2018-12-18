import React from 'react';

export default class Tweeter extends React.Component{
    constructor(props){
        super(props);
    }
    tweetThat = () => {
        window.open('https://twitter.com/intent/tweet?hashtags=quotes,hunterxhunter&related=freecodecamp&text=' + encodeURIComponent('"' + this.props.quotes + '" ' + this.props.authorer));
    }

    render(){
        return(
            <a href="twitter.com/intent/tweet" onClick={this.tweetThat} id="tweet-quote" target="_blank" className="btn btn-info buttonStyle">
            <i className="fa fa-twitter"/> 
             {" "}
             Tweet{" "}
            </a>
        )
    }
}