import {ParamListBase, createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<ParamListBase>();

export default class MyStackNavigator {

    static resetAndGo = (path: string) => {
        if (navigationRef.isReady()) {
            navigationRef.reset({
                index: 0,
                routes: [{name: path}]
            })

        }
    }

    static goToPage = (path: string, params?: any) => {
        if (navigationRef.isReady()) {
            navigationRef.navigate(path, params);

        }
    }

}
