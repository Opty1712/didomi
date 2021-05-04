import { styled } from 'linaria/react';
import React, { memo } from 'react';
import { useSwitcher } from '../../utils';
import { Content } from './Content';
import { Header } from './Header';
import { LeftColumn } from './LeftColumn';

/**
 * Layout of the page
 */
export const Layout = memo(({ children }) => {
  const { isSwitchedOn, toggleSwitcher } = useSwitcher(true);

  return (
    <Root data-testid={rootTestId}>
      <Header isLeftColumnFullyVisible={isSwitchedOn} />
      <LeftColumn
        isLeftColumnFullyVisible={isSwitchedOn}
        toggle={toggleSwitcher}
      />
      <Content isLeftColumnFullyVisible={isSwitchedOn}>{children}</Content>
    </Root>
  );
});
Layout.displayName = nameof(Layout);

const Root = styled.div`
  display: flex;
`;

export const rootTestId = 'rootTestId';
