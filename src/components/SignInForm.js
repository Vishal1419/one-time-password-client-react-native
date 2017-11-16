import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-43d8d.cloudfunctions.net';

class SignInForm extends Component {

    state = { phone: '', code: '' }

    handleSubmit = () => {
        const { phone, code } = this.state;

        axios.post(`${ROOT_URL}/verifyOTP`, { phone, code })
             .then((response) => {
                firebase.auth().signInWithCustomToken(response.data.token);
             }).catch((err) => {
                console.log(err);
             });
    }   

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone No.</FormLabel>
                    <FormInput 
                        value={this.state.phone}
                        onChangeText={text => { this.setState({ phone: text }); }}
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Code</FormLabel>
                    <FormInput 
                        value={this.state.code}
                        onChangeText={text => { this.setState({ code: text }); }}
                    />
                </View>
                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        );
    }
}

export default SignInForm;
