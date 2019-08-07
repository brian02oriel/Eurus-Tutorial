import React from 'react'

const TodoItems = ({items}) => {
    const {itemsLayout} = styles
    console.log("Cantidad de items: ", items.length)
    if(items.length > 0 ){
        console.log(items)
        return items.map( item =>
            <div className="card" style={itemsLayout}>
                    <div className="card-body">
                        <h5 className="card-title">Creado por: {item.author}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Para el día: {item.date}</h6>
                        <p className="card-text">{item.task}</p>
                    </div>
            </div>
        )
        
                
    } else {
        return(<div><p>No cuenta con ninguna tarea</p></div>)
    }
    
}

const styles = {
    itemsLayout: {
       margin: "1rem"
    }
}
export default TodoItems