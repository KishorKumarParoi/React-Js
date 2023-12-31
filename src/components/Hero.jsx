import { useRef } from "react";

const Hero = () => {

    let myImage = useRef();
    let btn = useRef();

    const change = () => {
        btn.setAttribute("marginLeft", "20px")
        btn.setAttribute('color', 'blue');
        myImage.setAttribute('width', '1000px');
        myImage.src = "https://c4.wallpaperflare.com/wallpaper/316/497/192/kung-fu-panda-kung-fu-panda-3-po-kung-fu-panda-wallpaper-preview.jpg"
    }
    return (
        <div>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*wLCHEekWiQAj-Q-Fg_8zcg.jpeg" alt="Kung Fu Panda"
                style={
                    {
                        maxWidth: '50%',
                        height: 'auto',
                        marginLeft: 'auto',
                    }
                } ref={(img) => myImage = img} />

            <button  ref={(button) => btn = button} style={{
                marginLeft : '10px'
            }} onClick={change}>Click</button>
        </div>
    );
};

export default Hero;