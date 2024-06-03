import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content, estilo: blogPost.estilo }}
      onSubmit={(title, content, estilo) => {
        editBlogPost(id, title, content, estilo, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
