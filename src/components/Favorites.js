import React, { useState, useEffect } from 'react';
import Accommodation from './Accommodation';
import '../styles/Favorites.css';

function Favorites() {
    const [favoriteAccommodations, setFavoriteAccommodations] = useState([]);

    useEffect(() => {
        const favoritesIds = JSON.parse(localStorage.getItem('favorites')) || [];

        const fetchFavorites = async () => {
            const promises = favoritesIds.map(async (id) => {
                const response = await fetch(`http://127.0.0.1:5000/accommodations/${id}`);
                return response.json();
            });
            const favoriteAccommodations = await Promise.all(promises);
            setFavoriteAccommodations(favoriteAccommodations);
        };

        fetchFavorites();
    }, []);

    const handleRemoveFavorite = (id) => {
        const updatedFavoritesIds = JSON.parse(localStorage.getItem('favorites')) || [];
        const newFavoritesIds = updatedFavoritesIds.filter(favId => favId !== id);
        localStorage.setItem('favorites', JSON.stringify(newFavoritesIds));

        // Updating favorites page
        setFavoriteAccommodations(favoriteAccommodations.filter(acc => acc.id !== id));
    }

    return (
        <div className="favorites-container">
            <h2 className='favorites-page-title'>Acomodações Favoritas</h2>
            <div className="favorites-grid">
                {favoriteAccommodations.length > 0 ? (
                    favoriteAccommodations.map((accommodation) => (
                        <div className="favorite-cards-container">
                            <div key={accommodation.id} className="favorite-card">
                                <Accommodation accommodation={accommodation} />
                                {/* Function to remove from favorites */}
                                <button className="remove-favorite-button" onClick={() => handleRemoveFavorite(accommodation.id)}>
                                    <img className='trash-icon' src="../images/trash-icon.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='empty-list-text'>A lista de favoritos está vazia!</p>
                )}
            </div>
        </div>
    );
}

export default Favorites;
