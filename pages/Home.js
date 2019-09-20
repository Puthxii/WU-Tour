/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        images: [
        'https://www.wu.ac.th/images/theme2018/images/campuslife/2019_07_28_6444.jpg',
        'https://www.dineout.co.in/blog/wp-content/uploads/2018/07/blog-banner-copy-1-1030x538.png',    
          'https://source.unsplash.com/1024x768/?city',
          'https://source.unsplash.com/1024x768/?shop',
          'https://source.unsplash.com/1024x768/?tour',
          'https://source.unsplash.com/1024x768/?nature'
        ]
      };
  }

  // Alert = () => {
  //   Alert.alert("Alert", "Button pressed ");
  // }

  render() {
    return (
      <Container style={styles.container}>
        <SliderBox
        images={this.state.images}
        sliderBoxHeight={200}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)
        }
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        // onPress={() => this.Alert()}
        />
       
        <View style={styles.body}>
            <View style={styles.bodyContent}>

              <Button style={styles.menuBox}  onPress={() => this.props.navigation.navigate('Product')}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/product.png'}}/>
                <Text style={styles.info}>Package</Text>
              </Button>

              <Button style={styles.menuBox}  onPress={() => this.props.navigation.navigate('Booking')}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/book-stack.png'}}/>
                <Text style={styles.info}>Book</Text>
              </Button>

              <Button style={styles.menuBox}  onPress={() => this.props.navigation.navigate('Map')}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/map-marker.png'}}/>
                <Text style={styles.info}>Search</Text>
              </Button>

              <Button style={styles.menuBox}  onPress={() => this.props.navigation.navigate('Chart')}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/bar-chart.png'}}/>
                <Text style={styles.info}>Chart</Text>
              </Button>

              <Button style={styles.menuBox}  onPress={() => this.props.navigation.navigate('Booking2')}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/book-and-pencil.png'}}/>
                <Text style={styles.info}>Booking</Text>
              </Button>

              <Button style={styles.menuBox}  onPress={() => this.props.navigation.navigate('Booked')}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/saving-book.png'}}/>
                <Text style={styles.info}>Booked</Text>
              </Button>

              {/* <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/notification/dusk/50/ffffff'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/profile/color/50/ffffff'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/friends/color/50/ffffff'}}/>
                <Text style={styles.info}>Icon</Text>
              </View> */}



            </View>
        </View>
        {/* <Mybutton
          title="Register"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Update"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="View"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <Mybutton
          title="View All"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <Mybutton
          title="Delete"
          customClick={() => this.props.navigation.navigate('Delete')}
        /> */}
         <Content />
          <Footer>
          <FooterTab style = {{ backgroundColor: '#fac9bb'}}>
            <Button active style={styles.active}>
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
    container:{ 
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    },
    header:{
      backgroundColor: "#00BFFF",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    textInfo:{
      fontSize:18,
      marginTop:20,
      color: "#696969",
    },
    bodyContent:{
      paddingTop:40,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    menuBox:{
      flexDirection: 'column',
      backgroundColor: "#faf5bb",
      width:75,
      height:75,
      alignItems: 'center',
      justifyContent: 'center',
      margin:10,
      marginLeft: 22,
      marginRight: 22,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height:2,
        width:-2
      },
      elevation:4,
    },
    icon: {
      width:40,
      height:40,
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
    active: {
        backgroundColor: "#fc89ac"
    }
  });
   