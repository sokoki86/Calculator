import React, {Component} from 'react';

// class components require you to extend from React.Component and create a render function that
// which returns a React element

class Application extends Component {
    //constructor takes in a props argument
    constructor(props){
        //super allows the props to be instantiated
        super(props);
    }


    // lifecycle of a component is a string of functions that get called to determine
// if something needs to be updated or rendered

componentWillMount(props, state){

}

componentDidMount(props,state){
//these are the props and state that are originally mounted
}

componentWIllRecieveProps(props){
    //called before it mounts
}

componentWillUpdate(props, state){
 if(this.props.name !== props.name){
     //do something
 }
}

componentDidUpdate(props, state){
    //These are the old properties
}

// variables can be set inside the render but outside the return
    render(){
        let name = "Nick";

        //the name of the variable inside
       return (
           <div>
               <h1>Hello, {name}</h1>
               <span>this</span>
               </div> 
               );
    }
};

export default Application