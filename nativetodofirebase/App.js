import { createDrawerNavigator } from '@react-navigation/drawer';
import article from './screens/article';
import feed from './screens/feed';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={feed} />
        <Drawer.Screen name="Article" component={article} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}