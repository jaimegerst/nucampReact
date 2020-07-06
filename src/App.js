import React, { Component } from 'react';
<<<<<<< HEAD
import Main from './components/MainComponent';
=======
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponents';
>>>>>>> 559a3351440b972c7909f60aaf7d58b62a536532
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
<<<<<<< HEAD
                <Main />
=======
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory />
>>>>>>> 559a3351440b972c7909f60aaf7d58b62a536532
            </div>
        );
    };
}

export default App;