import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

//css
import styled from 'styled-components';
// import './app.css';
const AppAll = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [ 
                {label: '1', important: true, like: false, id: 'qwe1'},
                {label: '2', important: false, like: false, id: 'qwe2'},
                {label: '3', important: false, like: false, id: 'qwe3'},
            ],
            term: '',
            filter: 'all'
        };

        this.maxId = 4
    }

    deletItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.maxId++
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }




    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index]
            const newItem = {...old, important: !old.important}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onToggleLike = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index]
            const newItem = {...old, like: !old.like}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }
    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => item.label.indexOf(term) > -1)
    }

    onUpSerchPanel = (term) => {
        this.setState({term})
    }

    onUpStatusFilter = (filter) => {
        this.setState({filter})
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like) 
        } else {
            return items
        }
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visibPost = this.filterPost(this.searchPost(data, term), filter)

        return (
            <AppAll>
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel
                        upSerchPanel = {this.onUpSerchPanel}
                    />
                    <PostStatusFilter
                        upStatusFilter = {this.onUpStatusFilter}
                        filter={filter}
                    />
                </div>
                <PostList 
                    posts={visibPost}
                    onDeletes = {this.deletItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm 
                onAdd = {this.addItem}
                />
            </AppAll>
        );
    }

}
