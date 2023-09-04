import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AppButton = ({ title, onPress }) => {
    const [isDisabled, setDisabled] = useState(false);

    const handlePress = () => {
        setDisabled(true);
        setTimeout(() => setDisabled(false), 3000);
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.appButtonContainer, isDisabled && styles.appButtonDisabled]}
            disabled={isDisabled}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    appButtonDisabled: {
        opacity: 0.5,
    },
    appButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    addButton: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 30,
    },
    cancelButton: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default AppButton;
