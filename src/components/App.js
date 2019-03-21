import React, {Component} from 'react'
import Animal from './Animal';

// Sets state as a dynamic message that updates when the Animal component button is clicked
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    // Event handler function that will take in the argument 'name' and pass that information into a formatted message
    // then update the Component's state with the new message.
    handleMessage(name) {
        const newMessage = `You just pet the ${name}`;
        this.setState({message: newMessage})
    }

    // Creates an object with multiple 'Animals'
    render() {
        // You can attach a separate prop to a React component. This function is a callback that will fire when
        // you want an event to occur on this component when something happens to the child.
        // A callback can be sent from the function in the child to parent, which can be used as an argument in the parent
        // This call back runs the function handleMessage with the called back 'name' and uses the callback for the
        // handleMessage parameter.
        return (
            <div className="container">
                <h1>Petting Zoo!</h1>
                <h2>{this.state.message}</h2>
                <div className="jumbotron">
                    <Animal name="Horse" onPetAnimal={(name)=> this.handleMessage(name)} />
                    <Animal name="Goat" onPetAnimal={(name)=> this.handleMessage(name)} />
                    <Animal name="Sheep" onPetAnimal={(name)=> this.handleMessage(name)} />
                    <Animal name="Mouse" onPetAnimal={(name)=> this.handleMessage(name)} />
                </div>
            </div>
        )
    }
}

// Exports the object to be used by other components
export default App;