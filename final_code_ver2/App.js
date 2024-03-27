import { StyleSheet, View, Image, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ItemCard from "./components/ItemCard";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const responseJson = await response.json();

    setUsers(responseJson.data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ flex: 0.5, width: "100%" }}>
            <Image
              style={styles.banner}
              source={{
                uri: "https://images.unsplash.com/photo-1486673748761-a8d18475c757?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </View>
          <FlatList
            style={{ flex: 1, width: "100%" }}
            data={users}
            renderItem={({ item }) => {
              return <ItemCard item={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* ScrollView Example */}
        {/* <ScrollView style={{ flex: 1, width: "100%" }}> */}
        {/* <View
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
                  uri: "https://reqres.in/img/faces/7-image.jpg",
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
              <Text>Title A</Text>
              <Text>Content A lorem ipsum sit amet</Text>
              <TouchableOpacity
                onPress={() => {
                  console.log("pressed");
                }}
              >
                <Text>Button</Text>
              </TouchableOpacity>
            </View>
          </View> */}
        {/* End of ScrollView Example */}
        {/* </ScrollView> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
