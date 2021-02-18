import React from 'react';

import './serach-panel.css';
export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onSearch = (e) => {
        const term = e.target.value

        this.setState({term})
        this.props.upSerchPanel(term)
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search"
                onChange={this.onSearch}
            />
        )
    }
}
