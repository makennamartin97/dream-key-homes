import React, {Component} from 'react';
import Typical from 'react-typical';


class Component1 extends Component {
    render() {
      return (
        <div className="comp1" >
            <div className="name animated fadeIn">
            <Typical
            steps={['Dream Key Homes', 3500]}
            loop={Infinity}
            wrapper="h2"
            />
            <Typical
            steps={[1800, 'Enterprises', 800]}
            loop={Infinity}
            wrapper="h4"
            />

            </div>
        </div>
      )
    }
}
export default Component1;