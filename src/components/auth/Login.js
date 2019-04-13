import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
      <div className="columns is-mobile is-centered" style={{ marginTop: '20px' }}>
        <form onSubmit={this.handleFormSubmit}>     
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input name="username" className="input" type="text" 
                     value={this.state.username} onChange={ e => this.handleChange(e)} 
                     placeholder="username" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" 
                     name="password" 
                     value={this.state.password} onChange={ e => this.handleChange(e)}
                     placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="control is-centered columns is-mobile " style={{ marginTop: '20px' }}> 
            <button className="button is-primary " type="submit" value="Login" >Submit</button>
          </div>      

          <div>
            <p>Don't have an account? 
                <Link to={"/signup"}> Signup</Link>
            </p>
          </div>  
        </form>
        
      </div>



      // <div>
      //   <form onSubmit={this.handleFormSubmit}>
      //     <label>Username:</label>
      //     <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
      //     <label>Password:</label>
      //     <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
      //     <input type="submit" value="Login" />
      //   </form>
      //   <p>Don't have account? 
      //       <Link to={"/signup"}> Signup</Link>
      //   </p>
      // </div>
    )
  }
}

export default Login;