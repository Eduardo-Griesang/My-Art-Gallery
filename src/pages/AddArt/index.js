import { useEffect, useState } from 'react'
import Title from '../../components/Title'
import Input from './Input'
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
        try{
            const response = await fetch("https://art-gallery-api-fdf75ed882d3.herokuapp.com/art", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            console.log(JSON.stringify(form))

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
                    <span style={{color: "red"}}>Adding new art function is currently unavailable</span>
                    <Input 
                        label="Name" 
                        type="text" 
                        name="title" 
                        value={form.title} 
                        change={handleChange} 
                        placeholder='Name of the art piece' 
                    />
                    <Input 
                        label="Photo" 
                        type="text" 
                        name="photo" 
                        value={form.photo} 
                        change={handleChange} 
                        placeholder='URL photo of the art piece' 
                    />
                    <Input 
                        label="Description" 
                        type="text" 
                        name="description" 
                        value={form.description} 
                        change={handleChange} 
                        placeholder='Insert the common description' 
                    />
                    <Input 
                        label="About" 
                        type="text" 
                        name="the_art" 
                        value={form.the_art} 
                        change={handleChange} 
                        placeholder='How does this art make you feel' 
                    />
                    <button type='submit' className='form-btn' onClick={handleSendData} disabled>Submit</button>
                </form>
            </section>
        </>
    )
}

export default AddArt