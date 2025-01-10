import "./wannafeel.css"


function WannaFeel({formData, setFormData, page, setPage}) {

    function handleMotivated() {
        setFormData(prevFormData => ({
            ...prevFormData,
            wannaFeel: "motivirano"
        }))
        setPage(prevPage => prevPage + 1)
        
    }
    function handleHappy() {
        setFormData(prevFormData => ({
            ...prevFormData,
            wannaFeel: "sretno"
        }))
        setPage(prevPage => prevPage + 1)
    }
    function handleSad() {
        setFormData(prevFormData => ({
            ...prevFormData,
            wannaFeel: "tuzno"
        }))
        setPage(prevPage => prevPage + 1)
    }
    function handleCalm() {
        setFormData(prevFormData => ({
            ...prevFormData,
            wannaFeel: "opusteno"
        }))
        setPage(prevPage => prevPage + 1)
    }

    console.log(formData)

    

    return(
        <div className="wrapper">
            <h2 className="question">2. Kako bi se željeli osjećati?</h2>

            <div className="choices-wrapper">
                <button className="motivated" onClick={handleMotivated}>motivirano</button>
                <button className="happy" onClick={handleHappy}>sretno</button>
                <button className="sad" onClick={handleSad}>tužno</button>
                <button className="calm" onClick={handleCalm}>opušteno</button>
            </div>
        </div>
    )
}

export default WannaFeel;