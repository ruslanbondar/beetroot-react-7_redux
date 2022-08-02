import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import RecipeSlide from './RecipeSlide';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings_1 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const settings_2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '246589fc6fmshaca703e5714c83cp1073f2jsne3801f900b7f',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

function SliderComponent() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes',
      options,
    )
      .then((response) => response.json())
      .then((response) => setRecipes(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Slider {...settings_1}>
        {recipes.map((item) => (
          <RecipeSlide key={item.id} recipe={item} renderTitle />
        ))}
      </Slider>

      <Slider {...settings_2}>
        {recipes.map((item) => (
          <RecipeSlide key={item.id} recipe={item} />
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
