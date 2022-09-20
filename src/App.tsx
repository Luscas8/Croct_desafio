import { CroctProvider } from '@croct/plug-react';
import HomePage from './pages/HomePage/HomePage';
import { GlobalStyled } from './GlobalStyled';


export default function App() {
  return (
    <CroctProvider appId="00000000-0000-0000-0000-000000000000">
      <GlobalStyled />
      <HomePage />
    </CroctProvider>
  );
}
