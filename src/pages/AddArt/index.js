import Title from '../../components/Title'
import './AddArt.css'

const AddArt = () => {
    return(
        <>
            <Title title="Add New Art to Database" />
            <body className='body-form'>
                <form className='form'>
                    <h2 className='form-title'>Insert new art details:</h2>
                    <div className='form-div'>
                        <label className='form-label'>Name:</label>
                        <input className='form-input' type='text' placeholder='Name of the art piece' required />
                    </div>
                    <div className='form-div'>
                        <label className='form-label'>Photo:</label>
                        <input className='form-input' type='text' placeholder='URL photo of the art piece' required />
                    </div>
                    <div className='form-div'>
                        <label className='form-label'>Description:</label>
                        <input className='form-input' type='text' placeholder='Insert the common description' required />
                    </div>
                    <div className='form-div'>
                        <label className='form-label'>About:</label>
                        <input className='form-input' type='text' placeholder='How does this art make you feel' />
                    </div>
                    <button className='form-btn'>Submit</button>
                </form>
            </body>
        </>
    )
}

export default AddArt