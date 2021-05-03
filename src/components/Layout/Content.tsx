import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { css, cx } from 'linaria';
import React, { memo } from 'react';
import { drawerWidth, transitionDuration } from '../../constants';
import { Footer } from './Footer';
import { CommonProps } from './interface';

/** Props for `Content` */
type ContentProps = CommonProps & { children: React.ReactNode };

/**
 * Layout of conntent part of the page
 */
export const Content = memo<ContentProps>(
  ({ isLeftColumnFullyVisible, children }) => (
    <Container
      maxWidth="lg"
      className={cx(container, isLeftColumnFullyVisible && containerSmall)}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>{children}</Paper>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  )
);
Content.displayName = nameof(Content);

const container = css`
  transition: margin-left ${transitionDuration};
  margin-top: 80px;

  && {
    margin-left: 60px;
  }
`;

const containerSmall = css`
  && {
    margin-left: ${drawerWidth};
  }
`;
