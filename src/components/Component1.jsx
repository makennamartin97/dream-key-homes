import React, {Component} from 'react';
import Typical from 'react-typical';


class Component1 extends Component {
    render() {
      return (
        <div className="comp1" >
            <div className="name animated fadeIn">
            <Typical
            steps={['Dreamkey', 1000]}
            loop={Infinity}
            wrapper="h1"
            />
            <Typical
            steps={[1800, 'Enterprises', 2000]}
            loop={Infinity}
            wrapper="h4"
            />

            </div>
        </div>
      )
    }
}
export default Component1;