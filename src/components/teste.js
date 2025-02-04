import React, { useEffect } from 'react';
import axios from 'axios';

function Teste() {
    useEffect(() => {
        async function buscarAcomodacoes() {
            try {
                const resposta = await axios.get('/accommodations');
                console.log(resposta.data);
            } catch (error) {
                console.error(error);
            }
        }
        buscarAcomodacoes();
    }, []);

    return (
        <div>
            <h1>Teste</h1>
        </div>
    );
}

export default Teste;