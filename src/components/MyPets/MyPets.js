const MyPets = () => {
    return (
        <section id="my-pets-page" className="my-pets">
            <h1>My Pets</h1>
            {/* <!-- Display ul: with list-items for every user's pet (if any) --> */}
            <ul className="my-pets-list">
                <li className="otherPet">
                    <h3>Name: Milo</h3>
                    <p>Type: dog</p>
                    <p className="img"><img src="/images/dog.png" /></p>
                    <a className="button" href="#">Details</a>
                </li>
                <li className="otherPet">
                    <h3>Name: Tom</h3>
                    <p>Type: cat</p>
                    <p className="img"><img src="/images/cat1.png" /></p>
                    <a className="button" href="#">Details</a>
                </li>
            </ul>

            {/* <!-- Display paragraph: If the user doesn't have his own pets  --> */}
            <p className="no-pets">No pets in database!</p>
        </section>
    );
}

export default MyPets;