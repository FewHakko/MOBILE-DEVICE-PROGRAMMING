import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function Lab() {
    return (

        <View>
            <View style={styles.container}>
                <Image
                    source={require('./../assets/images/IT_Logo.png')} // Local image require
                    style={{ width: 70, height: 60, margin: 14, marginLeft: 20 }}
                />
                <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#030293', marginLeft: 60 }}>Programs</Text>
            </View>


            <ScrollView>

                <View style={styles.fewza}>
                    <Image
                        source={require('./../assets/images/course-bach-it.jpg')} // Local image require
                        style={{ width: 393, height: 250 }}
                    />
                    <TouchableOpacity style={styles.button} >
                        <Text style={{ fontWeight: 'bold' }}>Information Technology</Text>
                    </TouchableOpacity>

                    <Image
                        source={require('./../assets/images/course-bach-dsba.jpg')} // Local image require
                        style={{ width: 393, height: 250 }}
                    />
                    <TouchableOpacity style={styles.button} >
                        <Text style={{ fontWeight: 'bold' }}>Data Science Business Analytics</Text>
                    </TouchableOpacity>

                    <Image
                        source={require('./../assets/images/course-bach-bit.jpg')} // Local image require
                        style={{ width: 393, height: 250 }}
                    />
                    <TouchableOpacity style={styles.button} >
                        <Text style={{ fontWeight: 'bold' }}>Business Information Technology</Text>
                        <Text style={{ fontWeight: 'bold' }}>(International Prgoram)</Text>
                    </TouchableOpacity>

                    <Image
                        source={require('./../assets/images/course-bach-ait.jpg')} // Local image require
                        style={{ width: 393, height: 250 }}
                    />
                    <TouchableOpacity style={styles.button} >
                        <Text style={{ fontWeight: 'bold' }}>Artifical Intelligence Technology</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#abd9e6',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 393
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        width: 393,
        height: 40,
    },


    fewza: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
