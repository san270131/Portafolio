import React, { useEffect, useState } from 'react';
import Tmdb from '../src/Tmdb';
import movieRow from './componentes/movieRow';

export default () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }

        loadAll();
    }, []);

    return (
        <div className="page">
            <section className="list">
                {movieList.map((item, key)=>(
                    <movieRow />
                ))}
            </section>
        </div>
    );
}
