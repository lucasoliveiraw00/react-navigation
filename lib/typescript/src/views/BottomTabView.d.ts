import type { ParamListBase, TabNavigationState } from '@react-navigation/native';
import type { BottomTabDescriptorMap, BottomTabNavigationConfig, BottomTabNavigationHelpers } from '../types';
type Props = BottomTabNavigationConfig & {
    state: TabNavigationState<ParamListBase>;
    navigation: BottomTabNavigationHelpers;
    descriptors: BottomTabDescriptorMap;
    useNativeDriver?: boolean;
};
export default function BottomTabView(props: Props): JSX.Element;
export {};
//# sourceMappingURL=BottomTabView.d.ts.map