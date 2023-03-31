import React from "react";
import ProductCard from "./product-card";
import './card.scss'

const Products = () => {
  return (
    <div>
      <ProductCard>
        <h1>Sony Display</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
          reprehenderit esse. Hic voluptates voluptate ipsum aliquam pariatur
          eum nihil delectus molestias. Recusandae alias tempore earum voluptas
          maxime atque aliquid officia.
        </p>
      </ProductCard>
      <ProductCard>
        <h1>Sony Camera</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          laboriosam enim dolorem placeat libero sapiente doloremque facere,
          animi maiores amet, a saepe ab esse incidunt pariatur aut explicabo
          odit ducimus?
        </p>
      </ProductCard>
    </div>
  );
};

export default Products;
