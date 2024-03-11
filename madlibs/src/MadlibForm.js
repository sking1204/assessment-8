import {useState} from 'react';
import Story from './Story';
import './MadlibForm.css';

const MadlibForm = ({setShowStory, makeStory}) =>{
    const INITIAL_STATE = {
        noun: "",
        noun2: "",
        adjective: "",
        color: "",
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(formData => ({
          ...formData,
          [name]: value  
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        makeStory(formData);         
        setShowStory(true);

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="noun">noun</label>
                <input
                    id="noun"
                    type="text"
                    name="noun"
                    placeholder="noun"
                    value={formData.noun}
                    onChange={handleChange}
                    />

                <label htmlFor="noun2">noun2</label>
                <input
                    id="noun2"
                    type="text"
                    name="noun2"
                    placeholder="noun2"
                    value={formData.noun2}
                    onChange={handleChange}
                    />

                <label htmlFor="adjective">adjective</label>
                <input
                    id="adjective"
                    type="text"
                    name="adjective"
                    placeholder="adjective"
                    value={formData.adjective}
                    onChange={handleChange}
                    />

                <label htmlFor="color">color</label>
                <input
                    id="color"
                    type="text"
                    name="color"
                    placeholder="color"
                    value={formData.color}
                    onChange={handleChange}
                    />

            <button>Get Story</button>        
            </form>

        </div>
        
    )
}

export default MadlibForm;