import React, { useState } from 'react';
import { AddCategoty } from './components/AddCategoty';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   // const categories = ['One Punsh', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['HunterXHunter']);

    // const handleAdd = () => {
        
    //     //setcategories(['HunterXHunter',...categories])
    //     setcategories( cats => [...cats, 'HunterXhunter'] );
    
    // }

    

  return (
  <>
    <h2>GifExpertApp</h2>

    <AddCategoty setCategories ={ setCategories }/>

    <hr />

    

    <ol>

    { 
        categories.map( (category, i) => 
        
        <GifGrid 
            key={ category }
            category={ category }
        />

        )
    }

    </ol>

  </>
  )};
