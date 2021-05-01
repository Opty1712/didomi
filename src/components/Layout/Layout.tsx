import { styled } from 'linaria/react';
import React, { memo } from 'react';
import { useSwitcher } from '../../utils';
import { Content } from './Content';
import { Header } from './Header';
import { Left } from './Left';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = memo<LayoutProps>(({ children }) => {
  const { isSwitchedOn, toggleSwitcher } = useSwitcher(true);

  return (
    <Root>
      <Header isDrawerOpen={isSwitchedOn} />
      <Left isDrawerOpen={isSwitchedOn} toggle={toggleSwitcher} />
      <Content isDrawerOpen={isSwitchedOn}>{children}</Content>
    </Root>
  );
});
Layout.displayName = nameof(Layout);

const Root = styled.div`
  display: flex;
`;
