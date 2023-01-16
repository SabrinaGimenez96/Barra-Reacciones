import './App.css';
import Reacciones from './componentes/Reacciones';

function App() {
  return (    
    <div className='App'>   
      <div className='contenedor-principal'>        
          <div className='reacciones'>
          <Reacciones
            nombre='Me gusta'
            imagen='emoji-like'
            alt="emoji de like"
          />
          <Reacciones
            nombre='Me encanta'
            imagen='emoji-corazon'
            alt="emoji de corazon"
          />
          <Reacciones
            nombre='Me divierte'
            imagen='emoji-risa'
            alt="emoji de risa"
          />
          <Reacciones
            nombre='Me sorprende'
            imagen='emoji-sorprendido'
            alt="emoji de sorpresa"
          /> 
          <Reacciones
            nombre='Me entristece'
            imagen='emoji-triste'
            alt="emoji de tristeza"
          />
          <Reacciones
            nombre='Me enoja'
            imagen='emoji-enojado'
            alt="emoji de enojo"
          />                   
          </div>         
        </div>
    </div>
  );
}

export default App;