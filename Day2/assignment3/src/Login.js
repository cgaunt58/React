import React, {Component} from 'react' 

class Login extends Component {

   constructor() {
       super(

        this.state = {
            username: '',
            password: ''
        }
       )
   }
   
   
   
    handleUserNameChanged = (e) => {
        this. setState({
            username: e.target.value
        })
       
   }

   handlePasswordChanged = (e) => {
       this.setState({
           password: e.target.value
       })
   }

   handleLogin = () => {
       console.log(this.state.username)
       console.log(this.state.password)
   }




    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type ='text' onChange={this.handleUserNameChanged} />
                <input type ='text' onChange={this.handlePasswordChanged} />
                <button>Login</button>

            </div>
        )
    }
}





export default Login