import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";


const products = [
  { id: 1, name: "beanie", description: "gorro de lana doble", price: "$10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxsMveSbfYmky2uuGWwJmuagOf3Yq7S_9Jatknpva-YT5cc3LieCECZgIMm0EapKztts&usqp=CAU"  },
  { id: 2, name: "hat", description: "gorra trucker curva", price: "$20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxsMveSbfYmky2uuGWwJmuagOf3Yq7S_9Jatknpva-YT5cc3LieCECZgIMm0EapKztts&usqp=CAU" },
  { id: 3, name: "canvas", description: "lona playera", price: "$15",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxsMveSbfYmky2uuGWwJmuagOf3Yq7S_9Jatknpva-YT5cc3LieCECZgIMm0EapKztts&usqp=CAU" },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} /> {/* passing prop, product by product */}
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
