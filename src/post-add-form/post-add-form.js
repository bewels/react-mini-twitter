import React from 'react';

import './post-add.css';

export default class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onCnageValue = (e) => {
        this.setState({
            text: e.target.value

        })
        console.log(this.state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render () {       
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input 
                    className="form-control new-post-label"
                    type="text"
                    placeholder="Massage"
                    onChange={this.onCnageValue}
                    value={this.state.text}
                />
                <button
                className="btn"
                type="submit"
                >Send</button>
            </form>
        );
    }
}
