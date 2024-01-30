
const Input = ({ label, type, name, value, change, placeholder }) => {

    function handleChange(e){
        change(e)
    }

    return(
        <div className='form-div'>
            <label className='form-label'>{label}:</label>
            <input className='form-input' type={type} name={name} value={value} onChange={handleChange} placeholder={placeholder} required />
        </div>
    )
}

export default Input