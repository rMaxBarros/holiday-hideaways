import React from 'react';
import '../styles/Accommodation.css';

function Accommodation({ accommodation, favorite }) {
    return (
        <>
            <div className="card">
                <img src={accommodation.image} alt={accommodation.name} className='accommodation-image' />
                <div className='accommodation-info'>
                    <div className='card-texts'>
                        <h3 className='accommodation-name'>{accommodation.name}</h3>
                        <p className='accommodation-price'>R${accommodation.accommodation_price}</p>
                        <p className='accommodation-address'>{accommodation.address}, {accommodation.city}</p>
                    </div>

                    <div className='card-buttons'>
                        <button className='about-button'>Saiba mais</button>
                        <button className='favorite-button' onClick={() => favorite(accommodation.id)}>
                            <img src="../../images/start-icon.svg" alt="" />
                            {/* accommodations_web\public\images\start-icon.svg */}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accommodation;
