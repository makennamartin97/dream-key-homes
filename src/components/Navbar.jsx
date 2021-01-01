import React, {Component} from 'react';



class Navbar extends Component {

  render()
   {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" style={{opacity: '70%'}}>
            <a className="navbar-brand text-light" href="/">Dream Key Homes</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav mr-auto" >

                    <li className="nav-item ">
                    <a className="nav-link " style={{color: "#949494"}} href="/dream-key-homes/#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " style={{color: "#949494"}} href="/dream-key-homes/#gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " style={{color: "#949494"}} href="/dream-key-homes/#reviews">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " style={{color: "#949494"}} href="/dream-key-homes/#contact">Contact</a>
                    </li>
                </ul>

            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;