import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Lab() {
    return (
        <View style={styles.container}>

            <Image
                source={require('./../assets/images/IT_Logo.png')} // Local image require
                style={styles.image}
                resizeMode="contain" // Adjust the resizeMode as per your requirement
            />
            <Text style={styles.textfew}>คณะเทคโนโลยีสารสนเทศ</Text>
            <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
            <StatusBar style="auto" />



            <View style={styles.fixedBottom}>
                <Button
                    title="Programs"
                    accessibilityLabel="Learn more about this purple button"
                />
                <View style={styles.gap}>

                </View>
                <Button
                    title="About us"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fixedBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 40,
    },
    textfew: {
        fontSize: 20,
        marginBottom: 10,
    },
    gap: {
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
});
