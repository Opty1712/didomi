import { Divider, Drawer, IconButton, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ViewListIcon from '@material-ui/icons/ViewList';
import { css, cx } from 'linaria';
import { styled } from 'linaria/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import { drawerWidth, transitionDuration } from '../../constants';
import { CommonProps } from './interface';

type MenuProps = CommonProps & {
  toggle: () => void;
};
export const Left = memo<MenuProps>(({ isDrawerOpen, toggle }) => {
  const { push } = useRouter();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: cx(drawerPaper, !isDrawerOpen && drawerPaperClose)
      }}
      open={isDrawerOpen}
    >
      <Arrow>
        <IconButton onClick={toggle}>
          <ChevronLeftIcon
            className={cx(iconButton, !isDrawerOpen && iconButtonClosed)}
          />
        </IconButton>
      </Arrow>
      <Divider />
      <List>
        <Link href="/add">
          <ListItem button>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Give consent" />
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="Collected consents" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
});
Left.displayName = nameof(Left);

const drawerPaper = css`
  position: relative;
  white-space: nowrap;
  width: ${drawerWidth};

  && {
    transition: width ${transitionDuration};
  }
`;

const drawerPaperClose = css`
  width: 60px;
`;

const iconButton = css`
  && {
    transition: transform ${transitionDuration};
  }
`;

const iconButtonClosed = css`
  transform: scaleX(-1);
`;

const Arrow = styled.div`
  margin: 7px 0 8px 7px;
`;
