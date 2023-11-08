import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomBottomTab from '../views/components/custom_bottom_tab';
import ProductsScreen from '../views/screens/products_screen';
import FavoritesScreen from '../views/screens/favorites_screen';
import CartScreen from '../views/screens/cart_screen';
import ProfileScreen from '../views/screens/profile_screen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
            <Tab.Group
                screenOptions={{ headerShown: false }}>
                <Tab.Screen options={{ tabBarLabel: 'Home' }} name="Products" component={ProductsScreen} />
                <Tab.Screen options={{ tabBarLabel: 'Cart' }} name="Cart" component={CartScreen} />
                <Tab.Screen options={{ tabBarLabel: 'Favorites' }} name="Favorites" component={FavoritesScreen} />
                <Tab.Screen options={{ tabBarLabel: 'Profile' }} name="Profile" component={ProfileScreen} />
            </Tab.Group>
        </Tab.Navigator>
    );
};
export default BottomTabs;
