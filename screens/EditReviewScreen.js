import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditReviewScreen = ({ navigation }) => {
  const review = navigation.getParam('review');
  const [editedTitle, setEditedTitle] = useState(review.title);
  const [editedReview, setEditedReview] = useState(review.review);

  const handleUpdateReview = () => {
    if (editedTitle !== '' && editedReview !== '') {
      const updatedReview = { ...review, title: editedTitle, review: editedReview };
      navigation.state.params.setReviews((prevReviews) => {
        const updatedReviews = prevReviews.map((prevReview) =>
          prevReview.id === review.id ? updatedReview : prevReview
        );
        return updatedReviews;
      });
      navigation.goBack();
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Review</Text>

      <TextInput
        style={styles.input}
        placeholder="Movie Title"
        value={editedTitle}
        onChangeText={(text) => setEditedTitle(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Review"
        multiline
        value={editedReview}
        onChangeText={(text) => setEditedReview(text)}
      />

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateReview}>
        <Text style={styles.buttonText}>Update Review</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    paddingHorizontal: 23,
    paddingVertical: 13,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditReviewScreen;
