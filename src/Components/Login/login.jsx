import React from 'react';
import loginImg from 'c://Users/herei/src/src/Components/Login/SFHS clear.png';

export class login extends React.Component{

    constructor(props)
    {
        super(props);
    
    }

    render(){
        return
        <div className="base-Container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="Username">UserName </label>
                        <input type="text" name="username" placeholder="UserName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                </div>
                <div className="footer">
                    <button type = "button" className="btn">Login</button>
                </div>
            </div>
        </div>
    }
}
