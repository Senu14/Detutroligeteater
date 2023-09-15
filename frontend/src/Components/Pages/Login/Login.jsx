import { useForm } from "react-hook-form";
import './Login.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';



const Login = () => {
  // Destructor loginData + setter fra useAuth
  const { loginData, setLoginData } = useAuth()
  // Destructor elementer fra useForm
  const { register, handleSubmit, formState: { errors } } = useForm();

  /**
   * Kaldes når form submittes
   * Samler form input values og kalder API endpoint med et POST request
   * @param {object} form Form som javascript objekt 
   */
  const onSubmit = async form => {
    // Samler data med URLSearchParams API
    const formData = new URLSearchParams()
    formData.append("username", form.username)
    formData.append("password", form.password)

    try {
      // Kalder API
      const result = await axios.post("http://localhost:4000/login",formData)
      if(result.data) {
        // Gemmer json retursvar i sessionstorage
        sessionStorage.setItem("token", JSON.stringify(result.data))
        // Skriver json retursvar til tilstandsvariabel loginData
        setLoginData(result.data)  
      }
    } catch (error) {
        console.log(`Kunne ikke logge ind: ${error}`);
    }
  }

  /**
   * Kaldes ved klik på logout knap
   */
  const Logout = () => {
    // Fjerner login info fra session storage
    sessionStorage.removeItem("token")
    // Nulstiller tilstandsvariabel
    setLoginData("")
  }

  return (
    <div>
    {/* Using ternary operator */}
    {!loginData && !loginData.username ? (
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
            <button type="submit">LOGIN</button>
          </div>
        </form>
      ) : (
        // Vis logindata hvis bruger er logget ind
        <div className="Profile">
          <p>
            {`Du er logget ind som: ${loginData.user.firstname} ${loginData.user.lastname} `}
          </p>


          <div className="B1">
          <button onClick={Logout}>
          <Link to={`/`}>
          LOGOUT
          </Link>
          </button>
          </div>


         <div className="B2">
          <button onClick={Logout}>
          <Link to={`/Profile`}>
            MIN SIDE
          </Link>
          </button>
          </div>
          
        </div>
      )}
    </div>
  )
}

export default Login