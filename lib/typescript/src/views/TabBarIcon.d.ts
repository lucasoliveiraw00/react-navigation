import type { Route } from '@react-navigation/native';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
type Props = {
    route: Route<string>;
    horizontal: boolean;
    badge?: string | number;
    badgeStyle?: StyleProp<TextStyle>;
    activeOpacity: number;
    inactiveOpacity: number;
    activeTintColor: string;
    inactiveTintColor: string;
    renderIcon: (props: {
        focused: boolean;
        color: string;
        size: number;
    }) => React.ReactNode;
    style: StyleProp<ViewStyle>;
    useNativeDriver?: boolean;
};
export default function TabBarIcon({ route, horizontal, badge, badgeStyle, activeOpacity, inactiveOpacity, activeTintColor, inactiveTintColor, renderIcon, style, useNativeDriver, }: Props): JSX.Element;
export {};
//# sourceMappingURL=TabBarIcon.d.ts.map