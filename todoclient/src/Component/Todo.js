import '../App.css';
import React, { useState } from 'react';

function Todo() {
    const [title, setTitle] = useState("")

    return (
        <div className="App">
            <h2 >Todo form</h2>
            <div className="App mb-3" style={{width:"500px"}} >
                <label className="form-label">Title</label>
                <input type="text" 
                name="title" value={title} 
                className="form-control" 
                 placeholder="Enter title" 
                 onChange={(e)=>{setTitle(e.value)}}
                 />
            </div>
        </div>
    );
}

export default Todo;