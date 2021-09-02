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

const TelaInicialScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{paddingTop: 25}}>
            <Image style={styles.firewallImage} source={FirewallImage} />
          </View>
          <View style={{paddingTop: 25}}>
            <Text style={styles.displayNameText}>
              {'Bem-vindo ao Human Firewall!'}
            </Text>
          </View>
          <View style={{paddingTop: 25}}>
            <Text style={styles.displayNameText2}>
              {'Aqui você se tornará um craque para proteger seus dados.'}
            </Text>
            <Text style={styles.displayNameText3}>
              {
                'É possível navegar entre os temas abaixo. Feito isso, você poderá responder um quiz para testar seus conhecimentos!'
              }
            </Text>
          </View>
          <View style={{paddingTop: 25}}>
            <Button
              color="#212431"
              title="Ataques, phishing, malware, roubo/perda"
              onPress={() => navigation.navigate('Ataques, pishing...')}
            />
          </View>
          <View style={{paddingTop: 15}}>
            <Button
              color="#212431"
              title="Senhas seguras"
              onPress={() => navigation.navigate('Senhas seguras...')}
            />
          </View>
          <View style={{paddingTop: 15}}>
            <Button
              color="#212431"
              title="Dados pessoais, LGPD"
              onPress={() => navigation.navigate('Dados pessoais, LGPD...')}
            />
          </View>
          <View style={{paddingTop: 15}}>
            <Button
              color="#212431"
              title="Crimes na internet, leis"
              onPress={() => navigation.navigate('Crimes na internet, leis...')}
            />
          </View>
          <View style={{paddingTop: 15}}>
            <Button
              color="#212431"
              title="Responder ao Quiz"
              onPress={() => navigation.navigate('Quiz')}
            />
          </View>
          <View style={{padding: 20}}>
            <Text>Desenvolvido por: Felipe Dumer e Isabele Spadari</Text>
          </View>
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
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#e6e6e6',
  },
  firewallImage: {
    width: 200,
    height: 200,
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

export default TelaInicialScreen;
