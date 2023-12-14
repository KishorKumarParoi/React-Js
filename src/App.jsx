import Demo from "./components/Demo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/contactForm.jsx";
import Footer from "./components/footer.jsx"
import { Fragment } from "react";

const App = () => {
  let marks = 89;
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
      <Demo />
      <Header childBtnClick={btnClick} item={personObj} title="Practicing React Js" des="Learning React from documentation" />
      <ContactForm />

      <div>
        <h1>My App</h1>
        <p>This is my app</p>
        <Fragment>
          <p>{new Date().getMinutes()}</p>
          <button onClick={() => alert("Hello World!")}>Click</button>

          <div>
            {(() => {
              let x = 10;
              let y = 20;
              let z = x + y;
              console.log(z);
              console.log("kkp");
            })()}
          </div>

          <h1 className="aim">Becoming 500k Dollar Earner Developer</h1>

          {/* {marks > 90 ? <h1>Briliant Result</h1> : <h1>Poor Result</h1>} */}

          <div>
            {(() => {
              if (marks > 90) {
                return <h1>Briliant Result</h1>;
              } else if (marks > 80) {
                return <h1>Good Result</h1>;
              } else {
                return <h1>Poor Result</h1>;
              }
            })()}
          </div>
        </Fragment>
      </div>

      <Hero />
      <Footer />
    </div>
  );
};

export default App;
