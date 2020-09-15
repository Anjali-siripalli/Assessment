import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Hello extends Component {
  render() {
    const text = this.props.route.params.name;
    return (
      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hello {text}!!</Text>

        <Text style={{marginTop: 10}}>Below are the variations of buttons</Text>

        <View>
          <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => Alert.alert('Simple Button pressed')}
            style={{
              backgroundColor: '#E5ECF0',
              borderRadius: 10,
              paddingVertical: 20,
              paddingHorizontal: 12,
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 10,
            }}>
            <Text>Press me</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => Alert.alert('Simple Button pressed')}
            style={styles.appButtonContainer}>
            <Text>Press me</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#5BC6F1',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginLeft: 30,
    marginRight: 30,
  },
});

export default Hello;
