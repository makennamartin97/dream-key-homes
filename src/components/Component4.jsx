import React, {Component} from 'react';

class Component4 extends Component {
    render() {
      return (
        <div className="comp4" id="contact">
            <div>
            <div id="r-content">
                <h2>Questions?</h2>
                <h3>Send us a message or schedule a consultation:</h3>
            </div>
            <form>
                <div className="">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control input" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control input" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control input" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control input" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 mx-auto">
                        <input type="submit" className="btn btn-dark" value="Send Message"></input>
                    </div>
                </div>
            </form>
            </div>
        </div>
      )
    }
}
export default Component4;