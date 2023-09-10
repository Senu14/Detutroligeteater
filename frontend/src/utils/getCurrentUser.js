// // import jwt from 'jsonwebtoken';

// const getCurrentUser = () => {
//      // Check if the access token is stored in local storage
//      const accessToken = localStorage.getItem('access_token');
   
//      // Alternatively, you can check cookies if you store tokens there
   
//      if (accessToken) {
//        try {
//          // Decode the access token
//          const decodedToken = jwt.decode(accessToken, process.env.TOKEN_ACCESS_KEY);
   
//          if (!decodedToken || !decodedToken.data) {
//            return null;
//          }
   
//          // Extract user information from the decoded token
//          const user = {
//            id: decodedToken.data.id,
//            firstname: decodedToken.data.firstname,
//            lastname: decodedToken.data.lastname,
//            // Add more properties as needed
//          };
   
//          return user;
//        } catch (error) {
//          // Handle token decoding errors here (e.g., token is invalid)
//          console.error('Error decoding token:', error);
//          return null;
//        }
//      }
   
//      // If no access token is found, return null
//      return null;
//    };
   
//    export default getCurrentUser;
   