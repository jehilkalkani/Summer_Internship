import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-swipeable';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { id: '1', title: 'Movie 1', review: 'Great movie!' },
    { id: '2', title: 'Movie 2', review: 'Awesome!' },
  ]);
  const [searchText, setSearchText] = useState('');

  const filteredReviews = reviews.filter((review) =>
    review.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const deleteReview = (id) => {
    setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
  };

  const renderReviewItem = ({ item, index }) => {
    const handleSwipeToDelete = () => {
      deleteReview(item.id);
    };

    return (
      <Swipeable
        rightButtons={[
          <TouchableOpacity style={styles.deleteButton} onPress={handleSwipeToDelete}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        ]}
        useNativeDriver={true}
      >
        <TouchableOpacity
          style={styles.reviewItem}
          onPress={() => navigation.navigate('EditReview', { review: item, setReviews })}
        >
          <Text style={styles.reviewTitle}>{item.title}</Text>
          <Text style={styles.reviewText}>{item.review}</Text>
          <Text style={styles.imageNumber}>{index + 1}</Text>
        </TouchableOpacity>
      </Swipeable>
    );
  };

  const images = [
    require('../images/photo1.png'),
    require('../images/photo2.png'),
    require('../images/photo3.png'),
    require('../images/photo4.png'),
    require('../images/photo5.png'),
  ];

  return (
    <View style={styles.container}>
      <ImageBackground style={{ flex: 1, height: '100%', width: '100%' }} source={require('../images/hello.png')}></ImageBackground>
      <Text style={styles.heading}>Movie Reviews</Text>

      <ScrollView
        horizontal
        contentContainerStyle={styles.imageContainer}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((image, index) => (
          <Image style={styles.image} source={image} key={index} />
        ))}
      </ScrollView>

      <View style={styles.searchBar}>
        <Image style={styles.searchIcon} source={require('../images/search.png')} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>

      <FlatList
        data={filteredReviews}
        renderItem={renderReviewItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddReview', { setReviews })}
      >
        <Text style={styles.buttonText}>Add Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
};

const ReviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Review Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  reviewItem: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#dddddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  reviewText: {
    fontSize: 14,
    color: '#555555',
  },
  imageNumber: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#ff6b6b',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
  },
  searchInput: {
    paddingLeft: 10,
    borderColor: '#dddddd',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 12,
  },
  searchIcon: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 190,
    borderRadius: 18,
    marginHorizontal: 12,
  },
  bottomImage: {
    width: '100%',
    height: 100,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '85%',
    borderRadius: 10,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Review" component={ReviewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
