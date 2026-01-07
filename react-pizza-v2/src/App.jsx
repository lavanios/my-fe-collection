import React from 'react'

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlocks';

import './styles/app.scss'
import Skeleton from './components/PizzaBlocks/Skeleton';
import PizzaData from './assets/pizzas.json'

function App() {

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const response = await 
        fetch(
        'https://69581fc06c3282d9f1d46f7a.mockapi.io/pizzaItems', 
        { signal: controller.signal }
        );

        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        
        const json = await response.json();
        setItems(json);
        setIsLoading(false);
      } catch (error) {
        if (error.name !== 'AbortError'){
          console.error("Fetch error:", error);
          setItems(PizzaData);
          setIsLoading(false);
        }
      }
    }
    load();
    return () => controller.abort();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

            {
              isLoading
                ? [...new Array(6)].map((name, index) => <Skeleton key={index} />)
                : items.map((obj) => (
                  <PizzaBlock
                    key={obj.id}
                    title={obj.title}
                    price={obj.price}
                    imageUrl={obj.imageUrl}
                    sizes={obj.sizes}
                    types={obj.types}
                  />
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
