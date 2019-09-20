import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Switch
} from 'react-native';

export default class Edit extends Component {

  constructor(props) {
    super(props);
    state = {
      CID: '',
      GTour: false,
      TTour: false,
      Lunch: false,
      Dinner: false,
    }
  }

  componentWillMount(){
    
    
    this.setState({ 
        CID: this.props.navigation.state.params.CID,
        GTour: this.props.navigation.state.params.GTour,
        TTour: this.props.navigation.state.params.TTour,
        Lunch: this.props.navigation.state.params.Lunch,
        Dinner: this.props.navigation.state.params.Dinner,
        
     
    })
    
  }


    SwitchGTour = (value) => {
        this.setState({GTour: value})
    }

    SwitchTTour = (value) => {
        this.setState({TTour: value})
    }

    SwitchLunch = (value) => {
        this.setState({Lunch: value})
    }

    SwitchDinner = (value) => {
        this.setState({Dinner: value})
    }

    UpdateBook = () =>{
        const {CID} = this.state;
        const {GTour} = this.state;
        const {TTour} = this.state;
        const {Lunch} = this.state;
        const {Dinner} = this.state;
        
        fetch('http://172.16.157.137/wutour/EditBook.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        CID : CID,
        GTour : GTour,
        TTour : TTour, 
        Lunch : Lunch,
        Dinner: Dinner
  
        })
  
        }).then((response) => response.json())
            .then((responseJson) => {
  
              // Showing response message coming from server updating records.
            //   Alert.alert(responseJson);
              Alert.alert( responseJson+ 'Success', 'Booking updated successfully',
                    [
                      {text: 'Ok', onPress: () => this.props.navigation.navigate('Booking')},
                    ],
                    { cancelable: false }
                  );
  
            }).catch((error) => {
              console.error(error);
            });
  
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
           <Text>
                Customer ID: {this.state.CID}
            </Text>
{/*         
            <Text>
                : {this.state.GTour*1}
            </Text>
            <Text>
                : {this.state.TTour*1}
            </Text>
            <Text>
                : {this.state.Lunch*1}
            </Text>
            <Text>
                : {this.state.Dinner*1}
            </Text> */}

                 
          
          
        </View>

        <View style={styles.switch}>
            <Text>GTour: </Text>
            <Switch value = {this.state.GTour} onValueChange = {this.SwitchGTour} />
            <Text style = {{fontSize: 10, color: 'red'}}> {this.state.GTour*1}</Text>
         </View>

         <View style={styles.switch}>
            <Text>TTour: </Text>
            <Switch value = {this.state.TTour} onValueChange = {this.SwitchTTour} />
            <Text style = {{fontSize: 10, color: 'red'}}> {this.state.TTour*1}</Text>
        </View>

        <View style={styles.switch}>
            <Text>Lunch: </Text>
            <Switch value = {this.state.Lunch} onValueChange = {this.SwitchLunch} />
            <Text style = {{fontSize: 10, color: 'red'}}> {this.state.Lunch*1}</Text>
         </View>

         <View style={styles.switch}>
            <Text>Dinner: </Text>
            <Switch value = {this.state.Dinner} onValueChange = {this.SwitchDinner} />
            <Text style = {{fontSize: 10, color: 'red'}}> {this.state.Dinner*1}</Text>
        </View>
        
        <View>
            <Text style={{color: '#fc6b51', marginTop: 10}}>Please update Every switch</Text>
        </View>

        
        <TouchableHighlight style={[styles.buttonContainer]} onPress={this.UpdateBook}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableHighlight>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    width:55,
    height:55,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:10,
    backgroundColor: '#96d677'
  },
  loginText: {
    color: 'white',
  },
  switch:{
    flexDirection: 'row',
    alignItems:'center'
  }
});
 