import React, {Component} from 'react';
import { BrowserRouter , Router, NavLink, Switch } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';

class Main extends Component {
    render() {
        return (
            <div>
                <Component1/>
                <Component2/>
                <Component3/>
                <Component5/>
                <Component4/>
                
            </div>

        );
    }
}
export default Main;