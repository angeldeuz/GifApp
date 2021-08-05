import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    // const [images, setimages] = useState([]); se usa el custom hooks y nostro componente queda mas limpio
    const { data: images, loading } = useFetchGifs( category );

    // // uso el useEffect de esta manera para ejecutar la consulta una sola ves y no se dispare al hacer alguna otra accions
    // useEffect( () => {
    //     //se combierte en promesa mi helper getGits por que uso async
    //     getGifs( category )
    //     //la funcion returna un unico argumento y se toma por defaul
    //     .then( setimages )
    //     //.then(imgs => setimages(img))
    //     // solo si la categoria cambia se vuelve a ejecutar por eso al ir vacio solo se ejecutaba una ves
    // }, [ category ])

    return (
        <>
            <h3 className="animate__animated animate__backInDown">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                // manera de mandarlo destructurado como en un objeto
                                { ...img }/>
                        ))
                    }
            </div> 
        </>
    )
}
