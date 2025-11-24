import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';


const mockRouter = {
    push: (path: any) => {

        console.log(`Action: Confirmed! Navigating to Home Page (${path}).`);
    }
};

const Terminate = () => {
    const [showPrompt, setShowPrompt] = useState(false);
    

    const router = mockRouter;

    const handleConfirm = () => {

        setTimeout(() => {
            setShowPrompt(false);
            router.push('/');
        }, 100);
    };


    const handleCancel = () => {
        setShowPrompt(false);
    };

    return (
        <View style={styles.container}>
            {/* The Main Terminate Button */}
            <TouchableOpacity
                onPress={() => setShowPrompt(true)}
                style={styles.terminateButton}
                activeOpacity={0.7}
            >
                {/* Replaced Lucide X icon with a simple text cross */}
                <Text style={styles.terminateIcon}>✕</Text> 
            </TouchableOpacity>
            
            {/* Custom Confirmation Modal/Prompt */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={showPrompt}
                onRequestClose={handleCancel}
            >
                <TouchableOpacity 
                    // This overlay allows closing the modal by touching the dark background area
                    style={styles.modalOverlay}
                    activeOpacity={1} 
                    onPress={handleCancel} 
                >
                    <View 
                        style={styles.modalContent}
                        // Prevent the touch event from propagating to the overlay when clicking inside the content
                        onTouchStart={(e) => e.stopPropagation()} 
                    >
                        {/* Kindergarten-Friendly French Prompt */}
                        <Text style={styles.modalIcon}>🛑</Text> {/* Using a stop sign emoji for clarity */}
                        <Text style={styles.modalTitle}>
                            Veux-tu faire une pause ?
                        </Text>
                        <Text style={styles.modalText}>
                            Si tu appuies sur "Oui", tu retourneras au début.
                        </Text>

                        <View style={styles.buttonContainer}>
                            {/* Confirmation Button (Yes) */}
                            <TouchableOpacity
                                onPress={handleConfirm}
                                style={[styles.actionButton, styles.confirmButton]}
                                activeOpacity={0.8}
                            >
                                {/* Replaced Home icon with a house emoji */}
                                <Text style={styles.buttonText}>🏠 Oui, j'arrête!</Text>
                            </TouchableOpacity>
                            
                            {/* Cancel Button (No) */}
                            <TouchableOpacity
                                onPress={handleCancel}
                                style={[styles.actionButton, styles.cancelButton]}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.buttonText}>Non, je continue!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        // Add a background color to ensure the component is visible on its own
        backgroundColor: '#f0f0f0', 
    },
    // The Main Terminate Button Styles
    terminateButton: {
        padding: 16,
        borderRadius: 50, // Making it perfectly round
        backgroundColor: '#dc2626', // bg-red-600
        elevation: 10, // Shadow equivalent for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    terminateIcon: {
        fontSize: 30, // w-8 h-8 equivalent
        color: 'white',
        fontWeight: 'bold',
    },

    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // bg-black bg-opacity-70
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 12, // rounded-xl
        padding: 30,
        maxWidth: 350, // max-w-sm
        width: '100%',
        alignItems: 'center',
        elevation: 20, // Strong shadow
        // iOS shadows
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },
    modalIcon: {
        fontSize: 40,
        // Changed icon from ⚗ (retort) to 🛑 (stop sign) for better context
        color: '#ef4444', // text-red-500
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '900', // font-extrabold
        color: '#1f2937', // text-gray-800
        marginBottom: 10,
        textAlign: 'center',
    },
    modalText: {
        color: '#4b5563', // text-gray-600
        marginBottom: 24,
        fontWeight: '500', // font-medium
        textAlign: 'center',
    },

    // Button Group
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 16, // Spacing between buttons
    },
    actionButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    confirmButton: {
        backgroundColor: '#10b981', // bg-green-500
    },
    cancelButton: {
        backgroundColor: '#ef4444', // bg-red-500
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    }
});

export default Terminate;