import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import { CheckBox } from '../components/CheckBox';
import { Button } from '../components/Button';
import { HeaderForm } from '../components/HeaderForm';

const TeamConditionForm = ({ navigation }) => {

  return (
    <>
      <HeaderForm title="Planejamento da Equipe" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>01 - A equipe está em boas condições Físicas e Psicológicas?</Text>
          <View style={styles.checkBox}>
            <CheckBox title="Sim" />
            <CheckBox title="Não" />
          </View>
          <Text style={styles.label}>02 - O motorista está bem e não fez uso de qualquer substância que provoque sonolência?</Text>
          <View style={styles.checkBox}>
            <CheckBox title="Sim" />
            <CheckBox title="Não" />
          </View>
          <Text style={styles.label}>03 - O veículo está em condições de uso? (Parte elétrica, pneus etc.)</Text>
          <View style={styles.checkBox}>
            <CheckBox title="Sim" />
            <CheckBox title="Não" />
          </View>

          <Text style={styles.label}>04 - Os materiais, ferramentas, equipamentos, EPI's e EPC's estão em condições de uso?</Text>
          <View style={styles.checkBox}>
            <CheckBox title="Sim" />
            <CheckBox title="Não" />
          </View>

          <Text style={styles.label}>05 - A equipe está adequada com trabalhadores qualificados?</Text>
          <View style={styles.checkBox}>
            <CheckBox title="Sim" />
            <CheckBox title="Não" />
          </View>

          <Text style={styles.label}>06 - Os trabalhadores estão orientados que é obrigatório o uso de cinto de segurança nos veículos?</Text>
          <View style={styles.checkBox}>
            <CheckBox title="Sim" />
            <CheckBox title="Não" />
          </View>

          <Text style={styles.label}>07 - Os trabalhadores estão orientados que é proibido o uso de celulares enquanto estão dirigindo?</Text>
          <View style={styles.checkBox}>
            <CheckBox title="Sim" />
            <CheckBox title="Não" />
          </View>

          <Text style={styles.label}>08 - Os trabalhadores estão orientados que é obrigatório o uso de coletes salva vidas na embarcação?</Text>
          <View style={styles.checkBox}>
            <CheckBox title="Sim" />
            <CheckBox title="Não" />
          </View>

          <Button
            title="Proximo" onPress={() => navigation.navigate('Task')}
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

export default TeamConditionForm;
