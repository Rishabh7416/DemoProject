// import Auth from '@react-native-firebase/auth';
// import { useSelector } from 'react-redux';

// const {WOMEN_DATA} = useSelector(STORE => STORE.categoriesReducer);

// const LogInAccountWithEmailPassword = () => {};

// const SignInWithPhoneNumber = (
//   phoneNumber,
//   authorized,
//   authenticationFailure,
// ) => {
//   Auth()
//     .signInWithPhoneNumber(phoneNumber)
//     .then(userData => {
//       authorized(userData);
//     })
//     .catch(error => {
//       authenticationFailure(error);
//     });
// };

// const SignUpWithEmailPassword = (
//   email,
//   password,
//   authorized,
//   authenticationFailure,
// ) => {
//   Auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(userData => {
//       authorized(userData);
//     })
//     .catch(errorInSignUp => {
//       AuthenticationErrorHandling(errorInSignUp);
//       authenticationFailure(errorInSignUp);
//     });
// };

// const SignUpWithPhoneNumber = (
//   phoneNumber,
//   authorized,
//   authenticationFailure,
// ) => {};

// const LogOutFirebaseAccount = () => {};

// const AuthenticationErrorHandling = errorMessages => {
//   switch (errorMessages) {
//     case 'USER IS NOT AUTHORIZED':
//       alert('USER IS NOT AUTHORIZED');
//       break;
//     default:
//       break;
//   }
// };

// const DataFormat = () => {
//   let api_data_index = WOMEN_DATA.find((item, index) => {
//     if (item.type == 'circleItemSlider'){
//       console.log('index', index)
//       return item.items
//     }
//     else{
//       console.log('check the condition');
//     }
//   });
//   console.log('api_data_index', api_data_index);
//   return api_data_index;
// };

// export {
//   LogInAccountWithEmailPassword,
//   SignUpWithEmailPassword,
//   SignUpWithPhoneNumber,
//   LogOutFirebaseAccount,
//   SignInWithPhoneNumber,
//   DataFormat
// };
