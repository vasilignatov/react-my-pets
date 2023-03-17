import { getPets } from '../../services/petService.js';
import PetCard from '../PetCard/PetCard.js';


const Dashboard = async () => {

    const pets = await getPets();
    console.log(pets);

    const petCards = (
        <ul className="other-pets-list">
            {
                pets.map(p => <PetCard ket={p._id} {...p} />)
            }
        </ul>
    )

    return (
        <section id="dashboard-page" className="dashboard">

            <h1>Dashboard</h1>
            
            {
                pets.length > 0
                    ? petCards
                    : < p className="no-pets" > No pets in database!</p>

            }

        </section>
    )
}

export default Dashboard;