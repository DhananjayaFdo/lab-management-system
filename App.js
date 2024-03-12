import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default function App() {

  const [isDoctor, setDoctor] = useState(false);

  function click(){
    setDoctor(!isDoctor);
  }

  return (
    <View style={styles.container}>
      {isDoctor ? 
        (
          <View style={styles.doctor}>
            <View>
              <Button
                onPress={click}
                title="change to user"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        ) :
        ( 
          <View style={styles.user}>
            <Button
                onPress={click}
                title="change to doctor"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  doctor: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },

  user:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  }
  });


