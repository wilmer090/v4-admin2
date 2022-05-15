import { Typography } from 'antd';
import styled from 'styled-components';

type CSSTypographyProps = {
  $variant?: 'primary' | 'dark' | 'grey';
  $color?: string;
  $fontSize?: string;
  $fontWeight?: 'light' | 'normal' | 'bold';
};
export const Heading = styled(Typography.Title)<CSSTypographyProps>`
  color: ${({ $color, $variant, theme }) => {
    if (!$color && !$variant) return theme.darkColor;
    if ($variant) {
      if ($variant === 'primary') {
        return theme.primaryColor;
      } else if ($variant === 'dark') {
        return theme.darkColor;
      } else if ($variant === 'grey') {
        return theme.greyColor;
      }
    }
    return $color;
  }} !important;
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '32px')} !important;
  font-weight: ${({ $fontWeight }) =>
    $fontWeight ? ($fontWeight === 'light' ? '400' : $fontWeight) : '700'} !important;
`;

export const SubHeading = styled(Typography.Title)<CSSTypographyProps>`
  color: ${({ $color, $variant, theme }) => {
    if (!$color && !$variant) return theme.darkColor;
    if ($variant) {
      if ($variant === 'primary') {
        return theme.primaryColor;
      } else if ($variant === 'dark') {
        return theme.darkColor;
      } else if ($variant === 'grey') {
        return theme.greyColor;
      }
    }
    return $color;
  }} !important;
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '24px')} !important;
  font-weight: ${({ $fontWeight }) =>
    $fontWeight ? ($fontWeight === 'light' ? '400' : $fontWeight) : '500'} !important;
`;

export const Text = styled(Typography.Paragraph)<CSSTypographyProps>`
  color: ${({ $color, $variant, theme }) => {
    if (!$color && !$variant) return theme.darkColor;
    if ($variant) {
      if ($variant === 'primary') {
        return theme.primaryColor;
      } else if ($variant === 'dark') {
        return theme.darkColor;
      } else if ($variant === 'grey') {
        return theme.greyColor;
      }
    }
    return $color;
  }} !important;
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '16px')} !important;
  font-weight: ${({ $fontWeight }) =>
    $fontWeight ? ($fontWeight === 'light' ? '400' : $fontWeight) : '500'} !important;
`;
