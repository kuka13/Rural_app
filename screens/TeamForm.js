import { View } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Button } from '../components/Button';
import { HeaderForm } from '../components/HeaderForm';

import { Select } from '../components/Select';
import { drivers } from '../db/drivers'
import { cars } from '../db/cars';


const TeamForm = ({ navigation }) => {

  const [driver, setDriver] = useState("");
  const [car, setCar] = useState("");

  const { getItem, setItem } = useAsyncStorage("@saveteam:team");

  async function handleNew() {
      const id = uuid.v4();

      const newData = {
        id,
        driver,
        car
      }

      const data = [newData];
      await setItem(JSON.stringify(data));

  }

  return (
    <>
      <HeaderForm title="Cadastro da Equipe" />
      <ScrollView>
        <View>
          <Text style={styles.label}>Motorista</Text>
          <Select options={drivers} onChangeSelect={(name) => {setDriver(name)}} text="Selecione o Motorista" />
        </View>

        <View>
          <Text style={styles.label}>Veiculo</Text>
          <Select options={cars} onChangeSelect={(name) => {setCar(name)}} text="Selecione o Veiculo" />
        </View>


        <View style={styles.container}>
          <Button
            title="Proximo" onPress={() => {
            navigation.navigate('TeamCondition')
            handleNew()
          }}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5,
    paddingLeft: 20,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 4,
    borderColor: '#E3E3E3',
    backgroundColor: "#1967FB",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 0.2,
    padding: 10,
    margin: 10,
  },
});

export default TeamForm;
