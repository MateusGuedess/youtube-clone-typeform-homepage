import React from 'react'
import FirstAndSecond from './components/FirstAndSecond';
import { Main, Section, Stick } from './styles'
import GlobalStyles from './styles/global'
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Main style={{height: '1610vh'}}>
        <Section style={{height: '72.7%'}}>
          <FirstAndSecond />
        </Section>

        <Section style={{height: '9.7%'}}>
          <Stick className="third"/>
        </Section>

        <Section style={{height: '10.1%'}}>
          <Stick className="fourth"/>
        </Section>
      </Main>
    </>
  );
}

export default App;
