import * as React from 'react';
import styled from 'styled-components';

const Toolbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  min-height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.toolbarColor};
  color: ${props => props.theme.colors.light}
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);
`;

export default Toolbar;
