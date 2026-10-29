import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { hstackStyle } from './styles';

type IHStackProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'style'> &
  VariantProps<typeof hstackStyle> & {
    style?: StyleProp<ViewStyle>;
  };

const HStack = React.forwardRef<React.ComponentRef<'div'>, IHStackProps>(
  function HStack({ className, space, reversed, style, ...props }, ref) {
    return (
      <div
        className={hstackStyle({ space, reversed, class: className })}
        {...props}
        style={StyleSheet.flatten(style) as React.CSSProperties}
        ref={ref}
      />
    );
  }
);

HStack.displayName = 'HStack';

export { HStack };
