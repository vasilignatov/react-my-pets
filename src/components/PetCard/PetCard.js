const PetCard = (pet) => {
    return (
        <li class="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p class="img"><img src={pet.imageUrl} /></p>
            <a class="button" href="#">{pet.description}</a>
        </li>
    );
}

export default PetCard;