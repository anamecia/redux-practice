import React, {Component} from 'react'

class Postform extends Component{

    state={
        title: '',
        body: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     handleSubmit = (e) => {
         e.preventDefault()

         const post = {
            title: this.state.title,
            body: this.state.body
         }

         fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(post)
            }).then(resp => resp.json())
            .then(data => console.log(data))
     }

    render(){
        return(
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Body:</label>
                        <input type='textarea' name='body' value={this.state.body} onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Postform  