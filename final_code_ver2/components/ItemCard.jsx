import { Text, View, Image, TouchableOpacity } from "react-native";
export default function ItemCard({ item }) {
  return (
    <View
      style={{
        flex: 1,
        height: 150,
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
    >
      <View style={{ flex: 1, height: "100%" }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: item.avatar,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#f0f0f0",
          flex: 2,
          flexDirection: "column",
          padding: 10,
        }}
      >
        <Text>{item.first_name}</Text>
        <Text>{item.email}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("pressed");
          }}
        >
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
