import React, {useState} from 'react';
import "./EditView.css";



function EditView(props) {
    
    let defaultValue = props.addedProperty;
    // addedProperty is the last property that was added - it will be used as prepopulated text in the form as the info entered by the user

    let [formData, setFormData] = useState(defaultValue);

   

    function handleChange(event) {
        let { name, value } = event.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }


    function handleSubmit(event) {
        event.preventDefault();
        props.editPropertyCb(formData);
    }

    return (
        <div>
        {
            props.addedProperty ?

            (<div>
                 <form id="editView" onSubmit={e => handleSubmit(e)}>

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

                <button type="submit">Save</button>

                </form>
            </div>) 
            : null
            }

     
   
       
        </div>

    )
}

export default EditView;