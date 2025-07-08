
import React, { useState, useEffect, useRef } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/image1.jpeg'),
  require('../assets/image2.jpg'),
  require('../assets/image3.jpg'),
  require('../assets/image4.jpg'),
  require('../assets/image5.jpg'),
];

const Slidesho = () => {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  }, [index]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} />
        )}
        onViewableItemsChanged={({ viewableItems }) => {
          setIndex(viewableItems[0]?.index || 0);
        }}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50 // Considered visible when 50% of the item is visible
        }}
      />
      <View style={styles.pagination}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              index === i ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#7338F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width,
    height: 200,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
});

export default Slidesho;



