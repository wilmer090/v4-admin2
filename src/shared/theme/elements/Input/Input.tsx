import { InputProps } from 'antd';
import { SearchProps } from 'antd/lib/input';
import React from 'react';

import { CInput, ErrorText, InputLabel, InputWrapper, LabelWrapper, RequiredLabel, SearchButton } from './Input.styled';

type Props = InputProps &
  SearchProps & {
    errorMessage?: string;
    label?: string;
    isRequired?: boolean;
    $fullWidth?: boolean;
    type?: 'text' | 'search' | 'password';
    hasSearchButton?: boolean;
  };
const Input: React.FC<Props> = ({
  errorMessage,
  label,
  type,
  isRequired,
  $fullWidth,
  hasSearchButton,
  ...inputProps
}) => {
  const renderInput = () => {
    switch (type) {
      case 'search':
        return (
          <CInput.Search
            size="large"
            enterButton={hasSearchButton ? <SearchButton>Search</SearchButton> : inputProps.enterButton}
            {...inputProps}
          />
        );
      default:
        return <CInput type={type} {...inputProps} />;
    }
  };

  return (
    <InputWrapper $haserror={!!errorMessage} $isFullWidth={$fullWidth} $hasSearchButton={hasSearchButton}>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <InputLabel>{label}</InputLabel>
        </LabelWrapper>
      )}
      {renderInput()}
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </InputWrapper>
  );
};

export default Input;
