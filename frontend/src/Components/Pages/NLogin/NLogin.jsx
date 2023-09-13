import { useContext } from 'react';
import './NLogin.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../../Providers/AuthProvider';

const NLogin = () => {

const { loginData, setLoginData } = useAuth()   // A hook from AuthProvider //
const navigate = useNavigate()






//Adding an error function med asynchrony 
  const submitHandle = async e => {
    const formData = new URLSearchParams()
    formData.append("username", e.target.form.username.value)
    formData.append("password", e.target.form.password.value)
//Here using the spread operator(...)
  // console.log(...formData);

    const endpoint = `http://localhost:4000/login` //pack space or template string``//
    try {
          const result = await axios.post(endpoint, formData)
//I use (result.data.access_token) to get and put exactly the token our sessionstorage
         handleSessionData(result.data.access_token);
//Try and catch for error message//    
    }catch(err) { 
      console.log(`kunne ikke logge ind: ${err}`);// This is error message//
    }


  }


//Creating a function that can connect with the storage in the browser
  const handleSessionData = data =>{
    if (data) {
      sessionStorage.setItem('token',  JSON.stringify(data))
      setLoginData(data)
      navigate("/Profile")
    }
  }

 //This is logout function
 const Logout = () => {
sessionStorage.removeItem('token')

//An empty string(loginData) is equal to false, 
//so then i can log in by pressing the logout button 
setLoginData('')

 }


  return (
     <>
{/* Using ternary operator */}
    
    {!loginData ? (

      <form method='POST'>
        <h1>LOGIN</h1>
     
        <div>
             <label htmlFor="username" >Brugernavn:</label>
             <input type="text" name='username' />
        </div>
   
        <div>
             <label htmlFor="Adgangskode">Adgangskode:</label>
             <input type="password" name='password' />
        </div>
        <div className="sb">
   {/* Adding onClick with event shoud call submitHandle with itself(event)*/}
         <button type="button" onClick={e => submitHandle(e)}> Login</button>
        </div>
      </form>

    ): (
    
      <div className="sb">
        <p>Du er logget ind</p>
        <br />
       
          <Link to={`/Profile`}>
          Log ud
          </Link>
         
      </div>
      
    )
    }
   
  
   </>
  )
}

export default NLogin