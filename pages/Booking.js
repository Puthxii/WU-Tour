import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';


export default class Booking extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      SGTour: 0,
      STTour: 0,
      SLunch: 0,
      SDinner: 0,
      CID: '',
      GTour: '',
      TTour: '',
      Lunch: '',
      Dinner: ''
    }
  }

  componentWillMount() {
    
    return fetch('http://172.16.157.137/wutour/ListBook.php')
      .then((response) => response.json())
      .then((responseJson) => {
       //  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
      
  }


  render() {
  
    return (
      <Container style={styles.container}>
          
          <FlatList style={styles.notificationList}
          data={this.state.dataSource}
          // ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.CID} style={styles.notificationBox}>
                <Text style={styles.name}>ID: {item.CID}</Text>
                <Text style={styles.name}>GTour: {item.GTour}</Text>
                <Text style={styles.name}>TTour: {item.TTour}</Text>
                <Text style={styles.name}>Lunch: {item.Lunch}</Text>
                <Text style={styles.name}>Dinner: {item.Dinner}</Text>

                <Button style={styles.buttonEdit} onPress={() => this.props.navigation.navigate('Edit' ,{
                CID: item.CID,
                GTour: item.GTour,
                TTour: item.TTour,
                Lunch: item.Lunch,
                Dinner: item.Dinner,
              })}>
                <Text style = {styles.info2}>Edit</Text>
                </Button>
                <View>
                  {
                  item.GTour == true
                    ?
                    <Text> {this.setState({ SGTour : this.state.SGTour + 1 })} </Text> 
                    :
                    <Text> {this.setState({ SGTour : 1  })} </Text>
                  }
              </View>
              <View>
                  {
                  item.TTour == true
                    ?
                    <Text> {this.setState({ STTour : this.state.STTour + 1 })} </Text> 
                    :
                    <Text> {this.setState({ STTour : 1  })}  </Text>
                  }
              </View>
              <View>
                  {
                  item.Lunch == true
                    ?
                    <Text> {this.setState({ SLunch : this.state.SLunch + 1 })} </Text> 
                    :
                    <Text> {this.setState({ SLunch : 1  })}  </Text>
                  }
              </View>
              <View>
                  {
                  item.Dinner == true
                    ?
                    <Text> {this.setState({ SDinner : this.state.SDinner + 1 })} </Text> 
                    :
                    <Text> {this.setState({ SDinner : 1  })}  </Text>
                  }
              </View>
            </View>      
          )}
          />
          <View style={styles.box}>
              <View style={styles.boxContent}>
                <Text style={styles.cardTittle}>Show with Packege</Text>
                <View style={styles.buttons}>
                  <TouchableHighlight style={[styles.button, styles.b1]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/deciduous-tree.png'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.b1]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/parliament.png'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.b1]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/rice-bowl.png'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.b1]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/food-and-wine.png'}}/>
                  </TouchableHighlight>
                </View>
              </View>
            </View>


          <View style={styles.card}>
            <Text style={styles.cardTittle}>    Sumary Booking</Text>   
            <Text style={styles.name}>GTour : {this.state.SGTour} </Text>
            <Text style={styles.name}>TTour : {this.state.STTour} </Text>
            <Text style={styles.name}>Lunch : {this.state.SLunch} </Text>
            <Text style={styles.name}>Dinner : {this.state.SDinner} </Text>
  
          </View>
         
        
     

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
  ChartCard:{
    // marginTop:10,
    // padding:30,
    paddingTop:10,

  },
  card:{
    backgroundColor: "#faf5bb",
    borderRadius:10,
    padding:10,
    height:100,
    marginTop:10,
  },
  cardTittle:{
    color: "#696969",
    fontSize:14,
    marginBottom:5,
  },
  box: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
  },
  buttons:{
    flexDirection: 'row',
  },
  button: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width:50,
    marginRight:5,
    marginTop:5,
  },
  b1: {
    backgroundColor: "#eda590",
  },
  buttonEdit: {
    flexDirection: 'column',
    backgroundColor: "#fc6b51",
    width:55,
    height:55,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    marginLeft: 22,
    // marginRight: 22,
    borderRadius: 10,
   
  }
 
});  

 