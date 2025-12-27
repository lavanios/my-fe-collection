import React from 'react';


function Categories() {
    const [activeIdex, setActiveIndex] = React.useState(0);

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
                    <li
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={activeIdex === index ? 'active' : ''}>{name}
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default Categories;