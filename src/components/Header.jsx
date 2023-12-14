
const header = (props) => {

    const demo = () => {
        alert('Learn React, Redux, Nextjs before 18')
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.des}</h2>
            <button onClick={demo}>secret msg</button>
            <ul>
                <li>Home</li>
                <li>Others</li>
            </ul>

            <button onClick={props.childBtnClick}> Click Me</button>

            <ul>
                <li>{props.item['name']}</li>
                <li>{props.item['age']}</li>
                <li>{props.item['Aim']}</li>
            </ul>

        </div>
    );
};

export default header;