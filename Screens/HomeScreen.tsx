import { FlatList, Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { IMusic } from "../types/music";
import MusicCard from "../components/MusicCard";
import musicData from "../assets/music-data.json";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList<IMusic>
        data={musicData as IMusic[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MusicCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
