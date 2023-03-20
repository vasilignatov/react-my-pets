import { Link, Route, Routes } from 'react-router-dom';
import PetList from '../PetList/PetList.js';

const Dashboard = () => {
    const inlineStyles = {color: 'red', backgroundColor:' blue', marginRight: '24px'};

    return (
        <section id="dashboard-page" className="dashboard">

            <h1>Dashboard</h1>

            <nav>
                <Link to="types" style={inlineStyles}>Types</Link>
                <Link to="others" style={inlineStyles}>Others</Link>
            </nav>

            <section>
                <Routes>

                    <Route path='/' element={<PetList />} />
                    <Route path='/types' element={<p>Types....</p>} />
                    <Route path='/others' element={<p>Others....</p>} />

                </Routes>
            </section>

        </section>
    )
}

export default Dashboard;