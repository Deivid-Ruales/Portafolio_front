import { Header } from './components/header';
import { About } from './components/about';
import { Welcome } from './components/welcome';
import { Footer } from './components/footer';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Experience } from './components/experience';

function App() {
  return (
    <>
    <Header/>
    <Welcome/>
    <Projects/>
    <Skills/>
    <Experience/>
    <About/>
    <Footer/>
    </>
  );
}

export default App;
