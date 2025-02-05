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

                <div className='accommodation-card-container'>
                    <div className='card-title-container'>
                        <h3 className='accommodation-title'>{accommodation.name}</h3>
                    </div>

                    <img
                        src={accommodation.image}
                        alt={accommodation.name}
                        className='accommodation-image'
                    />

                    <div className='accommodation-info-container'>
                        <div className='address-info'>
                            <img className='loc-icon' src="../../images/location-icon.svg" alt="" />
                            <p className='accommodation-address'>{accommodation.address}, {accommodation.city}</p>
                        </div>

                        <div className='price-info'>
                            <img className='dollar-sign' src="../../images/dollar-sign.svg" alt="" />
                            <p className='accommodation-price'>{accommodation.accommodation_price}</p>
                        </div>

                        <div className='card-buttons'>
                            <button className={`favorite-button ${isFavorite ? 'favorited' : 'not-favorited'}`}
                                onClick={handleFavorite}>
                                <img src="../../images/start-icon.svg" alt="" />
                            </button>
                            <button className='about-button'>Saiba mais</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Accommodation;
