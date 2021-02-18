import React from 'react';

export default class PostStatusFilter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    onStatusFilter = (e) => {
        const filter = e.target.value;
        this.setState({filter})

        this.props.upStatusFilter(filter)
    }

    render () {

        return (
            <div className="btn-group">
                <button onClick={this.onStatusFilter} type="button" className="btn btn-outline-secondary" value="all">AAA</button>
                <button onClick={this.onStatusFilter} type="button" className="btn btn-outline-secondary" value="like">BBB</button>
            </div>
        );
    }
}
