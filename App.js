import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`https://reqres.in/api/users?page=1`)
        if (!response.ok) {
          throw new Error('error')
        }
        const responseJSON = await response.json()
        setUsers(responseJSON)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()

  }, [])
  return (
    <View style={styles.container}>

      {error ?
        <View>
          <Text>{error}</Text>
        </View>
        :
        loading ? <ActivityIndicator size="large" color="#00ff00" />
          :
          <ScrollView>
            {
              users?.data?.map((user) => {
                return (
                  <View key={user.id}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                    />
                    <Text>{user.id}</Text>
                    <Text>{user.email}</Text>
                  </View>
                )
              })
            }
          </ScrollView>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
