import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { css, cx } from 'linaria';
import React, { memo } from 'react';
import { drawerWidth, transitionDuration } from '../../constants';
import { CommonProps } from './interface';

export const Header = memo<CommonProps>(({ isDrawerOpen }) => (
  <AppBar
    position="absolute"
    className={cx(appBar, isDrawerOpen && appBarShift)}
  >
    <Toolbar>
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        Consents
      </Typography>
    </Toolbar>
  </AppBar>
));
Header.displayName = nameof(Header);

const appBar = css`
  padding-left: 70px;

  && {
    transition: padding-left ${transitionDuration};
  }
`;

const appBarShift = css`
  padding-left: ${drawerWidth};
  transform: translateX(10px);
`;
