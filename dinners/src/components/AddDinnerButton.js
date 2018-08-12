import React, { Component } from 'react'

class AddDinnerButton extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ""}
        this.handleChange = this.handleChange.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    clearInput(){
        this.setState({value: ""});
    }
    
    render(){
        return (
            <div className="add-dinner">
                <h1>Add Dinner</h1>
                    <form className="add-dinner-button">
                        <label>
                            <input 
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder="Dinner Name"
                            />
                        </label>
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.handleSubmit(this.state.value);
                                    this.clearInput();
                                }}>
                                Submit
                            </button>

                    </form>
            </div>
        )
    };
}

export default AddDinnerButton;