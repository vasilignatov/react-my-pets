import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPet, getTypes } from '../../services/petService.js';
import { AuthContext } from '../../contexts/AuthContext.js';


const Create = () => {

    const navigate = useNavigate();
    // const [types, setTypes] = useState([]);
    const { user } = useContext(AuthContext);

    // useEffect(() => {
    //     getTypes()
    //         .then(data => {
    //             setTypes(Object.values(data));
    //         });
    // })

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');

        createPet({ name, description, imageUrl, type }, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            })
            .catch(err => console.log(err))
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
                                <option value="cats">Cats</option>
                                <option value="dogs">Dogs</option>
                                <option value="parrot">Parrot</option>
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