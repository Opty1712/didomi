import { Box, Link, Typography } from '@material-ui/core';
import { css } from 'linaria';
import React, { memo } from 'react';

/**
 * Footer of the page
 */
export const Footer = memo(() => (
  <Box pt={4} className={footer}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Opty1712">
        Opty1712
      </Link>
    </Typography>
  </Box>
));
Footer.displayName = nameof(Footer);

const footer = css`
  margin-top: 20px;
`;
