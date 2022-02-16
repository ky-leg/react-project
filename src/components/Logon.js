import React, {useState} from 'react';

function Logon({users, activeUser, setActiveUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidepassword]= useState(true)   

    function validateForm(){
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(username,password)
        const userLogon = users.find(user => 
            user.username === username && user.password === password
        )

        if (userLogon){
            setActiveUser(userLogon)
        }
        if (!userLogon){
            window.alert("Invalid username or password. Please try again.");
            setActiveUser()
        }
    }

    function handleClick(event){
        setHidepassword(!hidePassword)
    }
    if(activeUser){
        return (
            <button onClick={(e) => setActiveUser()}>Log Out!</button>
        )
    }
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className='ui teal image header'>
                        <div className='content'>Log-in to your account</div>
                </h2>
                <form className="ui large form" onSubmit={handleSubmit}>
                    <div className="ui stacked segement">
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"/>
                                <input 
                                type="text" 
                                value={username}
                                plasceholder="E-mail address"
                                onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"/>
                                <input 
                                type={hidePassword? "password":"text"} 
                                name="password"
                                value={password}
                                plasceholder="Password"
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <label>
                        Show Password?
                        <input type="checkbox" onClick={handleClick}/>
                    </label>
                    <br/>
                    <input className="ui fluid large teal submit button" type="submit" value="Submit" onSubmit={handleSubmit} disabled={!validateForm()}/>
                </form>        
            </div>     
        </div>
        
    );
    }

export default Logon;