import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import { getPetById } from '../../services/petService';

const Details = () => {

    const [pet, setPet] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const { petId } = useParams();

    useEffect(() => {
        setIsLoaded(false);
        setTimeout(() => {

            getPetById(petId)
            .then((result) => {
                setPet(result);
            })
            .finally(() => setIsLoaded(true));
        },2000)
    }, []);


    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                {/* {isLoaded && <h3>Name: {pet.name}</h3>} */}
                 {isLoaded && <h3>Name: {pet.name}</h3>}
                 {!isLoaded && <h3>Name: <Skeleton /></h3>}
                 

                {isLoaded && <p className="type">Type: {pet.type}</p>}
                {!isLoaded && <p className="type">Type: <Skeleton count={1} /></p>}

                {isLoaded && <p className="img"><img src={pet.imageUrl} /></p>}
                {!isLoaded && <Skeleton count={5} />}


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
                {isLoaded && <p>{pet.description}</p>}
                {!isLoaded && <Skeleton count={3} />}
            </div>
        </section>
    );
}

export default Details;