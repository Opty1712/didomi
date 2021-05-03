import Typography from '@material-ui/core/Typography';
import { css } from 'linaria';
import React, { memo } from 'react';

/**
 * Title of the page
 */
export const Title = memo(({ children }) => (
  <Typography
    component="h2"
    variant="h6"
    color="primary"
    gutterBottom
    className={title}
  >
    {children}
  </Typography>
));
Title.displayName = nameof(Title);

const title = css`
  && {
    padding: 20px 0 10px 20px;
  }
`;
