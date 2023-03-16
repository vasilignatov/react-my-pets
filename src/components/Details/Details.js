const Details = () => {
    return (
        <section id="details-page" class="details">
            <div class="pet-information">
                <h3>Name: Milo</h3>
                <p class="type">Type: dog</p>
                <p class="img"><img src="/images/dog.png" /></p>
                <div class="actions">
                    {/* <!-- Edit/Delete buttons ( Only for creator of this pet )  --> */}
                    <a class="button" href="#">Edit</a>
                    <a class="button" href="#">Delete</a>

                    {/* <!-- Bonus --> */}
                    {/* <!-- Like button ( Only for logged-in users, which is not creators of the current pet ) --> */}
                    <a class="button" href="#">Like</a>

                    {/* <!-- ( for Guests and Users )  --> */}
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>
                    {/* <!-- Bonus --> */}
                </div>
            </div>
            <div class="pet-description">
                <h3>Description:</h3>
                <p>Today, some dogs are used as pets, others are used to help humans do their work. They are a popular
                pet because they are usually playful, friendly, loyal and listen to humans. Thirty million dogs in
                the United States are registered as pets.[5] Dogs eat both meat and vegetables, often mixed together
                and sold in stores as dog food. Dogs often have jobs, including as police dogs, army dogs,
                assistance dogs, fire dogs, messenger dogs, hunting dogs, herding dogs, or rescue dogs.</p>
            </div>
        </section>
    );
}

export default Details;