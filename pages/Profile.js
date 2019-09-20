import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';


export default class Profile extends Component {

  render() {
    return (
      <Container style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar}  source={require('.././img/Profile/P.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.namex}>Teenapat Rattanawong</Text>
              <Text style={styles.infox}>Back-End / Web developer</Text>
              <Text style={styles.description}>Contect : 093-709-0348</Text>
              
              {/* <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity> */}
            </View>
        </View>

        <Content />
          <Footer>
          <FooterTab style = {{ backgroundColor: '#fac9bb'}}>
            <Button >
              {/* <Badge><Text>2</Text></Badge> */}
              <Image style={styles.icon2} source={{uri: 'https://img.icons8.com/nolan/64/000000/home.png'}}/>
              <Text style = {styles.info2}>home</Text>
            </Button>
            <Button vertical  onPress={() => this.props.navigation.navigate('Staff')}>
            <Image style={styles.icon2} source={{uri: 'https://img.icons8.com/nolan/64/000000/commercial-development-management.png'}}/>
              <Text style = {styles.info2}>Staff</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Customer')}>
              {/* <Badge ><Text>2</Text></Badge> */}
              <Image style={styles.icon2} source={{uri: 'https://img.icons8.com/nolan/64/000000/user.png'}}/>
              <Text style = {styles.info2}>Customer</Text>
            </Button>
            <Button active style={styles.active} onPress={() => this.props.navigation.navigate('Profile')}>
              <Image style={styles.icon2} source={{uri: 'https://img.icons8.com/nolan/50/000000/user-male-circle.png'}}/>
              <Text style = {styles.info2}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
        
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#96e5e6",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  namex:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  infox:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  active: {
    backgroundColor: "#fc89ac"
    },
    icon2: {
        width:27,
        height:27,
      },
    info:{
      fontSize:9,
      color: "#696969",
    },
    info2:{
        fontSize:10,
        color: "#696969",
    },
});
 