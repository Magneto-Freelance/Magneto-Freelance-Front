import PrimerComponente from './components/PrimerComponente';
import Botones from './components/Botones';
import BarraDeBusqueda from './components/BarraDeBusqueda';

function App() {
  return (
    <>
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
