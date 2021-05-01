import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography
} from '@material-ui/core';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import React, { memo } from 'react';
import { ConsentVariants } from './interface';
import { Title } from './Layout/Title';

export const Form = memo(() => {
  return (
    <>
      <Title>Give consent</Title>
      <Root noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Name"
          required
          className={field}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          required
          className={field}
        />
        <Typography className={text}>I agree to:</Typography>
        <FormGroup className={consents}>
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                onChange={() => void 0}
                name="checkedA"
                color="primary"
              />
            }
            label={ConsentVariants.ReceiveNewsletters}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                onChange={() => void 0}
                name="checkedA"
                color="primary"
              />
            }
            label={ConsentVariants.BeShownTargetedAs}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                onChange={() => void 0}
                name="checkedA"
                color="primary"
              />
            }
            label={ConsentVariants.ContributeToAnonymousVisitStatistics}
          />
        </FormGroup>
      </Root>
    </>
  );
});
Form.displayName = nameof(Form);

const Root = styled.form`
  padding-bottom: 20px;
  display: inline-block;
`;

const field = css`
  && {
    margin: 0 20px;
  }
`;

const text = css`
  padding: 20px 0 0 0;
  text-align: center;
  display: block;
`;

const consents = css`
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;

  & .PrivateSwitchBase-input-11 {
    display: none;
  }
`;
