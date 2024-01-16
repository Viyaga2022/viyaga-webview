import { BackHandler, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import WebView from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

const WebviewScreen = () => {
    const insets = useSafeAreaInsets();
    const route = useRoute()
    const { url } = route.params

    useEffect(() => {
        const handleBackButton = () => {
            // Check if WebView can go back
            webViewRef.current && webViewRef.current.goBack();
            return true; // Prevent default behavior (exiting the app)
        };

        // Add event listener for hardware back button
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => {
            // Remove event listener when the component is unmounted
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
    }, []);

    const webViewRef = useRef(null);
    return (
        <View
            style={{
                paddingBottom: insets.bottom,
                paddingRight: insets.right,
                paddingLeft: insets.left,
                ...styles.container
            }}>
            <WebView
                ref={webViewRef}
                source={{ uri: url }}
                style={{ flex: 1 }}
            />
        </View>
    )
}

export default WebviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    }
})