import './login.css'
import user_email from '../assets/email.png'
import user_pass from '../assets/password.png'
import user_person from '../assets/person.png'
const Login=()=>{
    return(
        <div className='container'>
            <div className='header'>
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_person} alt="" />
                    <input type="text" name="name" id="" placeholder='Name' />
                </div>
                
                <div className="input">
                    <img src={user_email} alt="" />
                    <input type="email" name="name" id="" placeholder='Email id' />
                </div>

                <div className="input">
                    <img src={user_pass} alt="" />
                    <input type='password' name="name" id="" placeholder='Password' />
                </div>
            </div>
            <div className="forgot_pass">Forgot Password ?</div>
            <div className="submit-container">
                <button>Sign Up</button>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login