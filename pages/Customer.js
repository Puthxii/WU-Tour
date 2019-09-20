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
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

import ListView from "deprecated-react-native-listview";

export default class Staff extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
    isLoading: true,
      dataSource: ds.cloneWithRows([
        {icon:"https://bootdey.com/img/Content/avatar/avatar1.png", description: "User 1"},
        {icon:"https://bootdey.com/img/Content/avatar/avatar2.png", description: "User 2"}, 
        {icon:"https://bootdey.com/img/Content/avatar/avatar3.png", description: "User 3"}, 
        {icon:"https://bootdey.com/img/Content/avatar/avatar4.png", description: "User 4"}, 
        {icon:"https://bootdey.com/img/Content/avatar/avatar5.png", description: "User 5"}, 
        {icon:"https://bootdey.com/img/Content/avatar/avatar6.png", description: "User 6"}, 
        {icon:"https://bootdey.com/img/Content/avatar/avatar1.png", description: "User 7"}, 
        {icon:"https://bootdey.com/img/Content/avatar/avatar2.png", description: "User 8"},
        {icon:"https://bootdey.com/img/Content/avatar/avatar3.png", description: "User 9"},
      ]),
    };
  }

  componentWillMount() {
    
    return fetch('http://172.16.157.137/wutour/ListCustomer.php')
      .then((response) => response.json())
      .then((responseJson) => {
       //  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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

 

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#ffffff' }} />
    );
  };

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <Container style={styles.container}>
{/* 
            <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/search/androidL/100/000000'}}/>
            <TextInput style={styles.inputs}
                ref={'txtPassword'}
                placeholder="Search"
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}/>
          </View>
        </View> */}

           <FlatList style={styles.notificationList}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.CID} style={styles.notificationBox}>
                <Text style={styles.name}>ID: {item.CID}</Text>
                <Text style={styles.name}>Name: {item.CName}</Text>
                <Text style={styles.name}>Phone: {item.CTelephone}</Text>

              
              {/* <Text>Photo: {item.SPhoto}</Text> */}
              {/* { item.SPhoto} */}
             
               {/* <Image
                    style={styles.image}
                    source={require('.././img/StaffsPhoto/7501.jpg')}
                /> */}

              <View>
                  {
                  item.CSex == 'M'
                    ?
                    <Text style={styles.name}>Gender: Male</Text> 
                    :
                    <Text style={styles.name}>Gender: Female</Text>
                  }
              </View>
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
                    {/* <Badge><Text>2</Text></Badge> */}
                    <Image style={styles.icon2} source={{uri: 'https://img.icons8.com/nolan/64/000000/home.png'}}/>
                    <Text style = {styles.info2}>home</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('Staff')} >
                    <Image style={styles.icon2} source={{uri: 'https://img.icons8.com/nolan/64/000000/commercial-development-management.png'}}/>
                    <Text style = {styles.info2}>Staff</Text>
                    </Button>
                    <Button active style={styles.active} >
                    {/* <Badge ><Text>2</Text></Badge> */}
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
  BImgSize:{
    width: 45,
    height: 45,
    backgroundColor: '#faf5bb'
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
});  
