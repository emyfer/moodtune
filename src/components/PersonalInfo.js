import "./personalInfo.css"

function PersonalInfo({formData, setFormData}) {

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    console.log(formData)


    return(
        <div className="wrapper">
            <h2 className="question">personal info</h2>

            
        </div>
    )
}

export default PersonalInfo;