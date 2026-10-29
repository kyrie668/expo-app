import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { StyleSheet, type StyleProp, type TextStyle } from 'react-native';
import { textStyle } from './styles';

type ITextProps = Omit<React.ComponentProps<'span'>, 'style'> &
  VariantProps<typeof textStyle> & {
    style?: StyleProp<TextStyle>;
  };

const Text = React.forwardRef<React.ComponentRef<'span'>, ITextProps>(
  function Text(
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size = 'md',
      sub,
      italic,
      highlight,
      style,
      ...props
    }: { className?: string } & ITextProps,
    ref
  ) {
    return (
      <span
        className={textStyle({
          isTruncated,
          bold,
          underline,
          strikeThrough,
          size,
          sub,
          italic,
          highlight,
          class: className,
        })}
        {...props}
        style={StyleSheet.flatten(style) as React.CSSProperties}
        ref={ref}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text };
