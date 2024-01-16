import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [url, setUrl] = useState('')
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()

    const handlePress = () => {
        if (!url) return Alert.alert("Please Enter The URL")
        return navigation.replace("WebView", { url })
    }

    return (
        <View
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingRight: insets.right,
                paddingLeft: insets.left,
                ...styles.container
            }}>
            <TextInput
                style={styles.input}
                placeholder="Enter Webview Url"
                value={url}
                onChange={(value) => setUrl(value.nativeEvent.text)}
            />
            <TouchableOpacity style={styles.submitButton} onPress={handlePress}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%', // Adjust the width as needed
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})