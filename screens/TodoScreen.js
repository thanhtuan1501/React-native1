import Task from '../components/Task';
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TodoScreen({navigation}) {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss(), setTaskItem([...taskItem, task]);
    setTask('');
  };
  const deleteTask = index => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  };
  const handleTopRightPress = () => {
    navigation.navigate('VoteScreen');
  }
  const handleTopLeftPress = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
        <View style = {styles.topBar}>
        <TouchableOpacity onPress={handleTopLeftPress} style = {styles.topLeftTouch}>
            <Text style={styles.topRightText}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTopRightPress} style = {styles.topRightTouch}>
            <Text style={styles.topRightText}>VOTE RATE</Text>
        </TouchableOpacity>
        </View>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Misson today</Text>

        <View style={styles.items}>
          {taskItem.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => deleteTask(index)}>
                <Task text={item}></Task>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.os === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          value={task}
          clearButtonMode="always"
          style={styles.input}
          placeholder={'Viết việc cần làm hôm nay '}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity
          style={styles.addWrapper}
          onPress={() => handleAddTask()}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  topLeftTouch:{
    width: 100,
    height: 40,
    backgroundColor: '#EB9694',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  topRightTouch: {
      width: 100,
      height: 40,
      backgroundColor: '#009688',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
  },
  topBar: {
    marginHorizontal: 10,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topRightText:{
    color: 'white'
  }
});
