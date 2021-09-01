import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
} from 'react-native';

import FirewallImage from '../assets/firewall_red.png';
import CourseVideo from '../assets/ataques_pishing_malwares_roubo.mp4';

import Video from 'react-native-video';

const AtaquesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.firewallContainer}>
            <Image style={styles.firewallImage} source={FirewallImage} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.displayNameText2}>
                Você está aprendendo sobre:
              </Text>
              <Text style={styles.displayNameText3}>
                Ataques, pishing, malwares e roubo.
              </Text>
            </View>
          </View>
          <View>
            <Video
              source={CourseVideo}
              style={{width: 390, height: 225}}
              controls={true}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View style={{paddingTop: 1}}>
          <Button
            color="#212431"
            title="Ir para o próximo curso"
            onPress={() => navigation.navigate('Senhas seguras...')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  container: {
    flex: 1,
    display: 'flex',
    padding: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
  },
  firewallContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  firewallImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  displayNameText: {
    fontSize: 25,
    color: '#0f0f0f',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  displayNameText2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0f0f0f',
  },
  displayNameText3: {
    fontSize: 15,
    color: '#0f0f0f',
  },
});

export default AtaquesScreen;
