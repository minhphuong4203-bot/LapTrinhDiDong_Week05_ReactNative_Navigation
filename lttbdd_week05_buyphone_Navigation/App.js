import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.productImage}
          source={require('./assets/vs_blue.png')}
        />
        <Text style={styles.productText}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>

      <View style={styles.ratingContainer}>
        <View style={styles.starsContainer}>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              style={styles.starImage}
              source={require('./assets/star.png')}
            />
          ))}
        </View>
        <Text>(Xem 828 đánh giá)</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.currentPrice}>1.790.000 đ</Text>
        <Text style={styles.oldPrice}>1.790.000 đ</Text>
      </View>

      <View style={styles.discountContainer}>
        <Text style={styles.discountText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <View style={styles.infoCircle}>
          <Text style={styles.infoText}>?</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="4 MÀU-CHỌN MÀU"
          placeholderTextColor="#000"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.arrowButton}>
          <Text style={styles.arrowText}>></Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.purchaseButton}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.purchaseButtonText}>Chọn mua</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsHeader}>
        <Image
          style={styles.detailImage}
          source={require('./assets/vs_blue.png')}
        />
        <Text style={styles.detailText}>
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>

      <View style={styles.colorSelectionContainer}>
        <Text style={styles.colorSelectionText}>
          Chọn một màu bên dưới:
        </Text>
        <View style={styles.colorOptions}>
          {['#C5F1FB', '#F30D0D', '#000', '#234896'].map((color, index) => (
            <View
              key={index}
              style={[styles.colorOption, { backgroundColor: color }]}
            />
          ))}
        </View>
        
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.doneButtonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
  },
  productImage: {
    width: 240,
    height: 300,
  },
  productText: {
    fontSize: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 50
  },
  starImage: {
    width: 24,
    height: 25,
  },
  priceContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:-36
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: 70,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginLeft:-88
  },
  discountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FA0000',
  },
  infoCircle: {
    width: 18,
    height: 18,
    marginLeft: 21,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 15,
  },
  arrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  arrowText: {
    fontSize: 20,
    color: '#000',
  },
  purchaseButton: {
    marginTop: 120,
    width: '100%',
    height: 44,
    backgroundColor: '#CA1536',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  purchaseButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  detailsHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-start', // Align items to the top
    padding: 10,
    width: '100%', // Full width for header
  },
  detailImage: {
    width: 112,
    height: 132,
  },
  detailText: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold', // Optional: make the text bold
  },
  colorSelectionContainer: {
    backgroundColor: '#C4C4C4', // Same gray background
    padding: 20,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center', // Center horizontally
    width: '100%', // Full width
    flex: 1, // Allow it to take full height
  },
  colorSelectionText: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft:-100
  },
  colorOptions: {
    flexDirection: 'column', // Stack colors vertically
    justifyContent: 'space-between', // Space them evenly
    alignItems: 'center', // Center the color options
    width: '100%', // Full width for color options
  },
  colorOption: {
    width: 85, // Fixed width for each color option
    height: 80,
    marginVertical: 10, // Space between each color option
  },
  doneButton: {
    backgroundColor: '#1952E294', // Button color
    width: '100%', // Full width
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 80,
  },
  doneButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;