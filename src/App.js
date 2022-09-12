import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './components/hero/header';
import { Hero } from './components/hero/heroBlock';
import { Cards } from './components/info/cards';
import { Info } from './components/info/infoBlock';
import { Form } from './components/footer/form';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
    <>
    <Header />
    <Hero />
    <Info />
    <Cards />
    <Form />
    <Footer />
    </>
    </BrowserRouter>
  );
}

export default App;
