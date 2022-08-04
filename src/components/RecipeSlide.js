import React from 'react';

import styles from './RecipeSlide.module.scss';

function RecipeSlide({ recipe, renderTitle = false }) {
  return (
    <div className={styles.slideWrapper}>
      {renderTitle && <h2 className={styles.title}>{recipe.name}</h2>}
      <img src={recipe.thumbnail_url} alt="" />
    </div>
  );
}

export const test = 5;

export default RecipeSlide;
