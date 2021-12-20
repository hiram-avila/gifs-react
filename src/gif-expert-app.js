import React, {useState} from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpert = () => {

    const [categories, setCategories] = useState(['ironman']);
   
    return (
    <>
       <h1>app de React</h1>

            <AddCategory setCategoriess={ setCategories }></AddCategory>
            {console.log(categories)}
        <ol>    
            {
                categories.map(category => ( 
                    <GifGrid
                        key={ category } 
                        categorry={ category }
                     />
                  ))
                }

        </ol>

    </>

    )
}

