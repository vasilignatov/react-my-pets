import { useEffect, useState } from 'react';
import { getPets } from '../../services/petService.js';
import PetCard from './PetCard/PetCard.js';


const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getPets()
            .then((petsArr) => {
                setPets(petsArr);
            })
    }, []);

    let petCards = (
        < ul className="other-pets-list" >
            {
                pets.map(p => <PetCard ket={p._id} {...p} />)
            }
        </ul >
    );
    return (
        <>
            {
                pets.length > 0
                    ? petCards
                    : < p className="no-pets" > No pets in database!</p>
            }
        </>
    );
}

export default PetList;