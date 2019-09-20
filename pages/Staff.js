import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import ListView from "deprecated-react-native-listview";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class Staff extends Component {

  constructor(props) {
    super(props);
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
    isLoading: true,
    key: '',
    
    };

  }

  componentWillMount() {
    
    return fetch('http://172.16.157.137/wutour/ListStaff.php')
      .then((response) => response.json())
      .then((responseJson) => {
        // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
        // alert(JSON.stringify(responseJson))
        // let result = responseJson.map(data => data.stat);
        // alert(result)
        // var my_json = JSON.stringify(responseJson)

        // var filtered_json = (JSON.parse(my_json), {stat: 2});
        // let data = JSON.stringify(filtered_json.stat)
        // data2 = responseJson
        // alert(responseJson.book_id)
        // alert(data)
        // if(result == 1){
        //   alert("รอยืนยัน")
        // }else if(result == 2){
        //   alert("ยืนยันแล้ว")
        // }else{
        // }
      })
      .catch((error) => {
        console.error(error);
      });
      
  }
    
  

  
    SearchStaff(key){
     
    }



  render() {
    return (
      <Container style={styles.container}>
 
            <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                  value={this.state.key}
                  onChangeText={(key) => this.SearchStaff(key)}
              />
          </View>
     
          <TouchableHighlight style={styles.saveButton} onChangeText={(key) => this.SearchStaff(key)}>
            <Image style={[styles.icon, styles.iconBtnSearch]} source={{uri: 'https://img.icons8.com/nolan/64/000000/search.png'}}/>
          </TouchableHighlight>
        </View>

          <FlatList style={styles.notificationList}
            data={this.state.dataSource}
            // ItemSeparatorComponent={this.ListViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
            <View key={item.SID} style={styles.notificationBox} >
             <View >{(() => {
                    switch ( item.SPhoto ) {
                    case "7501.jpg":  return <Image style={styles.image} source={require('.././img/StaffsPhoto/7501.jpg')} />;
                    case "7502.jpg": return <Image style={styles.image} source={require('.././img/StaffsPhoto/7502.jpg')} />;
                    case "7503.jpg":  return <Image style={styles.image} source={require('.././img/StaffsPhoto/7503.jpg')} />;
                    default:      return <Image style={styles.image} source={require('.././img/StaffsPhoto/7504.jpg')} />;
                    }
              })()}</View>
              <Text style={styles.name}>ID: {item.SID}</Text>
              <Text style={styles.name}>Name: {item.SName}</Text>
              <Text style={styles.name}>Phone: {item.STelephone}</Text>
            </View>
            )}
          /> 
          
 


            
        {/* <ListView style={styles.notificationList}
          dataSource={this.state.dataSource}
          renderRow={(notification) => {
            return (
              <View style={styles.notificationBox}>
                <Image style={styles.image}
                  source={{uri: notification.icon}}/>
                
                <Text style={styles.name}>{notification.description}</Text>
              </View>
            )}}/> */}
            <Content />
            <Footer>
                <FooterTab style = {{ backgroundColor: '#fac9bb'}}>
                    <Button onPress={() => this.props.navigation.navigate('Home')}>
                    <Image style={styles.icon2} source={{uri: 'https://img.icons8.com/nolan/64/000000/home.png'}}/>
                    <Text style = {styles.info2}>home</Text>
                    </Button>
                    <Button active style={styles.active} >
                    <Image style={styles.icon2} source={{uri: 'https://img.icons8.com/nolan/64/000000/commercial-development-management.png'}}/>
                    <Text style = {styles.info2}>Staff</Text>
                    </Button>
                    <Button vertical onPress={() => this.props.navigation.navigate('Customer')}>
                    <Image style={styles.icon2} source={{uri: 'https://img.icons8.com/nolan/64/000000/user.png'}}/>
                    <Text style = {styles.info2}>Customer</Text>
                    </Button>
                    <Button vertical onPress={() => this.props.navigation.navigate('Profile')}>
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
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent:{
    flexDirection: 'row',
    marginTop:30,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:45,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  notificationBox: {
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  name:{
    fontSize:10,
    fontWeight: 'bold',
    color: "#696969",
    marginLeft:10,
    alignSelf: 'center'
  },
  active: {
    backgroundColor: "#fc89ac"
  },
  icon2: {
    width:27,
    height:27,
  },
  info2:{
    fontSize:10,
    color: "#696969",
  },
  saveButton: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    width:70,
    alignSelf: 'flex-end',
    backgroundColor: '#fd9191',
    borderRadius:30,
  },
});  
