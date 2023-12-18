import { useState } from "react";

const Form = () => {
    let [FormObj, SetFormObj] = useState({
        fName: "Bill",
        lName: "Gates",
        city: "",
        gender: "Male"
    });

    const InputToChange = (property, value) => {
        SetFormObj(FormObj => ({
            ...FormObj,
            [property] : value
        }))
    }

    const FormSubmit = (e)=> {
        e.preventDefault();
        alert(JSON.stringify(FormObj));
        console.log(FormObj);
    }

    return (
        <div className="container">
            <form action="" onSubmit={FormSubmit}>
                <input type="text" value={FormObj.fName} onChange={(e)=>InputToChange("fName", e.target.value)} placeholder="First Name" />
                <input type="text" value={FormObj.lName} onChange={(e)=>InputToChange("lName", e.target.value)} placeholder="Last Name" />
                <select name="city" id="city" onChange={(e)=> InputToChange("city", e.target.value)} value={FormObj.city}>
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rajshahi">Rajshahi</option>
                </select>
                <br />
                <input onChange={()=> InputToChange("gender", "Male")} checked={FormObj.gender === "Male"} type="radio" name="gender" />Male
                <input type="radio" onChange={()=> InputToChange("gender", "Female")} checked={FormObj.gender === "Female"} name="gender" />Female
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Form;