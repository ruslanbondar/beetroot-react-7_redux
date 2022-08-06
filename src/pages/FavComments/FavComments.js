import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavComments } from 'store/reducers/comments';

function FavComments() {
  const dispatch = useDispatch();

  const likedComments = useSelector(
    (state) => state.commentsReducer.likedComments,
  );

  useEffect(() => {
    const favComments = localStorage.getItem('fav');
    if (favComments) dispatch(setFavComments(favComments));
  }, []);

  return (
    <div>
      {likedComments.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default FavComments;
