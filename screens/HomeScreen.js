import { View, StyleSheet } from 'react-native';
import { HeaderHome } from '../components/HeaderHome';
import { Button } from '../components/Button';

function HomeScreen({ navigation }) {
    return (
        <>
            <HeaderHome />
            <View style={styles.container}>
                <Button
                    title="Cadastrar DDS"
                    onPress={() => navigation.navigate('TeamForm')}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F3F5',
        alignItems: 'center',
        flex: 1,
        padding: 20,
        paddingTop: 50,
    }
});

export default HomeScreen;