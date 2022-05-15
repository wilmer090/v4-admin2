import { css } from 'styled-components';

export type CSSButtonProps = {
  variant?: 'primary' | 'outlined' | 'danger-outlined';
  $fullwidth?: boolean;
};

export const ButtonBaseStyles = css<CSSButtonProps>`
  overflow: hidden;
  width: ${({ $fullwidth }) => $fullwidth && '100%'};
  background-color: ${({ variant, theme }) => {
    if (variant === 'primary') {
      return theme.primaryColor;
    } else if (variant === 'danger-outlined') {
      return 'transparent';
    } else {
      return 'transparent';
    }
  }};
  color: ${({ variant, theme }) => {
    if (variant === 'primary') {
      return theme.whiteColor;
    } else if (variant === 'danger-outlined') {
      return theme.darkColor;
    } else {
      return theme.darkColor;
    }
  }};
  border-color: ${({ variant, theme }) => {
    if (variant === 'primary') {
      return 'transparent';
    } else if (variant === 'danger-outlined') {
      return theme.lightGreyColor;
    } else {
      return theme.lightGreyColor;
    }
  }};
  padding: 0.5rem 1rem;
  height: auto;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.ant-btn {
    line-height: 1.4;
    padding-top: 0.5rem !important;
  }
  &:hover,
  &:active,
  &:focus {
    border-color: ${({ variant, theme }) => {
      if (variant === 'primary') {
        return theme.secondaryColor;
      } else if (variant === 'outlined') {
        return theme.primaryColor;
      } else if (variant === 'danger-outlined') {
        return theme.dangerColor;
      } else {
        return theme.primaryColor;
      }
    }};
    background-color: ${({ variant, theme }) => {
      if (variant === 'primary') {
        return theme.darkColor;
      } else if (variant === 'danger-outlined' || variant === 'outlined') {
        return 'transparent';
      } else {
        return 'transparent';
      }
    }};
    color: ${({ variant, theme }) => {
      // (variant === 'primary' ? theme.secondaryColor : theme.whiteColor)
      if (variant === 'primary') {
        return theme.whiteColor;
      } else if (variant === 'outlined') {
        return theme.primaryColor;
      } else if (variant === 'danger-outlined') {
        return theme.dangerColor;
      } else {
        return theme.darkColor;
      }
    }};
  }
`;
