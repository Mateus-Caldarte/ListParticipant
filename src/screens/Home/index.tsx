import {
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participant, setParticipant] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    setParticipant((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o Participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipant((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
    ]);
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.Container}>
          <Text style={styles.Title}>Nome do evento</Text>
          <Text style={styles.Subtitle}>sexta 17 de fevereiro 2022</Text>

          <View style={styles.Form}>
            <TextInput
              style={styles.Input}
              placeholder="Digite o nome do participante"
              onChangeText={setParticipantName}
              placeholderTextColor="#FFF"
              value={participantName}
            />

            <TouchableOpacity
              style={styles.Button}
              onPress={handleParticipantAdd}
            >
              <Text style={styles.TextButton}>+</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={participant}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Participant
                key={item}
                name={item}
                onRemove={() => handleParticipantRemove(item)}
              />
            )}
            ListEmptyComponent={() => (
              <Text style={styles.list}>Adicione alguém a lista.</Text>
            )}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
