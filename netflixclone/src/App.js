import React, { useEffect, useState } from 'react';
import '../src/App.css'
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
                    <movieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
        </div>
    );
}
