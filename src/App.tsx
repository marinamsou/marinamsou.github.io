import styled from 'styled-components';

import GlobalStyles from 'styles';

const Title = styled.h1`
  color: green;
`;

function App() {
  return (
    <main>
      <GlobalStyles />
      <Title>My app</Title>
    </main>
  );
}

export default App;
