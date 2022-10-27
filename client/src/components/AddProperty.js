import React, { useState } from "react";
import "./AddProperty.css"

const EMPTY_FORM = {
    url: "",
    location: "",
    availability: "",
    numofrooms: "",
    numofpeople: "",
    title: "",
    description: ""
};


function AddProperty(props) {

    let [formData, setFormData] = useState(EMPTY_FORM);

    function handleChange(event) {
        let { name, value } = event.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addPropertyCb(formData);
        setFormData(EMPTY_FORM);
    }

  return (


        
            <form  id="addProperty" onSubmit={e => handleSubmit(e)}>

                <label >
                    Image:
                    <input 
                        type="text"
                        required
                        name="url"
                        value={formData.url}
                        onChange={e => handleChange(e)}
                    />
                </label>



                <label>
                    Location:
                    <input 
                        type="text"
                        required
                        name="location"
                        value={formData.location}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Availability:
                    <input 
                        type="text"
                        required
                        name="availability"
                        value={formData.availability}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Number of rooms:
                    <input 
                        type="number"
                        min="0" 
                        required
                        name="numofrooms"
                        value={formData.numofrooms}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Number of people:
                    <input 
                        type="number"
                        min="1" 
                        required
                        name="numofpeople"
                        value={formData.numofpeople}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Title:
                    <input 
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Description:
                    <textarea 
                      
                        name="description"
                        value={formData.description}
                        onChange={e => handleChange(e)}
                    ></textarea>
                </label>

                <button type="submit">Submit</button>

            </form>
         


   
   
      

    
  
  );
}

export default AddProperty;













