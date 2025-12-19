import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { IMusic } from "../types/music";

interface Props {
  item: IMusic;
  onPress?: () => void;
}
export default function MusicCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.artistContainer}>
            <View style={styles.yearContainer}>
              <Text style={styles.artist}>{item.artist}</Text>
              <Text style={styles.year}>{item.year}</Text>
            </View>
            <Text style={styles.sold}>
              {item.isSoldOut ? "SOLD OUT" : "AVAILABLE"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eeebebff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  row: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  artistContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  yearContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  artist: {
    fontWeight: "800",
    fontSize: 12,
  },
  year: {
    fontWeight: "400",
    fontSize: 10,
  },
  sold: {
    marginTop: 2,
    color: "#ff4d4d",
    fontWeight: "600",
    borderRadius: 5,
    padding: 2,
    borderColor: "#ff4d4d",
    borderWidth: 1,
  },
  available: {
    color: "#4caf50",
    fontWeight: "600",
  },
});
