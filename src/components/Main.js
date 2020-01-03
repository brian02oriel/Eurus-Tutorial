import React, {Component} from 'react'
import Todo from "./Todo";
class Main extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>Bienvenido a la lista de tareas</h1>
                <Todo />
            </div>
        )
    }
}

export default Main