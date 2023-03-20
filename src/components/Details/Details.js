import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPetById } from '../../services/petService';

const Details = () => {

    const [pet, setPet] = useState({});
    const { petId } = useParams();

    useEffect(() => {
        getPetById(petId).then((result) => {
            setPet(result);
            console.log(result);
        });
    }, []);


    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    {/* <!-- Edit/Delete buttons ( Only for creator of this pet )  --> */}
                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#">Delete</a>

                    {/* <!-- Bonus --> */}
                    {/* <!-- Like button ( Only for logged-in users, which is not creators of the current pet ) --> */}
                    <a className="button" href="#">Like</a>

                    {/* <!-- ( for Guests and Users )  --> */}
                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {pet.likes || 0}</span>
                    </div>
                    {/* <!-- Bonus --> */}
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
}

export default Details;