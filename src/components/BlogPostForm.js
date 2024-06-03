import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const BlogPostForm = ({
  onSubmit,
  initialValues = { title: "", content: "", estilo: "" },
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [estilo, setEstilo] = useState(initialValues.estilo);


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Adicione o título:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Adicione o conteúdo:</Text>
      <TextInput
        style={styles.inputContent}
        value={content}
        onChangeText={(text) => setContent(text)}
        textAlignVertical="top"
        multiline
      />
      
      {/* Radio Buttons */}
      <View style={styles.radioContainer}>
        <Text style={styles.label}>Escolha uma opção:</Text>
        <View style={styles.radioOption}>
          <TouchableOpacity
            style={[styles.radioCircle, estilo === 'Comedia' && styles.selectedRadioCircle]}
            onPress={() => setEstilo('Comedia')}
          />
          <Text style={styles.radioLabel}>Comédia</Text>
        </View>
        <View style={styles.radioOption}>
          <TouchableOpacity
            style={[styles.radioCircle, estilo === 'Bike' && styles.selectedRadioCircle]}
            onPress={() => setEstilo('Bike')}
          />
          <Text style={styles.radioLabel}>Bike</Text>
        </View>
      </View>

     
      <TouchableOpacity style={styles.button} onPress={() => onSubmit(title, content, estilo)}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft:10,
    marginTop: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius:10,
    borderColor: "black",
    marginBottom: 10,
    padding: 5,
    margin: 5,
  },
  inputContent:{
    fontSize: 18,
    borderWidth: 1,
    borderRadius:10,
    borderColor: "black",
    marginBottom: 10,
    padding: 5,
    margin: 5,
    height:320,
    textAlignVertical:'top'
    
  },

  radioContainer: {
    marginBottom: 20,
  },
  radioOption: {
    marginLeft:10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  radioLabel: {
    marginLeft: 5,
    fontSize: 16,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioCircle: {
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10, // Estilo do borderRadius adicionado aqui
    alignItems: 'center',
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BlogPostForm;
