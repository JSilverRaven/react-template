import React from 'react';
import styled from 'styled-components';


const AppContainer = styled.div`
  background-color: #2f353d;
  min-height: 100vh;
`;

const CenteredContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

const WhiteText = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: auto;
`;

const ComingSoon = () => (
  <AppContainer>
    <CenteredContainer>
      <WhiteText>Coming Soon...</WhiteText>
    </CenteredContainer>
  </AppContainer>
);

const App = () => {
  return (
    <ComingSoon />
  );
};

export default App;