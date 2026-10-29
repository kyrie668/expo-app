import React, { forwardRef, memo } from 'react';
import { headingStyle } from './styles';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { StyleSheet, type StyleProp, type TextStyle } from 'react-native';
type IHeadingProps = VariantProps<typeof headingStyle> &
  Omit<React.ComponentPropsWithoutRef<'h1'>, 'style'> & {
    as?: React.ElementType;
    style?: StyleProp<TextStyle>;
  };

const MappedHeading = memo(
  forwardRef<HTMLHeadingElement, IHeadingProps>(function MappedHeading(
    {
      size,
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      sub,
      italic,
      highlight,
      style,
      ...props
    },
    ref
  ) {
    const flatStyle = StyleSheet.flatten(style) as React.CSSProperties;
    switch (size) {
      case '5xl':
      case '4xl':
      case '3xl':
        return (
          <h1
            className={headingStyle({
              size,
              isTruncated,
              bold,
              underline,
              strikeThrough,
              sub,
              italic,
              highlight,
              class: className,
            })}
            {...props}
            style={flatStyle}
            ref={ref}
          />
        );
      case '2xl':
        return (
          <h2
            className={headingStyle({
              size,
              isTruncated,
              bold,
              underline,
              strikeThrough,
              sub,
              italic,
              highlight,
              class: className,
            })}
            {...props}
            style={flatStyle}
            ref={ref}
          />
        );
      case 'xl':
        return (
          <h3
            className={headingStyle({
              size,
              isTruncated,
              bold,
              underline,
              strikeThrough,
              sub,
              italic,
              highlight,
              class: className,
            })}
            {...props}
            style={flatStyle}
            ref={ref}
          />
        );
      case 'lg':
        return (
          <h4
            className={headingStyle({
              size,
              isTruncated,
              bold,
              underline,
              strikeThrough,
              sub,
              italic,
              highlight,
              class: className,
            })}
            {...props}
            style={flatStyle}
            ref={ref}
          />
        );
      case 'md':
        return (
          <h5
            className={headingStyle({
              size,
              isTruncated,
              bold,
              underline,
              strikeThrough,
              sub,
              italic,
              highlight,
              class: className,
            })}
            {...props}
            style={flatStyle}
            ref={ref}
          />
        );
      case 'sm':
      case 'xs':
        return (
          <h6
            className={headingStyle({
              size,
              isTruncated,
              bold,
              underline,
              strikeThrough,
              sub,
              italic,
              highlight,
              class: className,
            })}
            {...props}
            style={flatStyle}
            ref={ref}
          />
        );
      default:
        return (
          <h4
            className={headingStyle({
              size,
              isTruncated,
              bold,
              underline,
              strikeThrough,
              sub,
              italic,
              highlight,
              class: className,
            })}
            {...props}
            style={flatStyle}
            ref={ref}
          />
        );
    }
  })
);

const Heading = memo(
  forwardRef<HTMLHeadingElement, IHeadingProps>(function Heading(
    { className, size = 'lg', as: AsComp, ...props },
    ref
  ) {
    const {
      isTruncated,
      bold,
      underline,
      strikeThrough,
      sub,
      italic,
      highlight,
      style,
      ...rest
    } = props;

    if (AsComp) {
      return (
        <AsComp
          className={headingStyle({
            size,
            isTruncated,
            bold,
            underline,
            strikeThrough,
            sub,
            italic,
            highlight,
            class: className,
          })}
          {...rest}
          style={StyleSheet.flatten(style) as React.CSSProperties}
          ref={ref}
        />
      );
    }

    return (
      <MappedHeading className={className} size={size} ref={ref} {...props} />
    );
  })
);

Heading.displayName = 'Heading';

export { Heading };
