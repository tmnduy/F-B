import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';
import Home from './src/screen/home/Home';
import Orders from './src/screen/oders/Orders';
import Favorites from './src/screen/favorites/Favorites';
import Profile from './src/screen/profile/Profile';

// function <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>({children, to, activeOnlyWhenExact}) {
//   return (
//     <Route
//       path={to}
//       exact={activeOnlyWhenExact}
//       children={({match}) => (
//         <Link style={styles.navItem} underlayColor="#f0f4f7" to={to}>
//           <View style={{flexDirection: 'row'}}>
//             {match && <Text style={styles.icon}>&rsaquo; </Text>}
//             {children}
//           </View>
//         </Link>
//       )}
//     />
//   );
// }
function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/orders" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Orders</Text>
          </Link>
          <Link to="/favorites" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Favorites</Text>
          </Link>
          <Link to="/profile" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Profile</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/orders" component={Orders} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/profile" component={Profile} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1000,
    marginTop: 25,
    padding: 10,
    flex: 1,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 0,
    marginBottom: 10,
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
  icon: {
    color: '#ff0000',
    fontSize: 25,
  },
});

export default App;
