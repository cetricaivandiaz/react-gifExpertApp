import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState([])

    // const handleApp = () => {
    //     //setCategories([...categories, 'Naruto']);
    //     setCategories( cats => [...cats, 'Naruto']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>

            {/* <button onClick={ handleApp }>Agregar</button> */}

            <ol>
                {categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                ))
                }
            </ol>
        </>
    );
}