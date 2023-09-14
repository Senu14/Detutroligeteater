import { useForm } from "react-hook-form";
import './Login.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';




const Login = () => {

const { loginData, setLoginData } = useAuth()   // A hook from AuthProvider //
const navigate = useNavigate()
const { register, handleSubmit, formState: { errors } } = useForm();






//Adding an error function med asynchrony 
const onSubmit = async form => {
    const formData = new URLSearchParams()
    formData.append("username", form.username)
    formData.append("password", form.password)
//Here using the spread operator(...)
  // console.log(...formData);


  try{
      const result = await axios.post("http://localhost:4000/login", formData) 
      if(result.data){
 // Save JSON in our sessionstorage
        sessionStorage.setItem("token",JSON.stringify(result.data))
        setLoginData(result.data)
      }

//Catch for error message//    
    }catch(error) { 
      console.log(`kunne ikke logge ind: ${error}`);// This is error message//
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
    
    {!loginData  && !loginData.username ? (

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>LOGIN</h1>
     
        <div>
            <label htmlFor="username" >Brugernavn:</label>
            <input  placeholder="Indtast brugernavn" 
            {...register('username', { required: true })} />

            {errors.username && <span className="error">
              Du skal indtaste dit brugernavn</span>}
        </div>
   
        <div>
            <label htmlFor="Adgangskode">Adgangskode:</label>
            <input  placeholder="Indtast password" 
            {...register('password', { required: true })} />

            {errors.password && <span className="error">
              Du skal indtaste din adgangskode</span>} 
        </div>
        <div className="sb">
        <button type="submit">
        <Link to={`/Profile`}>
        Login
          </Link></button>
         
          </div>
      </form>
    ): (
     // Vis logindata hvis bruger er logget ind
     <div className="sb">
       
        <br />
       
         
          </div>
 )}
  </>
  )
}

export default Login