import React from 'react';

// 20 random quotes from Hunter X Hunter and their authors.
const quoteList = [
    "Gon, you are light...Sometimes you shine so bright, I have to look away.",
    "When I say it doesn't hurt me, that means I can bear it. ",
    "A beast in human's clothing understands better than anyone how people want to be treated. ",
    "I do not fear death. I fear only that my rage will fade over time. ",
    "You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want. ",
    "Who wants to have their life planned out for them ? ",
    "If you want to get to know someone, find out what makes them angry. ",
    "It takes a mere second for treasure to turn to trash. ",
    "You believe I cannot pray with a single arm? A prayer comes from the heart. If the heart achieves the correct form, it becomes emotions and emotions can be manifested. ",
    "The only principle is that there are no principles. ",
    "When I ignore a friend I have the ability to help, wouldn't I be betraying him? ",
    "For the right price, you can buy not only treasures, but dreams, hearts and even people’s lives! ",
    "Human potential for evolution is limitless. ",
    "He's my buddy, my friend. But it wasn't until recently that I realized that ",
    "If you're willing to do whatever it takes. I won't hold back. ",
    "Qualification isn't something we have to talk about. The ones who are not okay with their success can go through training until they are. ",
    "An apology is a promise to do things differently next time, and to keep the promise. ",
    "If you are lying it will be easy on my mind. I won't have to show you any mercy. I can defeat you without hesitation. ",
    "Right now, I’m letting you live. And I’ll continue to keep you alive… until you’ve grown enough to become worth killing. ",
    "In the hands of an incompetent, power brings nothing but ruins. This could only be the works of imbeciles. "
];
const authorList = [
    "- Killua Zoldyck",
    "- Killua Zoldyck",
    "- Kurapika",
    "- Kurapika",
    "- Ging Freecs",
    "- Killua Zoldyck",
    "- Gon Freecs",
    "- Hisoka Morow",
    "- Isaac Netero",
    "- Kurapika",
    "- Killua Zoldyck",
    "- Leorio Paladiknight",
    "- Isaac Netero",
    "- Leorio Paladiknight",
    "- Gon Freecs",
    "- Gon Freecs",
    "- Ging Freecs",
    "- Gon Freecs",
    "- Hisoka Morow",
    "- MERUEM"
];

//function quoteGen

export default class Generator extends React.Component{
 constructor(props){
     super(props);
 }
 quoteGen = () =>{
    let randomQuote = Math.floor(Math.random() * Math.floor(quoteList.length-1));
    this.props.QuoteGenerator(quoteList[randomQuote],authorList[randomQuote]);
    document.getElementById("text").animate(
        { opacity: 0 },
        1000,
        function() {
          document.getElementById("text").animate({ opacity: 1}, 1000);
        }
      );
     
    document.getElementById("author").animate(
      { opacity: 0 },
      1000,
      function() {
        document.getElementById("text").animate({ opacity: 1}, 1000);
      }
    );  
 }

 render(){
     return(<button id="new-quote" onClick={this.quoteGen} className="btn btn-success buttonStyle">New Quote</button>);
 }
};
    
    

