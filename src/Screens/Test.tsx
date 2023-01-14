import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppStackProps} from '../type/navigation';
const TestPage = ({navigation}: AppStackProps<'Test'>) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '마이페이지',
      headerLeft: () => undefined,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.wrap}>
      <Text>dddds</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {flex: 1, backgroundColor: '#ccc'},
});

export default TestPage;
