const MyPets = () => {
    return (
        <section id="my-pets-page" class="my-pets">
            <h1>My Pets</h1>
            {/* <!-- Display ul: with list-items for every user's pet (if any) --> */}
            <ul class="my-pets-list">
                <li class="otherPet">
                    <h3>Name: Milo</h3>
                    <p>Type: dog</p>
                    <p class="img"><img src="/images/dog.png" /></p>
                    <a class="button" href="#">Details</a>
                </li>
                <li class="otherPet">
                    <h3>Name: Tom</h3>
                    <p>Type: cat</p>
                    <p class="img"><img src="/images/cat1.png" /></p>
                    <a class="button" href="#">Details</a>
                </li>
            </ul>

            {/* <!-- Display paragraph: If the user doesn't have his own pets  --> */}
            <p class="no-pets">No pets in database!</p>
        </section>
    );
}

export default MyPets;