import PrimerComponente from './components/PrimerComponente';
import Botones from './components/Botones';
import BarraDeBusqueda from './components/BarraDeBusqueda';
import Head from 'next/head';


function App() {
  return (
    <>
      <Head>
        <link rel="icon" href="Magneto.Logo.jpg" />
        <title>Magneto Freelance</title>
      </Head>
    <div >
    </div>
      <div className='mainPage'>
        <PrimerComponente />
        <Botones />
      </div>
      <div className='barradeBusqueda'>
      <BarraDeBusqueda />
      </div>
    </>
  );
}

export default App;
