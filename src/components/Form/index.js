import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";
import { StyleSheet } from "react-native";
export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
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
    <View>
      <View>
        <Text>Altura </Text>
        <TextInput
          style={styles.caixa}
          onChangeText={setHeight}
          value={height}
          placeholder="   Ex: 1.90"
          keyboardType={"numeric"}
        />
        <Text>Peso</Text>
        <TextInput
          style={styles.caixa}
          value={weight}
          onChangeText={setWeight}
          placeholder="   Ex: 80"
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

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
  },
  caixa: {
    borderWidth: 1,
    margin: 5,
  },
});
