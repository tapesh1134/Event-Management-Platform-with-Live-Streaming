import { Route, Routes } from 'react-router-dom';
import './App.css';
import Facecall from './components/Facecall';
import { SocketProvider } from './providers/Socket';
import Homepage from './pages/Home';


function App() {
  return (
    <div className='App'>
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;