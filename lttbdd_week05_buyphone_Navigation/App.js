import React, { useState } from 'react';
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

const HomeScreen = ({ navigation, route }) => {
  const selectedColor = route.params?.selectedColor || '';

  const getImageSource = () => {
    switch (selectedColor) {
      case '#C5F1FB':
        return require('./assets/vs_silver.png');
      case '#F30D0D':
        return require('./assets/vs_red.png');
      case '#000':
        return require('./assets/vs_black.png');
      case '#234896':
        return require('./assets/vs_blue.png');
      default:
        return require('./assets/vs_blue.png');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.productImage}
          source={getImageSource()}
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
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.purchaseButtonText}>Chọn mua</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const getImageSource = () => {
    switch (selectedColor) {
      case '#C5F1FB':
        return require('./assets/vs_silver.png');
      case '#F30D0D':
        return require('./assets/vs_red.png');
      case '#000':
        return require('./assets/vs_black.png');
      case '#234896':
        return require('./assets/vs_blue.png');
      default:
        return require('./assets/vs_blue.png');
    }
  };

  // Mapping color codes to names
  const getColorName = (color) => {
    switch (color) {
      case '#C5F1FB':
        return 'Xám'; // Light Blue
      case '#F30D0D':
        return 'Đỏ'; // Red
      case '#000':
        return 'Đen'; // Black
      case '#234896':
        return 'Xanh Dương'; // Blue
      default:
        return 'Xanh Dương'; // Default text
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsHeader}>
        <Image style={styles.detailImage} source={getImageSource()} />
        <View style={{ flex: 1 }}>
          <Text style={styles.detailText}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <Text style={{marginLeft:10}}>màu:</Text>
            <Text style={{ fontWeight: '700', marginLeft:10 }}>{getColorName(selectedColor)}</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 8, marginLeft: 8 }}>
            <Text>cung cấp bởi</Text>
            <Text style={{ fontWeight: '700', marginLeft: 8 }}>Tiki Trading</Text>
          </View>

          <Text style={{ fontWeight: '700', marginTop:8, marginLeft: 8 }}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.colorSelectionContainer}>
        <Text style={styles.colorSelectionText}>Chọn một màu bên dưới:</Text>
        <View style={styles.colorOptions}>
          {['#C5F1FB', '#F30D0D', '#000', '#234896'].map((color) => (
            <TouchableOpacity
              key={color}
              style={[styles.colorOption, { backgroundColor: color }]}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => navigation.navigate('Home', { selectedColor })}>
          <Text style={styles.doneButtonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
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
    marginRight: 50,
  },
  starImage: {
    width: 24,
    height: 25,
  },
  priceContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -36,
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
    marginLeft: -88,
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
    alignItems: 'flex-start',
    padding: 10,
    width: '100%',
  },
  detailImage: {
    width: 112,
    height: 132,
  },
  detailText: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  colorSelectionContainer: {
    backgroundColor: '#C4C4C4',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  colorSelectionText: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: -100,
  },
  colorOptions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  colorOption: {
    width: 85,
    height: 80,
    marginVertical: 10,
  },
  doneButton: {
    backgroundColor: '#1952E294',
    width: '100%',
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