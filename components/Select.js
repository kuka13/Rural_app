
import React from 'react';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { TouchableOpacity, StyleSheet, View, Text, Modal, FlatList } from 'react-native';
import { CheckBox } from './CheckBox';


export function Select({ options, onChangeSelect, text }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState(options);
  const [txt, setTxt] = useState(text);

  function renderOption({ item }) {
    return (
      <TouchableOpacity style={styles.item}
        onPress={() => {
          onChangeSelect(item.name)
          setTxt(item.name)
          setModalVisible(false)
        }
        }
      >

        <Text> {item.name}</Text>
      </TouchableOpacity>
    )
  }


  return (
    <>
      <TouchableOpacity style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Text>{txt}</Text>
        <AntDesign name="down" size={20} color="black" />
      </TouchableOpacity>
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)
        } style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.button}
          >
            <MaterialIcons
              name="chevron-left"
              size={32}
              color="#1967FB"
            />
          </TouchableOpacity>

          <Text style={styles.title}>
            {txt}
          </Text>

        </View>

        <FlatList
          data={list || []}
          keyExtractor={(item) => String(item.id)}
          renderItem={(item) => renderOption(item)}
        />
      </Modal>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'F8F9FA',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
  },
  item: {
    height: 40,
    backgroundColor: 'F8F9FA',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#1967FB"
  },
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