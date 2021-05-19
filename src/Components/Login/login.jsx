import React from 'react';
/*import loginImg from 'c://Users/herei/src/src/Components/Login/SFHS clear.png';*/

export class Login extends React.Component{

   constructor(props)
    {
        super(props);
    
    }

    render(){
        return (
            <div className="base-Container" ref={this.props.containerRef}>
           <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={"https://user-images.githubusercontent.com/50176999/118826807-6c573280-b8d9-11eb-87b0-1a74aa8c1512.png"} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="Username">Username </label>
                        <input type="text" name="username" placeholder="Username" />
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
        </div>);
    }
}
