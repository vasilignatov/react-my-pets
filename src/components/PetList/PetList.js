import { useEffect, useState } from 'react';
import { getPets } from '../../services/petService.js';
import PetCard from './PetCard/PetCard.js';


const PetList = () => {
    const [pets, setPets] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getPets()
            .then((petsArr) => {
                setPets(petsArr);
            })
            .finally(() => {
                setIsLoaded(true);
            });
    }, []);

    let petCards = (
        < ul className="other-pets-list" >
            {
                pets.map(p => <PetCard ket={p._id}  pet={p}/>)
            }
        </ul >
    );
    return (
        <>
            {
                isLoaded
                    ? pets.length > 0
                        ? petCards
                        : < p className="no-pets" > No pets in database!</p>
                    : <p>Loading...</p>
            }
        </>
    );
}

export default PetList;