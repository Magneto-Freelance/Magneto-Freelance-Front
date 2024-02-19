import PrimerComponente from './components/PrimerComponente';
import Botones from './components/Botones';
import BarraDeBusqueda from './components/BarraDeBusqueda';
import Switchh from './components/Switchh';



function App() {
  return (
    <>
    <div className='Switch'>
      <Switchh />
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
