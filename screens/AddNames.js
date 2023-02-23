import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/Button';
import { HeaderForm } from '../components/HeaderForm';

const AddNames = () => {
  const [names, setNames] = useState([]);

  const addName = () => {
    const newNames = [...names, 'John']; // Replace 'John' with the name you want to add
    setNames(newNames);
  };

  return (
    <View>
      <HeaderForm title="Adicionar Motorista"/>
      <Button title="Adionar" onPress={addName} />
      {names.map((name, index) => (
        <Text key={index}>{name}</Text>
      ))}
    </View>
  );
};

export default AddNames;
