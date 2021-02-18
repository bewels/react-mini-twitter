import React from 'react';

import PostListItem from '../post-list-item';
import './post-lisr.css'

const PostList = ({posts, onDeletes, onToggleImportant, onToggleLike}) => {

    const elem = posts.map(item => {
        const {id, ...itemAll} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemAll}
                    onDelete={() => onDeletes(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                    onToggleLike = {() => onToggleLike(id)}
                />
            </li>
        )
    });

    return (


        <ul className="app-list list-group">
            {elem}
        </ul>
    );
}

export default PostList;