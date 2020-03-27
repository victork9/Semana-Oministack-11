import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import logoImag from '../../assets/logo.png'
import styles from './style'
import * as MailComposer from 'expo-mail-composer'
export default function Detail() {
    const navigation = useNavigation()
    const route = useRoute()
    const incident = route.params.incident
    
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title} no valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', curency: 'BRL'}).format(incident.value)}`

    function navigateBack() {
        navigation.goBack()
    }

    function senMail() {
        MailComposer.composeAsync({

            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text={${message}}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImag} />
                <TouchableOpacity onPress={navigateBack}><Feather name="arrow-left" size={28} color="#e02041" /></TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        curency: 'BRL'
                    }).format(incident.value)}</Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <View style={styles.actions}>
                    <TouchableOpacity onPress={sendWhatsapp} style={styles.action}><Text style={styles.actionText}>Whatsapp</Text></TouchableOpacity>
                    <TouchableOpacity onPress={senMail} style={styles.action}><Text style={styles.actionText}>Email</Text></TouchableOpacity>


                </View>
            </View>
        </View >
    )
} 