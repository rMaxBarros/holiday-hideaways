import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accommodation from './Accommodation';
import '../styles/AccommodationsList.css';

function AccommodationsList() {
    const [accommodations, setAccommodations] = useState([]);
    const [cityFilter, setCityFilter] = useState([]);
    const [loadingAccomodations, setLoadingAccomodations] = useState(false);

    useEffect(() => {
        async function searchAccommodations() {
            setLoadingAccomodations(true);
            const response = await axios.get('http://127.0.0.1:5000/accommodations');
            setAccommodations(response.data);
            setLoadingAccomodations(false);
        }
        searchAccommodations();
    }, []);

    const handleSearch = async () => {
        setLoadingAccomodations(true);
        try {
            const response = await axios.get(`http://127.0.0.1:5000/accommodations?city=${cityFilter}`);
            // /accommodations?city=${cityFilter}
            setAccommodations(response.data);
        } catch (error) {
            console.error("Error in the search", error);
        } finally {
            setLoadingAccomodations(false);
        }
    }

    return (
        <div className='main-container'>
            <h1 className='title'>Digite a cidade do seu próximo destino:</h1>
            <div className='search-container'>
                <input
                    type="text"
                    placeholder='Filtrar por cidade'
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    className='search-field'
                />
                <button onClick={handleSearch} className='search-button'>Pesquisar</button>
            </div>
            <div className='cards-container'>
                {loadingAccomodations ? (
                    <p></p>
                ) : (
                    accommodations.map((accomodation) => (
                        <Accommodation key={accomodation.id} accommodation={accomodation} />
                    ))
                )}
            </div>
        </div>
    )
}

export default AccommodationsList;
