import { useEffect, useState } from 'react'
import Title from '../../components/Title'
import './AddArt.css'

const AddArt = () => {
    const [ form, setForm ] = useState({
        "id": 0,
        "photo": "",
        "title": "",
        "description": "",
        "the_art": ""
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value,})
    }
    
    async function handleSendData(e){
        e.preventDefault()
        console.log("sent")
        try{
            const response = await fetch("https://art-gallery-api-fdf75ed882d3.herokuapp.com/art", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            if(!response.ok){
                throw new Error('Network response was not ok!!!')
            }

            window.alert('Art sent successfully')
            setForm({...form, ["id"]: form.id + 1})
        } 
        catch(err){
            console.error('Error sending data: ', err.message)
        }
    }

    useEffect(() => {
        getAPILastId();
      }, []);
    
    async function getAPILastId() {
        try {
          const promisse = await fetch("https://art-gallery-api-fdf75ed882d3.herokuapp.com/art");
          const data = await promisse.json();
          data.reverse()
          setForm({...form, ["id"]: data[0].id + 1})
        } catch (err) {
          console.error("ERRO: ", err);
        }
    }

    return(
        <>
            <Title title="Add New Art to Database" />
            <section className='body-form'>
                <form className='form'>
                    <h2 className='form-title'>Insert new art details:</h2>
                    <div className='form-div'>
                        <label className='form-label'>Name:</label>
                        <input className='form-input' type='text' name='title' value={form.title} onChange={handleChange} placeholder='Name of the art piece' required />
                    </div>
                    <div className='form-div'>
                        <label className='form-label'>Photo:</label>
                        <input className='form-input' type='text' name='photo' value={form.photo} onChange={handleChange} placeholder='URL photo of the art piece' required />
                    </div>
                    <div className='form-div'>
                        <label className='form-label'>Description:</label>
                        <input className='form-input' type='text' name='description' value={form.description} onChange={handleChange} placeholder='Insert the common description' required />
                    </div>
                    <div className='form-div'>
                        <label className='form-label'>About:</label>
                        <input className='form-input' type='text' name='the_art' value={form.the_art} onChange={handleChange} placeholder='How does this art make you feel' required />
                    </div>
                    <button type='submit' className='form-btn' onClick={handleSendData}>Submit</button>
                </form>
            </section>
        </>
    )
}

export default AddArt