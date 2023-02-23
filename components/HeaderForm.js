import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export function HeaderForm({title}) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <MaterialIcons
          name="chevron-left"
          size={32}
          color="#1967FB"
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}


export const styles = StyleSheet.create({
  header: {
    height: 110,
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 24,
    paddingTop: getStatusBarHeight() + 24,
    marginBottom: 24
  },
  form: {
    width: '100%',
    padding: 24,
    flex: 1
  },
  title: {
    fontSize: 20,
    color: '#3D434D',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginLeft: -32
  },
  button: {
    zIndex: 100
  }
});