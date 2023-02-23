import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { CheckBox } from '../components/CheckBox';
import { Button } from '../components/Button';
import { HeaderForm } from '../components/HeaderForm';

const RiskForm = ({ navigation }) => {

  return (
    <>
      <HeaderForm title="Fatores de Riscos" />
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.checkBox}>
            <CheckBox title="Afogamento Rio/Reservatório." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Animais peçonhentos." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Condições climáticas adversas." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Rotina de trabalhos inadequada." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Ergonomia, arranjo físico inadequado." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Contato com água contaminada." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Ruído excessivo." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Umidade excessiva." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Contato com partes cortantes." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Desníveis, superfícies irregulares e escorregadias." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Trabalho em Altura." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Veículo, Embarcação." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Condições do trânsito, das vias, do veículo e condutor." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Outros:" />
          </View>
          
          <Button
            title="Proximo" onPress={() => navigation.navigate('ControlRisk')}
          />
        </View>
      </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 5,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
  },
  checkBox: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center',
    padding: 20,
    margin: 20
  },
});

export default RiskForm;
