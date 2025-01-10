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

            <div className="questions-wrapper">
                <div className="godine">
                    <p>age:</p>
                    <input type="number" id="age" name="age" onChange={handleChange}></input>
                </div>

                <div className="gender">
                    <p>spol:</p>
                    <div className="radios">
                        <p>m</p>
                        <input type="radio" name="gender" value="male" onChange={handleChange}  checked={formData.gender === "male"}></input>
                        <p>f</p>
                        <input type="radio" name="gender" value="female" onChange={handleChange}  checked={formData.gender === "female"}></input>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default PersonalInfo;