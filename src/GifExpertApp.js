import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['one Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['one Punch']);

    // const handleAdd = () => {
    //     //los ... sirven para poner todo el arreglo anterior
    //     //setCategories( [...categories, 'HunterXHunter'] );
    //     // solucion con callbaks trae el estado anterior y retorna el nuevo
    //     setCategories( cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category= { category }/>
                    ))
                }
            </ol>
        </div>
    )
}
