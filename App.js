
import React, {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {

  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  useEffect(()=>{
  Animated.loop(
    Animated.sequence([
      Animated.timing(opacidadeAnimada, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
      }),

      Animated.parallel([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(altAnimada, {
          toValue: 50,
          duration: 1000,
          useNativeDriver: false
        }),
      ]),

      Animated.timing(opacidadeAnimada, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false
      })

    ])).start();

  }, [])



  return (
    <View style={styles.container}>


    <Animated.View style={{width: larAnimada, height:altAnimada, backgroundColor: '#4169e1', justifyContent:'center', opacity: opacidadeAnimada, borderRadius: 30}}>
      <Text style={{textAlign:'center', fontSize:22, color: '#fff'}}> loading... </Text>

    </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
