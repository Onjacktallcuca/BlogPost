import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  
  switch (action.type) {

    case 'get_blogposts':
      return action.payload;

    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
          estilo: action.payload.estilo,
        },
      ];

    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
  
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
  
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () =>{

    const response =  await jsonServer.get('/blogposts')
    dispatch({ type: 'get_blogposts', payload: response.data });

  };

}

const addBlogPost = () => {
  return async (title, content, estilo, callback) => {

    await jsonServer.post('/blogposts', { title, content, estilo });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async id =>{
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
  
  
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, estilo, callback) => {

    await jsonServer.put(`/blogposts/${id}`, {title, content, estilo })
    dispatch({
      type: 'edit_blogpost',
      payload: { id, title, content, estilo },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);