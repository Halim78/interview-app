import React from "react";

import { BeerList } from "../../components/BeerList";
import { Button } from "../../components/Button";

import styles from "./List.module.scss";
import { RenderCount } from "../../components/RenderCount";

export const List = ({ beers, loading }) => (
  <div>
    <div className={styles.list}>
      <BeerList beers={beers} loading={loading} />
    </div>
    <div className={styles.addBeer}>
      <Button type="link" to="/new/" text="Add a beer" />
    </div>
    <RenderCount />
  </div>
);
