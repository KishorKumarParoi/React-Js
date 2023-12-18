import { useState } from "react";

const Todo = () => {

    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const addToList = () => {
        list.push(item);
        setList([...list]);
    }

    const removeItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    }
    return (
        <div>
            <input onChange={(e) => setItem(e.target.value)} type="text" placeholder="Item" />
            <button onClick={addToList}>Add</button>
            <table>
                <thead>
                    <tr>
                        <td>Todo</td>
                        <td>Remove</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        list.map((element, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <td>{element}</td>
                                    <td><button onClick={() => removeItem(index)}>remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Todo;