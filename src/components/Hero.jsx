import { useRef } from "react";

const Hero = () => {

    let myImage = useRef();
    const change = ()=>{
        myImage.src = "https://c4.wallpaperflare.com/wallpaper/316/497/192/kung-fu-panda-kung-fu-panda-3-po-kung-fu-panda-wallpaper-preview.jpg"
    }
    return (
        <div>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*wLCHEekWiQAj-Q-Fg_8zcg.jpeg" alt="Kung Fu Panda"
             style={
                {
                    maxWidth: '50%',
                    height: 'auto',
                    marginLeft : 'auto',
                }
             } ref={(img)=> myImage = img} />

             <button onClick={change} style={
                {
                    marginLeft : "20px",
                }
             }>Click</button>
        </div>
    );
};

export default Hero;