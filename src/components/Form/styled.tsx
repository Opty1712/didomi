import { css } from 'linaria';
import { styled } from 'linaria/react';

export const Root = styled.form`
  padding-bottom: 20px;
  display: inline-block;
`;

export const field = css`
  && {
    margin: 0 20px;
  }
`;

export const text = css`
  padding: 20px 0 0 0;
  text-align: center;
  display: block;
`;

export const consents = css`
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;

  & .PrivateSwitchBase-input-11 {
    display: none;
  }

  & .PrivateSwitchBase-root-1 {
    padding: 12px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
