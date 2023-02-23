import { useCallback, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

// import * as XLSX from 'xlsx';
// import * as FileSystem from 'expo-file-system';
// import * as Sharing from 'expo-sharing';

import { HeaderForm } from '../components/HeaderForm';
import { Button } from '../components/Button';
import { useFocusEffect } from '@react-navigation/native';



const SaveForm = ({ navigation }) => {
    const [data, setData] = useState([]);

    const { getItem, setItem } = useAsyncStorage("@saveteam:team");

    async function handleFetchData() {
        const response = await getItem();
        const data = response ? JSON.parse(response) : [];
        setData(data);
    }

    useFocusEffect(useCallback(() => {
        handleFetchData();
    }, []));
    const drivers = data.map((item) => item.driver)
    const car = data.map((item) => item.car)

    const html = `
    <html>
        <body>
            <table>
                <tr>
                    <th> <img
                    src='https://lh3.googleusercontent.com/docs/AG8NV2b0M7c4vEFwLferk_FHl0ozoW0nuXbYLljEAoqOW0z4KUFMMwX8UkKwJEhAOxw-YuC5yGh8tkCeBwaQxL9SistNhjGDa2nhqgMqUSFLhavUcfeHd4ehFO6MwB9qrE5wVnmfjYEhSsoHaJbU0BpM2L4vzp-EuWNND3sU8PD9J3gVITTqjnOmCQ0fGef9eMUOuQWFdv0UlXL8DHNoc3Fp2SW7biA4dmEQuwEz4wK2mCXcJYpaU55eGDojtPnvDOJ5Vc6OqHuJFyGfFCEa2rmAkShOdhqaoyU2_DKtN5ZklteAGCv9vkeK_swg4gP_5MA3-wLAJtoj00IdtmjFL7InBgOYvdPmWpl5UWFl5Mua9K1ZgGqG2CQNMMJYIE3KMRwZ1hEgTWvOF9wcyogdAOgfY0At6kHn0pZ5CEeQlE0E0WTPaWgFuSRy40mTRFhaF5DPfBcfmqVqWcssb2LB-FUMDjvkU3k3D_bFN1t3A-Ug0W6eQWlBQD6Hr7__AuCrmzhxnCa1Lj8TjywsQaVIBY3kmjq0vWg_ZJe8MCira61vej-bOYmNP9Tdo7O2AGuRcPhcq4U9sONbZB45-uh-ucwEa4qoP3OnN0IoJ6NQRGXrNIO9OwOoL9DS9YTqKDCwUygDKn3Hahqk-xVmqp9US7VMOo87zdIoBZ92f7CKNDydAjxZhCoy968Bju_3unfpwzJByN3_U0Jd5rMdnyWzzkF69EHfUk2In4B9Qi1IaOOsxi-m6iurJwLrB9F_iKJubplj0gtDTp2RGax88DzKRiTbqfALvNggcRmcr9RfkSmM8KNiVL193JMVaduOysvh5N5uYhP3p40WFFzeheV-8bAt7PQL22iSJLs6SrLzcMT5ZCcki2HT9gCd08yo7bywvQgbT8GgKIeauI7LsdxghsnyFZtOUoYPCOfmwYVFTHjn-rSAQE25q2phCC36JILwuBbApT_Gk7Oc8v5qP7FhK5_bzM0HBeojEBatji99Pjpe98wpre0xjSh5g4rtXdQwrVzrqYB9NwIfP1T5sPhxk4zBcgupF0zG7FPn09ckzdBIZNiJfbBJhbhVzL4QOLFRkakvNLB7E1IJ7VVr_4m4LY91NfZWUCTnhrdz6wP0av_QIeOxv0ncSqhwKbTz22kvOdX3uBzLfcbfV5sZJ1tqDBlhfv_I-aL7iAvDmJJRagjz'
                    style='display: block;' height='108' width='178'></th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </body>
    </html>
  `

    const generatePdf = async () => {
        const file = await printToFileAsync({
            html: html,
            base64: false
        });

        await shareAsync(file.uri);
    }

    // const generateExcel = () => {
    //     let wb = XLSX.utils.book_new();

    //     let ws = XLSX.utils.aoa_to_sheet([
    //       ["Odd", "Even", "Total", ],
    //       [drivers, 2, { t: 'n', v: 3, f: 'A2+B2'}],
    //       [car, 4, { t: 'n', v: 7, f: 'A3+B3'}],
    //       [5, 6, { t: 'n', v: 10, f: 'A4+B4'}]
    //     ]);

    //     XLSX.utils.book_append_sheet(wb, ws, "Planilha", true);


    //     const base64 = XLSX.write(wb, { type: "base64" });
    //     const filename = FileSystem.documentDirectory + "Controle_de_Risco.xlsx";
    //     FileSystem.writeAsStringAsync(filename, base64, {
    //       encoding: FileSystem.EncodingType.Base64
    //     }).then(() => {
    //       Sharing.shareAsync(filename);
    //     });
    //   };

    return (
        <>
            <HeaderForm title="Salvar Informações" />
            {
                data.map((item) => {
                    <Text>{item.driver}</Text>
                })
            }

            <FlatList
                style={styles.container}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <>
                        <Text style={styles.input}>{item.driver}</Text>
                        <Text style={styles.input}>{item.car}</Text>
                    </>
                }
            />
            <Button
                title="Salvar" onPress={generatePdf}
            />
        </>
    );
}



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
        borderColor: 'green',
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

export default SaveForm;