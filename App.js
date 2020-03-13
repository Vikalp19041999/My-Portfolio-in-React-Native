import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.headerText}>MY PORTFOLIO</Text>
        </View>

        <ScrollView style={styles.scroll}>
          <View style={styles.mainProfile}>
            <Image source={{ uri: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png" }} style={styles.mainProfileImage} />
            <View style={styles.profileInfo}>
              <View style={styles.profileName}>
                <Text style={styles.myName}>Vikalp Chakravorty</Text>
                <Image source={{ uri: 'https://i.ya-webdesign.com/images/instagram-verified-badge-png.png' }} style={styles.verifiedItem} />
              </View>
              <Text style={styles.myEmail}>Vicks548@gmail.com</Text>
            </View>
          </View>
          <View></View>

          <View style={styles.tagLine}>
            <Text style={styles.tagLineText}>TAGLINE</Text>
            <View style={styles.skillsContainer}>
              <Text style={styles.skills}>C, C++, Python, JavaScript, TypeScript, Flutter, React Native, OpenCV for Python, MySQL, MongoDB, Firebase</Text>
              <Image style={styles.skillImage} source={{ uri: "https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/new-24-128.png" }} />
            </View>
          </View>

          <View style={styles.education}>
            <Text style={styles.educationText}>EDUCATION</Text>
            <Text style={styles.collegeName}>Geetanjali Institute of Technical Studies</Text>
            <Text style={styles.collegeSession}>(2016-2020)</Text>
            <View style={styles.college}>
              <Text style={styles.collegeBranch}>BTech in Computer Science Engineering</Text>
              <Image style={styles.collegeImage} source={{ uri: "https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/new-24-128.png" }} />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>+  ADD</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.education}>
            <Text style={styles.educationText}>WORK</Text>
            <Text style={styles.collegeName}>La Net Team Software Solutions</Text>
            <Text style={styles.collegeSession}>(2020-Present)</Text>
            <View style={styles.college}>
              <Text style={styles.collegeBranch}>Native Mobile App Developer</Text>
              <Image style={styles.workImage} source={{ uri: "https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/new-24-128.png" }} />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>+  ADD</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.education}>
            <Text style={styles.educationText}>PROJECTS</Text>
            <Text style={styles.collegeName}>City Bus Systech</Text>
            <Text style={styles.collegeSession}>(Aug 2019 - Oct 2019)</Text>
            <View style={styles.college}>
              <Text style={styles.collegeBranch}>Developed using Flutter</Text>
              <Image style={styles.projectImage} source={{ uri: "https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/new-24-128.png" }} />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>+  ADD</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBar}>
          <View style={styles.flexColumn}>
            <Image source={{ uri: "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-128.png" }} style={styles.tabIcons} />
            <Text style={styles.tabText}>Startups</Text>
          </View>
          <View style={styles.flexColumn}>
            <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/web-essential-4/64/44-web_essential-512.png" }} style={styles.tabIcons} />
            <Text style={styles.tabText}>Startups</Text>
          </View>
          <View style={styles.flexColumn}>
            <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/web-essential-4/64/01-web_essential-512.png" }} style={[styles.tabIcons]} />
            <Text style={styles.tabText}>Startups</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    marginBottom: '15%',
  },
  appHeader: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
    backgroundColor: 'white'
  },
  headerText: {
    alignContent: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'monospace'
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8%',
    width: '100%',
    position: 'absolute',
    bottom: '0%'
  },
  tabIcons: {
    height: 28,
    width: 30,
    marginTop: 25,
    borderRadius: 17.5,
  },
  flexColumn: {
    margin: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabText: {
    color: 'black',
    fontSize: 10,
  },
  mainProfile: {
    flexDirection: 'row',
    height: '10%',
    paddingLeft: '10%',
    marginTop: '5%',
    borderBottomWidth: 0.2,
  },
  mainProfileImage: {
    height: 50,
    width: 50
  },
  profileInfo: {
    flexDirection: 'column',
    marginLeft: '3%',
    marginTop: '1.8%'
  },
  myName: {
    fontSize: 17,
    fontWeight: '700'
  },
  myEmail: {
    fontSize: 12,
    opacity: 0.6
  },
  profileName:
  {
    height: 25,
    flexDirection: 'row'
  },
  verifiedItem:
  {
    height: 18,
    width: 18,
    marginStart: '2%',
    marginTop: '3%'
  },
  tagLine: {
    flexDirection: 'column',
    height: '17%',
    paddingLeft: '8%',
    paddingRight: '8%',
    marginTop: '3%',
    borderBottomWidth: 0.2,
  },
  tagLineText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace'
  },
  skillsContainer: {
    paddingTop: '2%',
    flexDirection: 'row',
    paddingRight: '3%'
  },
  skills: {
    fontSize: 14,
    opacity: 1,
  },
  skillImage: {
    paddingRight: '4%',
    height: 20,
    width: 20
  },
  education: {
    flexDirection: 'column',
    height: '25%',
    paddingLeft: '8%',
    paddingRight: '8%',
    marginTop: '3%',
    borderBottomWidth: 0.2,
  },
  educationText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace'
  },
  collegeName: {
    paddingTop: '2%',
    fontSize: 17,
    fontWeight: '700'
  },
  collegeSession: {
    fontSize: 15,
    opacity: 0.8
  },
  collegeBranch: {
    fontSize: 15
  },
  college: {
    flexDirection: 'row',
    paddingRight: '3%',
    marginBottom: '3%'
  },
  collegeImage: {
    height: 20,
    width: 20,
    marginLeft: '16%'
  },
  buttonContainer:
  {
    height: '18%',
    width: '24%',
    backgroundColor: '#74b9ff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText:
  {
    marginTop: '2%',
    fontSize: 18,
    color: 'snow',
    justifyContent: 'center'
  },
  workImage: {
    height: 20,
    width: 20,
    marginLeft: '38%'
  },
  projectImage: {
    height: 20,
    width: 20,
    marginLeft: '48%'
  }
})