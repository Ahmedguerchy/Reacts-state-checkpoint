import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';



class App extends Component {
    constructor(props){
        super(props)


        this.state={
            fullName:"Ahmed Guerchy",
            bio:"Business Information System Student.",
            imgSrc:"myImage",
            profession:"student at GoMyCode",
            counter: 0,
            show:false
        }
    }
show=()=>{
    this.setState({show:!this.state.show})
}

handleChange= (e) => {
    this.setState({[e.target.name]:e.target.value})
  };

  add= () => {
    this.setState({counter:++this.state.counter})
  };
  componentDidMount() {
    setInterval(()=> this.setState({counter:this.state.counter+1})   , 1000)
   }

  render() {
    return <div>
       <br></br>
    {this.state.show && <p> {this.state.fullName}, I am a {this.state.bio} and {this.state.profession}</p>}



        <button onClick={this.show}>Show my profile</button>


        <div>
            <h3>Time Interval is {this.state.counter}</h3>

        </div>
    </div>;
  }
}
export default App
