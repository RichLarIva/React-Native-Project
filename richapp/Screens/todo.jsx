import { useEffect, useState } from "react";
import { Button, Keyboard, ScrollView, StyleSheet, View, Text } from "react-native"
import TaskItem from "./Components/TaskItem";
import TaskInputField from "./Components/TaskInputField";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


function TodoScreen({navigation})
{
    const [tasks, setTasks] = useState([]);
    const { getItem, setItem } = useAsyncStorage('@task');
    const readItemFromStorage = async () => {
        const item = await getItem();
        console.log("STORAGE: ", JSON.parse(item))
        if(Array.isArray(JSON.parse(item)) && (JSON.parse(item) !== null || undefined))
        {
            let array = JSON.parse(item)
            array.map((elem) => {
                console.log("Element: ", elem)
                setTasks([...tasks, elem])
                console.log("BREAK")
            })
            console.log("TASKS FULL:", tasks);
        }
      };
    
      const writeItemToStorage = async newValue => {
        await setItem(newValue);
      };

      useEffect(() => {
        readItemFromStorage();
      }, []);

    

    const addTask = (task) => {
        if(task == null)
        {
            return;
        }
        setTasks([...tasks, task]);
        console.log("TASKS: ", JSON.stringify(tasks))
        writeItemToStorage(JSON.stringify(tasks));
        Keyboard.dismiss();
    }

    const deleteTask = (deleteIndex) => {
        setTasks(tasks.filter((value, index) => index != deleteIndex));
    }

    return(
        <View style={styles.container}>
            <Button title="Go back" onPress={() => {
                navigation.goBack();
            }}/>
            <Text style={styles.heading}>TODO LIST</Text>
            <ScrollView style={styles.scrollView}>
                {tasks.map((task, index) => {
                    return(
                        <View key={index} style={styles.taskContainer}>
                            <TaskItem index={index + 1} task={task} deleteTask={() => {deleteTask(index)}}/>
                        </View>
                    )
                })}
            </ScrollView>
                <TaskInputField addTask={addTask}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1A3C',
    },
    heading: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '600',
      marginTop: 30,
      marginBottom: 10,
      marginLeft: 20,
    },
    scrollView: {
      marginBottom: 70,
    },
    taskContainer: {
      marginTop: 20,
    }
  });

export default TodoScreen