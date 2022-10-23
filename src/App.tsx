import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5V7V2JqjXrsD--ZUnZAWUesPljlYPQiJC9Q&usqp=CAU"
                    alt=""/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className="content">
                <img
                    src="https://images.unsplash.com/photo-1518289646039-3e6c87a5aaf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpbmslMjBhYnN0cmFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""/>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
            </div>
            <div>post
            <div>newpost</div>
            </div>
            <div>
                <div>p1</div>
                <div>p2</div>
            </div>
        </div>


    );
};

export default App;