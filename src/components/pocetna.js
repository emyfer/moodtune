import './pocetna.css'
import { Link } from 'react-router-dom'
import React, {useRef} from 'react';


function Pocetna() {

    const targetRef = useRef(null)

    const scrollTo = () => {
        targetRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="container">

            <div className='pozadina'></div>

            <img alt=" " className="background-upper" src="./photos/background-upper.png"></img>

            <div className="admin-part">
                <img className="admin-icon"></img>
            </div>

            <div className="upper-part">
                <h1 className="title">MoodTune</h1>
                <div className="buttons-part">
                    
                    <button className="istrazivanje-button" onClick={scrollTo}>O istraživanju</button>

                    <Link to={"/form"}>
                        <button className="zapocni-button">Započni test</button>
                    </Link>
                   
                </div>
            </div>
            
            <div className="middle-part">
                <h2 className="istrazivanje-title" ref={targetRef}>O istraživanju</h2>
                <p className="opis">sxdrcftvgbhnjkdfna vwhjdp vcbnsdak čahpnčhpd fijap</p>
            </div>

            <div className="lower-part">
                <Link to={"/form"}>
                        <button className="test-button">Započni test</button>
                    </Link>
            </div>

            <img alt=" " className="background-lower" src="./photos/background-lower.png"></img>
        </div>
    )
}

export default Pocetna;