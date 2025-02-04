import React, { useEffect, useState } from 'react';
import '../styles/Accommodation.css';

function Accommodation({ accommodation }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Verifies if the accommodation is already favorited
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.some(favoriteId => favoriteId === accommodation.id));
    }, [accommodation.id]);

    const handleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const updateFavorites = isFavorite 
            ? favorites.filter(favoriteId => favoriteId !== accommodation.id) // Remove from favorites
            : [...favorites, accommodation.id]; // Add to favorites

        localStorage.setItem('favorites', JSON.stringify(updateFavorites));
        setIsFavorite(!isFavorite);
    }

    return (
        <>
            <div className="card">
                <img src={accommodation.image} alt={accommodation.name} className='accommodation-image' />
                <div className='accommodation-info'>
                    <div className='card-texts'>
                        <h3 className='accommodation-name'>{accommodation.name}</h3>
                        <p className='accommodation-price'><span className='dollar-sign'>R$</span>{accommodation.accommodation_price}</p>
                        <p className='accommodation-address'>{accommodation.address}, {accommodation.city}</p>
                    </div>

                    <div className='card-buttons'>
                        <button className='about-button'>Saiba mais</button>
                        <button className={`favorite-button ${isFavorite ? 'favorited' : ''}`} onClick={handleFavorite}>
                            <img src="../../images/start-icon.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accommodation;
