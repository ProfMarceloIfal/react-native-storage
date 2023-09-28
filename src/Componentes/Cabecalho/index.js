import { View, Image, Text } from "react-native";
import { estilos } from "./estilos";

export function Cabecalho() {
    return (
        <View style={estilos.container}>          
            <Image style={estilos.imagem} source={require("../../../assets/logo.png")} />
            <Text style={estilos.titulo}> IFALBOOK </Text>
        </View>
    );
}