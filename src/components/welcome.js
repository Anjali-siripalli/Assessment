import React, {Component} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import {loadSettings, saveSettings} from './storage/settingsStorage';
import Hello from './hello';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(name) {
    this.setState({name});
  }

  handleSubmit() {
    saveSettings(this.state);
    this.props.navigation.navigate('Hello', {name: this.state.name});
  }

  async componentDidMount() {
    const initialState = await loadSettings();
    this.setState(initialState);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{margin: 20, borderWidth: 1, marginTop: 100}}>
        <TextInput
          placeholder="enter name"
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            margin: 20,
            height: 50,
          }}
          maxLength={20}
          value={this.state.name}
          onChangeText={this.handleNameChange}
        />

        <TextInput
          placeholder="enter password"
          secureTextEntry={true}
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            margin: 20,
            height: 50,
          }}
          onChangeText={(text) => {
            this.setState({password: text});
          }}
        />

        <TouchableOpacity
          onPress={() => {
            saveSettings(this.state);
            navigate('Hello', {name: this.state.name});
          }}>
          <Text
            style={{
              backgroundColor: 'blue',
              color: 'white',
              height: 50,
              textAlign: 'center',
              margin: 20,
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
