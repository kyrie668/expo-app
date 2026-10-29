import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

import { vstackStyle } from './styles';

type IVStackProps = Omit<React.ComponentProps<'div'>, 'style'> &
  VariantProps<typeof vstackStyle> & {
    style?: StyleProp<ViewStyle>;
  };

const VStack = React.forwardRef<React.ComponentRef<'div'>, IVStackProps>(
  function VStack({ className, space, reversed, style, ...props }, ref) {
    return (
      <div
        className={vstackStyle({ space, reversed, class: className })}
        {...props}
        style={StyleSheet.flatten(style) as React.CSSProperties}
        ref={ref}
      />
    );
  }
);

VStack.displayName = 'VStack';

export { VStack };
