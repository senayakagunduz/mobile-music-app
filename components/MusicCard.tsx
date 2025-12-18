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
          <Text style={styles.label}>Title</Text>
          <Text style={styles.value}>{item.title}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Artist</Text>
          <Text style={styles.value}>{item.artist}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Album</Text>
          <Text style={styles.value}>{item.album}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Year</Text>
          <Text style={styles.value}>{item.year}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Sold out</Text>
          <Text style={item.isSoldOut ? styles.sold : styles.available}>
            {item.isSoldOut ? "Yes" : "No"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"#eeebebff",
    padding:16,
    borderRadius:10,
    marginBottom:12,
  },
  image:{
    height:100,
    width:100,
    borderRadius:50,
    marginRight:15,
  },
  info: {
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    paddingHorizontal: 8,
  },
  label: {
    color: "#737171ff",
    fontSize: 13,
    marginRight:8,
    
  },
  value: {
    color: "#565656ff",
    fontSize: 14,
    fontWeight:"800",
    flexShrink:1,
    marginLeft:8,
  },

  sold: {
    color: "#ff4d4d",
    fontWeight: "600",
  },
  available: {
    color: "#4caf50",
    fontWeight: "600",
  },
});
