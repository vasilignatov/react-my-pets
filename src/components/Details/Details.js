import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';

import { getPetById, deletePet } from '../../services/petService';
import { AuthContext } from '../../contexts/AuthContext.js'

const Details = () => {
    const { user } = useContext(AuthContext);
    const { petId } = useParams();

    const [pet, setPet] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
        getPetById(petId)
            .then((result) => {
                setPet(result);
            })
            .catch(console.error)
            .finally(() => {
                setIsLoaded(true)
            })
    }, []);

    function deleteHandler(e) {
        e.preventDefault();

        deletePet(petId, user.accessToken)
            .then(() => {
                navigate('/');
            });
    }

    function editHandler() {

    }

    const ownerButtons = (<>
        <button onClick={editHandler} className="button" href="#">Edit</button>
        <button onClick={deleteHandler} className="button" href="#">Delete</button>
    </>)

    const likeBtn = <a className="button" href="#">Like</a>;


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
                    {
                        user._id && (pet._ownerId == user._id
                            ? ownerButtons
                            : likeBtn
                        )}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {pet.likes?.length}</span>
                    </div>
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