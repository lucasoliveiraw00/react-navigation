import { Animated, StyleProp, TextStyle } from 'react-native';
type Props = {
    /**
     * Whether the badge is visible
     */
    visible: boolean;
    /**
     * Content of the `Badge`.
     */
    children?: string | number;
    /**
     * Size of the `Badge`.
     */
    size?: number;
    /**
     * Style object for the tab bar container.
     */
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>>;
    /**
     * Whether to use the native driver for animations. Enabling this can lead to improved
     * performance as animations are offloaded to the native side of the app.
     *
     * Defaults to `true` if supported by the animation library being used.
     */
    useNativeDriver?: boolean;
};
export default function Badge({ children, style, visible, size, useNativeDriver, ...rest }: Props): JSX.Element | null;
export {};
//# sourceMappingURL=Badge.d.ts.map