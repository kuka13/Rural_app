import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { CheckBox } from '../components/CheckBox';
import { Button } from '../components/Button';
import { HeaderForm } from '../components/HeaderForm';

const TaskForm = ({ navigation }) => {

  return (
    <>
      <HeaderForm title="Atividades a Executar" />
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.checkBox}>
            <CheckBox title="Condução, viagem em veículo." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Inspeção e Manutenção das Estações." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Limpeza e Manutenção da Área Cercada das Estações." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Nivelamento Geométrico das Seções de Réguas." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Levantamento de Seção Transversal." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Levantamento Seções de Controle em Reservatórios ." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Medição de Descarga Sólida." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Medição de Descarga Líquida." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Coleta Observadores (Fichas Boletim)." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Batimetria Embarcada." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="LiDAR Aéreo Com Drones." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Ortofoto Aéreo Com Drones." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Levantamento Topográfico cadastral com RTK." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Levantamento Topográfico cadastral com Estação Total." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Monitoramento de Prismas com  Estação Total." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Batimetria monofeixe com embarcação controlada remotamente." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Batimetria multifeixe com embarcação controlada remotamente." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Implatação de marcos topográficos." />
          </View>
          
          <View style={styles.checkBox}>
            <CheckBox title="Abertura de Picadas." />
          </View>

          <View style={styles.checkBox}>
            <CheckBox title="Levantamentos Geofísicos." />
          </View>

          <Button
            title="Proximo" onPress={() => navigation.navigate('Risk')}
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

export default TaskForm;
