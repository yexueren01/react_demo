import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 


function NumberList(props) {
    const posts = props.posts;
    const listItems = posts.map((post) =>
        <li key={post.id}>{post.title}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
    <NumberList posts={posts}></NumberList>,
    document.getElementById('root')
);