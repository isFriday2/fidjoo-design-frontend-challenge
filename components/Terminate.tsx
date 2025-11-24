import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image } from 'react-native';

import { LogOut, X } from 'lucide-react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';

import { SadMascot } from '@/assets/assets';
import { ThemedText } from './ThemedText';
import { ThemedButton } from './ThemedButton';
import { useRouter } from 'expo-router';



export default function Terminate() {
    const [showPrompt, setShowPrompt] = useState(false);
    const router = useRouter();
   
    

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;
    const handleConfirm = () => {

        setTimeout(() => {
            setShowPrompt(false);
            router.replace('/'); 

        }, 100);
    };


    const handleCancel = () => {
        setShowPrompt(false);
    };

    const styles = StyleSheet.create({
        container: {

            alignItems: 'flex-end',
            padding: 20,
            paddingTop:40,
          
        },
        // The Main Terminate Button Styles
        terminateButton: {
            padding: 20,
            backgroundColor: theme.colors.card, // bg-red-600
            justifyContent: 'center',
            alignItems: 'center',
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
           
            display:"flex",
            flexDirection:"column",
            gap:5,

            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 10,
        },
        modalIcon: {
            fontSize: 40,
            color: theme.colors.primary,
            marginBottom: 10,
        },
        modalTitle: {
            fontSize: 22,
            fontWeight: '900', 
            color: '#1f2937',
            marginBottom: 10,
            textAlign: 'center',
        },
        modalText: {
            color: '#4b5563', 
            marginBottom: 24,
            fontWeight: '500',
            textAlign: 'center',
        },

        // Button Group
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            gap: 16, 
        },
        actionButton: {
            flex: 1,
            paddingVertical: 12,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
        },
        confirmButton: {
            backgroundColor: theme.colors.border,

        },
        cancelButton: {
            backgroundColor: theme.colors.primary, 
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 0,
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
        }
    });


    return (
        <View style={styles.container}>
            {/* The Main Terminate Button */}
            <TouchableOpacity
                onPress={() => setShowPrompt(true)}
                style={styles.terminateButton}
                activeOpacity={0.7}
            >
                {/* Replaced Lucide X icon with a simple text cross */}
                <X width={30} height={30} color={theme.colors.stroke} strokeWidth={4}></X>
            </TouchableOpacity>
            
            {/* Confirmation Prompt */}
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
                        <Image source={SadMascot} style={{ width: 100, height: 100, resizeMode: "contain"}}/>
                        <ThemedText type='title' weight='extrabold' style={{ lineHeight: 30, textAlign: "center"}}>
                           Tu vas perdre tout ce que tu as fait pour ton livre d'histoires.
                        </ThemedText>
                        <Text style={styles.modalText}>
                            Tu es sûr(e) de vouloir partir ?
                        </Text>

                        <View style={styles.buttonContainer}>
                            {/* Confirmation Button (Yes) */}
                            <ThemedButton
                                onPress={handleConfirm}
                                elevated 
                                variant="warn"
                                border="warn"
                                shadow='warn'
                                style={{ display: "flex", flexDirection:"row", gap: 5 }}
                             
                            >
                                <LogOut width={20} height={20} color={'white'} strokeWidth={3}/>
                                <ThemedText type='body' weight='extrabold' color='card'>Oui, je pars</ThemedText>
                            </ThemedButton>
                            
                            {/* Cancel Button (No) */}
                            <ThemedButton
                                onPress={handleCancel}
                                elevated 
                                variant="primary"
                                border="default"
                                shadow='default'
                             
                            >
                                <ThemedText type='body' weight='extrabold' color='card'>Non, je reste!</ThemedText>
                            </ThemedButton>
                          
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

