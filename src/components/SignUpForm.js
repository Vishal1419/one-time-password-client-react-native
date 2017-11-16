import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-43d8d.cloudfunctions.net';

class SignUpForm extends Component {

    state = { phone: '' }

    //Both handle submit functions are equivalent. 
    //But using async await syntax code becomes much cleaner.
    handleSubmit = async () => {
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
            await axios.post(`${ROOT_URL}/requestOTP`, { phone: this.state.phone });
        } catch (err) {
            console.log(err);
        }
    }

    // handleSubmit = () => {
    //     axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
    //          .then(() => {
    //             axios.post(`${ROOT_URL}/requestOTP`, { phone: this.state.phone })
    //                  .catch((err) => {
    //                     console.log(err);
    //                  });
    //          }).catch((err) => {
    //             console.log(err);
    //          });
    // }   

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
                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        );
    }
}

export default SignUpForm;
