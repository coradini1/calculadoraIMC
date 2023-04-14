import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";
import { StyleSheet } from "react-native";
import styles from "./style";
export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (height != null && weight != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.caixa}>
        <Text style={styles.topicos}>Altura </Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.90"
          keyboardType={"numeric"}
        />
        <Text style={styles.topicos}>Peso</Text>
        <TextInput
          value={weight}
          onChangeText={setWeight}
          placeholder="Ex: 80"
          keyboardType={"numeric"}
        />
        <Button
          color="black"
          onPress={() => validationImc()}
          title={textButton}
        />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
