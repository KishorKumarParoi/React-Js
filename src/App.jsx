import Demo from "./components/Demo.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Todo from "./components/Todo.jsx";
import Menu from "./Menu.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import UseEffect from './components/UseEffect.jsx';
import NotFound from './components/NotFound.jsx';
import Random from "./components/Random.jsx";
import TailwindCSS from "./components/TailwindCSS.jsx";
import Button from "./components/Button.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from './components/Footer.jsx';

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
      <h1 className="text-2xl">Hello KKP</h1>
      <Button className="bg-green-500" />

      <HashRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/effect" element={<UseEffect />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/form" element={<Form />} />
          <Route path="/demo/:name/:Age/:JobRole" element={<Demo />} />
          <Route path="/contactForm" element={<ContactForm />} />
          <Route path="/random" element={<Random />} />
          <Route path="/tailwind" element={<TailwindCSS />} />
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
