
// los helpers son para hacer una sola funcion que no cambia renderisa 
 export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=q5SAq8B44gr6HZUnFfT3jfSsiqAgTJk1`
    const resp = await fetch( url );
    // destructuracion del json solo tomo el data dentro del data
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            // se puede usar el signo de interrogacion para validar si images trae info y tomar los demas datos y si no ignoralo y no ponerlo
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}