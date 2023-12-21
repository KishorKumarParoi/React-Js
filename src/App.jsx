import Demo from "./components/Demo";
import Form from "./components/Form.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Todo from "./components/Todo.jsx";
import ContactForm from "./components/contactForm.jsx";
import Footer from "./components/footer.jsx"
import Menu from "./Menu.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import UseEffect from './components/useEffect';
import NotFound from './components/NotFound';
import Random from "./components/Random.jsx";
import TailwindCSS from "./components/TailwindCSS.jsx";

const App = () => {
  let personObj = {
    name: 'Kishor Kumar Paroi',
    age: 24,
    Aim: "500k Dollar Earning",
  }

  let btnClick = () => {
    alert('Hello World!')
  }
  return (
    <div>

      <HashRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/effect" element={<UseEffect />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/form" element={<Form />} />
          <Route path="/demo/:name/:Age/:JobRole" element={<Demo />} />
          <Route path="/contactForm" element={<ContactForm />} />
          <Route path="/random" element={<Random/>} />
          <Route path="/tailwind" element={<TailwindCSS/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <Hero />
      <Header childBtnClick={btnClick} item={personObj} title="Practicing React Js" des="Learning React from documentation"></Header>
      <Footer />
    </div>
  );
};

export default App;
