// import React, {useContext} from 'react';
// import {View} from 'react-native';
// import OldlaceButton from '../button/lightorange-button';
// import {LogOut, Settings} from 'lucide-react-native';
// import {logoutUser} from '../../utils/authUtils';
// import {AuthContext} from '../../context/auth-context';

// const DrawerFooter = ({isLoggedIn}) => {
//   const {setUser, setIsLoggedIn} = useContext(AuthContext);

//   const handelLogout = async () => {
//     logoutUser();
//     setUser(null);
//     setIsLoggedIn(false);
//   };

//   return (
//     <View
//       style={{
//         flex: isLoggedIn ? 0.6 : 0.3,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderTopColor: 'gray',
//         borderTopWidth: 1,
//       }}>
//       {isLoggedIn && (
//         <OldlaceButton
//           title="Log Out"
//           onPress={handelLogout}
//           btnIcon={<LogOut size={20} color="black" />}
//         />
//       )}
//       <OldlaceButton
//         title="Settings"
//         onPress={() => {}}
//         btnIcon={<Settings size={20} color="black" />}
//       />
//     </View>
//   );
// };

// export default DrawerFooter;
