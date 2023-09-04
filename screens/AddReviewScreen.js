import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import AppButton from './AppButton';

const AddReviewScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');

    const handleAddReview = () => {
        if (title !== '' && review !== '') {
            const newReview = { id: Date.now().toString(), title, review };
            navigation.state.params.setReviews((prevReviews) => [...prevReviews, newReview]);
            navigation.goBack();
        } else {
            Alert.alert('Error', 'Please fill in all fields.');
        }
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add a Review</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Movie Title"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Write Your Review"
                multiline
                numberOfLines={4}
                value={review}
                onChangeText={(text) => setReview(text)}
            />

            <AppButton
                title="Submit Review"
                onPress={handleAddReview}
                buttonStyle={styles.addButton}
                textStyle={styles.buttonText}
            />

            <AppButton
                title="Cancel"
                onPress={handleCancel}
                buttonStyle={styles.cancelButton}
                textStyle={styles.buttonText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    addButton: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 30,
    },
    cancelButton: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default AddReviewScreen;
