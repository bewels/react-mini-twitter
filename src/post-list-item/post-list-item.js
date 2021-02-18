import React from 'react';

import './post-list-item.css';

export default class PostListItem extends React.Component {
    render () {
        const {label, onDelete, onToggleLike, onToggleImportant, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like ';
        }
        return (
            
            <div 
            onDoubleClick={onToggleLike}
            className={classNames}
            >
                <span className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-between align-items-center">
                    <button 
                    onClick= {onToggleImportant} 
                    className="btn-star btn-cm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                    onClick={onDelete}
                    className="btn-trash btn-cm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}


