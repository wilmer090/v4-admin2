import { Input, InputNumber, Button } from 'antd';
import styled from 'styled-components';

export const CInput = styled(Input)``;
export const CInputSearch = styled(Input.Search)``;
export const CInputNumber = styled(InputNumber)``;
export const CInputTextArea = styled(Input.TextArea)``;

CInput.defaultProps = {
  size: 'large',
};
CInputSearch.defaultProps = {
  size: 'large',
};

export const InputWrapper = styled.div<{
  $haserror?: boolean;
  $isFullWidth?: boolean;
  $hasSearchButton?: boolean;
}>`
  width: 100%;
  > ${CInput}, ${CInputNumber} {
    border-color: ${({ $haserror }) => $haserror && '#cc0033'};
    background-color: ${({ $haserror }) => $haserror && '#fce4e4'};
    width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};

    &.input-prefix {
      padding: 0;
      .ant-input-prefix {
        background-color: ${({ theme, $haserror }) => ($haserror ? theme.errorColor : theme.greyColor)};
        color: ${({ theme, $haserror }) => $haserror && theme.whiteColor};
        padding: 4px 11px;
        margin-right: 0;
      }

      .ant-input-suffix {
        background-color: ${({ theme, $haserror }) => ($haserror ? theme.errorColor : theme.greyColor)};
        color: ${({ theme, $haserror }) => $haserror && theme.whiteColor};
        padding: 4px 11px;
        margin-right: 0;
      }
    }
    .ant-input {
      background-color: ${({ $haserror }) => $haserror && '#fce4e4'};
      padding: 4px 11px;
    }
  }
  .ant-input-affix-wrapper {
    &:focus,
    &:hover,
    &:active {
      border-color: ${({ theme, $hasSearchButton }) => $hasSearchButton && theme.primaryColor};
      box-shadow: ${({ $hasSearchButton }) => $hasSearchButton && 'none'};
    }
  }
  .ant-input-affix-wrapper-focused {
    box-shadow: ${({ $hasSearchButton }) => $hasSearchButton && 'none'};
    border-color: ${({ theme, $hasSearchButton }) => $hasSearchButton && theme.primaryColor};
    &:focus,
    &:hover,
    &:active {
      border-color: ${({ theme, $hasSearchButton }) => $hasSearchButton && theme.primaryColor};
      box-shadow: none;
    }
  }
`;

export const ErrorText = styled.label`
  display: block;
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.errorColor};
`;
export const LabelWrapper = styled.div`
  display: flex;

  gap: 0.25rem;
`;
export const InputLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.25rem;
  color: #000;
`;
export const RequiredLabel = styled.label`
  color: ${({ theme }) => theme.errorColor};
`;

export const SearchButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff !important;
  font-size: 14px !important;
  border-bottom-right-radius: 4px !important;
  border-top-right-radius: 4px !important;
  border-color: ${({ theme }) => theme.primaryColor};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({ theme }) => theme.secondaryColor};
    background-color: ${({ theme }) => theme.darkColor};
    color: ${({ theme }) => theme.whiteColor};
  }
`;
