
export const getGifs = async (category) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=qHRTN8KSATqmeOcEWl537qQojobKOgC4&q=${category}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    const {data} = await resp.json()
   

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_width_downsampled.url
    }))
    // console.log(gifs);
    
    return gifs;
}