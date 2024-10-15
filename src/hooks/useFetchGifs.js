import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState(['']);
    const [isLoading, setIsLoading] = useState(true);


    const getImages = (resp) => resp.then(
        (res) => {setImages(res), setIsLoading(false)}
        )

    useEffect(() => {
        const resp = getGifs(category);
        getImages(resp)

    }, [])

    return {
        images,
        isLoading
    }
}
