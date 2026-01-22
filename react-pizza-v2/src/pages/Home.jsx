import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlocks/Skeleton';
import PizzaBlock from '../components/PizzaBlocks';

export const Home = () => {
  const [items, setItems] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setIsLoading(true);
      try {
        const response = await
          fetch(
            'https://69581fc06c3282d9f1d46f7a.mockapi.io/pizzaItems',
            { signal: controller.signal }
          );

        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const json = await response.json();
        setItems(json);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Fetch error:", error);
        }
      } finally {
        setIsLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {
          (isLoading || !items)
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
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
    </>
  )
}