import React, {Component} from 'react';
import TodoItems from './TodoItems';

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            author: "",
            date:"",
            task:"",
            items:[]
            
        }
    }
   


    handleChange = e =>{
        const { name, value } = e.target;
        console.log(value);
        this.setState({
            [name] : value
        });
    }

    handleSubmit = e =>{
        e.preventDefault()
        const {author, date, task} = this.state
        const newItem = {
            author,
            date,
            task
        }
        console.log(newItem)
        this.setState(state =>({
            items: state.items.concat(newItem),
            author: "",
            date: "",
            task: ""
        }))
    }


    render(){
        
        return(
            <div className="row">
              <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="author"> Autor </label>
                        <input name="author" onChange={this.handleChange} type="text" className="form-control" id="author" placeholder="Inserte autor..." value={this.state.author}/>   
                    </div>
                    <div className="form-group">
                        <label htmlFor="date"> Fecha </label>
                        <input name="date" onChange={this.handleChange} type="date" className="form-control" id="date" value={this.state.date}/>   
                    </div>
                    <div className="form-group">
                        <label htmlFor="task"> Tarea: </label>
                        <textarea name="task" onChange={this.handleChange} className="form-control" id="task" value={this.state.task}/>   
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-primary"> Submit </button>
                </form>
              </div>
              <div className="col-md-6" >
                 <TodoItems items={this.state.items} />   
              </div>
            </div>
        )
    }
}



export default Todo