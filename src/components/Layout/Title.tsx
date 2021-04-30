import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';

export const Title = memo((props) => (
  <Typography component="h2" variant="h6" color="primary" gutterBottom>
    {props.children}
  </Typography>
));
Title.displayName = nameof(Title);
