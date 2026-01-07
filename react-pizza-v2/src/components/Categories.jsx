import React from 'react';
import ListItem from './ListItem';


function Categories() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые"
    ];

    return (
        <div className="categories">
            <ul>
                {categories.map((name,index)  => 
                (
                    <ListItem 
                        key={name}
                        name={name}
                        isActive={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}

            </ul>
        </div>
    );
}

export default Categories;