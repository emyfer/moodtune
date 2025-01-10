import Privole from "./Privole";
import FeelBefore from "./FeelBefore";
import WannaFeel from "./WannaFeel";
import Music from "./Music";
import PersonalInfo from "./PersonalInfo";
import FeelAfter from "./FeelAfter";
import {useState} from "react"
import "./form.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Form() {

    //komentar

    const [formData, setFormData] = useState({
        age:"",
        gender:"",
        feelbefore:"",
        wannafeel:"",
        feelafter:""
    })

    const navigate = useNavigate()

    const [page, setPage] = useState(0);
    const formTitles = ["Privole", "PersonalInfo","FeelBefore", "WannaFeel", "Music", "FeelAfter"]

    const PageDisplay = () => {
        if(page === 0) {
            return <Privole/>
        }
        if(page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
        }
        if(page === 2) {
            return <FeelBefore formData={formData} setFormData={setFormData}/>
        }
        if(page === 3) {
            return <WannaFeel formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>
        }
        if(page === 4) {
            return <Music formData={formData} setFormData={setFormData}/>
        }
        if (page === 5) {
            return <FeelAfter formData={formData} setFormData={setFormData}/>
        }
    }

    function handleSubmit() {

    }


    return(
        <div className="form-container">
            <img className="backgroundimg" src="./photos/background-upper.png"></img>

            <Link to={"/"} className="title-form">
                <header>MoodTune</header>
            </Link>
               

            <div className="main">
                {PageDisplay()}
            </div>

            <div className="next-form">

                <div className="backward">
                    <p className="prev-text">{(page === 0 || page === 1) ? "" : "Prethodno pitanje"}</p>
                     <button 
                        className="prev-button" 
                        hidden = {page === 0 || page === 1}
                        onClick={() => {setPage((curPage) => curPage - 1)}}>
                    ←</button>
                </div>

                <div className="forward">
                    <p className="next-text" hidden = {page === 3}>{page === 0 ? "Kreni s testom!" : page === formTitles.length-1 ? "Završi test" : "Iduće pitanje"}</p>
                    <button 
                        className="next-button"
                        hidden = {page === 3}
                        onClick={() => {
                            if (page === formTitles.length - 1) {
                                navigate("/")
                                handleSubmit()
                            } else {
                                setPage((curPage) => curPage + 1)
                            }
                        }}>
                    →</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Form;