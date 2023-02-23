import { Text, View, Image, StyleSheet } from 'react-native';

export function HeaderHome() {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/C560BAQFguSdX56hQXg/company-logo_200_200/0/1616616478951?e=1684972800&v=beta&t=HY5NWrzopyl52_EZe66UAyGic_vwOzg_KTrkHf_5fdI' }}
        style={styles.avatar}
      />

      <View style={styles.user}>
        <Text style={styles.title}>
          Olá, Matheus
        </Text>
        <Text style={styles.subtitle}>
          Cadastre suas Atividades.
        </Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 178,
    backgroundColor: '#1967FB',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24
  },
  user: {
    flex: 1,
    marginLeft: 12
  },
  title: {
    color: '#FFF',
    fontSize: 20
  },
  subtitle: {
    color: '#FFF',
    fontSize: 13
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 5,
  }

});