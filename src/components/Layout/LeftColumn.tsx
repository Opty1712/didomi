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
import React, { memo } from 'react';
import { drawerWidth, transitionDuration } from '../../constants';
import { CommonProps } from './interface';

/** Props for `LeftColumn` */
type LeftColumnProps = CommonProps & {
  toggle: () => void;
};

/**
 * Left Column layout
 */
export const LeftColumn = memo<LeftColumnProps>(
  ({ isLeftColumnFullyVisible, toggle }) => {
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: cx(drawerPaper, !isLeftColumnFullyVisible && drawerPaperClose)
        }}
        open={isLeftColumnFullyVisible}
      >
        <Arrow>
          <IconButton onClick={toggle}>
            <ChevronLeftIcon
              className={cx(
                iconButton,
                !isLeftColumnFullyVisible && iconButtonClosed
              )}
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
  }
);
LeftColumn.displayName = nameof(LeftColumn);

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
