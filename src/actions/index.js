import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPostAndUsers = () => async (dispacth) => {};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => _fetchUSer(id, dispatch);
// // Usando el memoize aqui es para que al realizar el fetch de cada usuario no se ejecute X
// // veces que es el total de blogs que tiene, sino que con un solo fetch se guarda todo el
// // data y no es necesario estar haciendo request constantemente
// const _fetchUSer = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
