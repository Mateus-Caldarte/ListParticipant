import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.Container}>
      <View style={styles.ContainerButton}>
        <Text style={styles.Name}>{name}</Text>
      </View>

      <TouchableOpacity style={styles.Button} onPress={onRemove}>
        <Text style={styles.TextButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
