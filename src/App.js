import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import Home from './routes/Home';
import Agenda from './routes/Agenda';
import Casos from './routes/Casos';
import Mailbox from './routes/Mailbox';
import NotFound from './routes/NotFound';
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>}>
                  <Route index element={<Home/>}/>
                  <Route path="agenda" element={<Agenda/>}/>
                  <Route path='casos' element={<Casos/>}/>
                  <Route path='mailbox' element={<Mailbox/>}/>
                  <Route path='*' element={<NotFound/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
