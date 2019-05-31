import { createStackNavigator } from 'react-navigation';

import Project from './profil/Project';
import Profil from './profil/Profil';

const AppNavigator = createStackNavigator({
  Project: { screen: Project },
  Profil: { screen: Profil }
});

export default AppNavigator;
