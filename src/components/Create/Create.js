import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPet, getTypes } from '../../services/petService.js';


const Create = () => {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getTypes()
            .then(data => {
                setTypes(Object.values(data));
            });
    })

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');

        createPet({ name, description, imageUrl, type })
            .then(() => {
                navigate('/dashboard');
            });
    }


    return (
        <section id="create-page" className="create">

            <form id="create-form" onSubmit={onSubmit}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                {
                                    types.map(x => <option key={x._id} value={x._id}>{x.name}</option>)
                                }
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>

        </section>
    )
}

export default Create;