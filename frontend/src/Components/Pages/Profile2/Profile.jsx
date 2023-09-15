// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext, AuthProvider, useAuth } from '../../Providers/AuthProvider';

// const Profile = () => {
 
//   const navigate = useNavigate() 
//   const [reservations, setReservations] = useState([]);
//   const { loginData, setLoginData } = useAuth();

//   console.log("loginData:", loginData);

//   //This is logout function
//  const Logout = () => {
//      sessionStorage.removeItem('token')
//      navigate("/")
//      setLoginData('')

    
//   useEffect( async () => {

//       // Fetch reservations
//       try {
//           const reserv = await axios.get(`http://localhost:4000/reservations/1`, {
//             headers: {
//               authorization: `Bearer ${loginData}`,
//             },
//           });
//           console.log("Reservations data:", reserv.data); // Check the data received
//           setReservations(reserv.data);
//           console.log("Reservations state after setting:", reservations); // Check the state after setting
//         } catch (error) {
//           console.error('Error fetching reservations:', error);
//         }
        
        
//   }, [loginData]);

//   console.log("Reservations state:", reservations);

  


//   return (
//      <div><h1>ehi a5dem</h1>

//       {/* {!loginData || !loginData.user ? (
//         <h1>Profile</h1>
//       ) : (
//         <div>
//           <p>
//             Du er logget ind som: {`${loginData.user.firstname} ${loginData.user.lastname} `}
//           </p>
//           <button onClick={Logout}>
//             <Link to={`/log`}>Logout</Link>
//           </button>
//         </div>
//       )} */}
//       <h2>Reservations</h2>
//       {reservations.length === 0 ? (
//         <p>No reservations found.</p>
//       ) : (
//         <ul>
//           {reservations.map((reservation) => (
//             <li key={reservation.id}>
//               <h2>{reservation.email}</h2>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );

// };
// }

// export default Profile;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext, AuthProvider, useAuth } from '../../Providers/AuthProvider';

const Profile = () => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const { loginData, setLoginData } = useAuth();

  console.log('login :', loginData)

  const Logout = () => {
    sessionStorage.removeItem('token');
    navigate("/");
    setLoginData('');
  };

  useEffect(() => {
    // Fetch reservations
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/events/`)
        // , {
        //   headers: {
        //     Authorization: `Bearer ${loginData}`,
        //   },
        // }  
        // );
        console.log("events data:", response.data);
        let reserv = [];
        for (let i=0;i<response.data.length;i++){
          console.log(response.data[i].id);
          let id = response.data[i].id;
          let resp = await axios.get(`http://localhost:4000/reservations/${id}`)
          console.log(resp.data);
          if(resp.data){
            reserv.push(resp.data);
          }
        } 
        
        setReservations(reserv);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    
    fetchData();
  }, [loginData]);

  return (
    <div>
      {loginData && loginData.user && (
        <div>
          <p>
            Du er logget ind som: {`${loginData.user.firstname} ${loginData.user.lastname} `}
          </p>
          <button onClick={Logout}>
            <Link to={`/log`}>Logout</Link>
          </button>
        </div>
      )}

      <h1>Profile</h1>
      <h2>Reservations</h2>
      {/* Render reservation data here */}
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <h3>{reservation.email}</h3>
          <h3>{reservation.address}</h3>
          <h3>{reservation.zipcode}</h3>
          <h3>{reservation.event.title}</h3>
          <h3>{reservation.event.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Profile;
