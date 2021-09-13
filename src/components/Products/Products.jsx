import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  { id: 1, name: "beanie", description: "gorro de lana doble", price: "$10" },
  { id: 2, name: "hat", description: "gorra trucker curva", price: "$20" },
  { id: 3, name: "canvas", description: "lona playera", price: "$15" },
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
