const initialState = {
     formObject: {
       firstname: '',
       lastname: '',
       address: '',
       zipcode: '',
       city: '',
       seats: '',
     },
   };
   
   const formReducer = (state = initialState, action) => {
     switch (action.type) {
       case 'UPDATE_FORM_OBJECT':
         return {
           ...state,
           formObject: action.payload,
         };
       default:
         return state;
     }
   };
   
   export default formReducer;
   