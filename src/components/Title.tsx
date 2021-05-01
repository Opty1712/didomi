import Typography from '@material-ui/core/Typography';
import { css } from 'linaria';
import React, { memo } from 'react';

export const Title = memo((props) => (
  <Typography
    component="h2"
    variant="h6"
    color="primary"
    gutterBottom
    className={title}
  >
    {props.children}
  </Typography>
));
Title.displayName = nameof(Title);

const title = css`
  && {
    padding: 20px 0 10px 20px;
  }
`;
