import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { CheckBox } from '../components/CheckBox';
import { Button } from '../components/Button';
import { HeaderForm } from '../components/HeaderForm';

const ControlRiskForm = ({ navigation }) => {

  return (
    <>
      <HeaderForm title="Controle de Riscos" />
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.checkBox}>
            <CheckBox title="Uso de embarcação adequada, uso de coletes salva vidas." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Uso de Epis e repelentes." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Parar atividade e buscar abrigo em local seguro." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Exercer o direito de recusa e parar com a atividade." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Usar postura conforme treinamento em ergonomia." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Uso de luvas, macacão impermeável." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Uso de protetor auricular." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Trocar de uniforme sempre que necessário." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Uso de Epis." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Usar botas ou calçados adequados." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Usar cinto de segurança, trava quedas, mosquetão." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Inspecionar antes de utilizá-lo, condutor habilitado." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Respeitar as leis de trânsito e dirigir com atenção." />
          </View>

          <Button
            title="Proximo" onPress={() => navigation.navigate('SaveForm')}
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

export default ControlRiskForm;
