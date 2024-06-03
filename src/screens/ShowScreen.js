import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
      <Text style={styles.content}>Categoria: {blogPost.estilo}</Text>
      <Text style={styles.content}>{blogPost.id}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {

  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>{
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
          
       }
      >
        <EvilIcons name="pencil" size={50} /> 
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  content: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default ShowScreen;
