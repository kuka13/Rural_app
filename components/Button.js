import { Text, TouchableOpacity, StyleSheet } from 'react-native';


export function Button({ title, ...rest }) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#3D434D',
    fontSize: 15,
  },
  
});