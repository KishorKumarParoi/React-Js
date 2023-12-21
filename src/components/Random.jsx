import { Fragment } from "react";
import CssStyle from "./CssStyle";
import FetchAndShowData from "./FetchAndShowData";
import Forms from "./Forms";
import UseState from "./UseState";
import Menu from "../Menu";

const Random = () => {
    let marks = 89;
    return (
        <div>
            <Menu />
            <div>
                <h1>My App</h1>
                <p>This is my app</p>
                <UseState />
                <FetchAndShowData />
                <Forms />
                <CssStyle />
                <Fragment>
                    <p>{new Date().getMinutes()}</p>
                    <button onClick={() => alert("Hello World!")}>Click</button>

                    <div>
                        {(() => {
                            // let x = 10;
                            // let y = 20;
                            // let z = x + y;
                            // console.log(z);
                            // console.log("kkp");
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

        </div>
    );
};

export default Random;