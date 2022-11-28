import React from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
const colors = {
  primary: '#006d77',
  secondary: '#83c5be',
  danger: '#d90429',
  white: '#fff',
}

const App = () => {
  const [textInput, setTextInput] = React.useState('')
  const [editToggleBtn, setEditToggleBtn] = React.useState(false)
  const [editTxt, setEditTxt] = React.useState(null)
  const [todos, setTodos] = React.useState([])

  const ListItem = ({ todo }) => {
    return <View style={styles.listItem}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: colors.primary,
            textDecorationLine: todo?.completed ? 'line-through' : 'none'
          }}>{todo?.task}</Text>
      </View>
      <TouchableOpacity style={[styles.actionIcon, { backgroundColor: colors.primary }]} onPress={() => editTodo(todo?.id)}>
        <Icon name='edit' size={20} color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionIcon, { backgroundColor: colors.danger }]} onPress={() => deleteTodo(todo?.id)}>
        <Icon name='delete' size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  };

  const addTodo = () => {
    if(textInput === ""){
      Alert.alert("Error", "Please input todo")
    } else if (textInput && editToggleBtn){
      setTodos(
        todos.map(elem => {
          if(elem.id == editTxt){
            return{...elem, task: textInput}
          }
          return elem;
        })
      )
      setTextInput('')
      setEditToggleBtn(false)
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false
      };
      setTodos([...todos, newTodo])
      setTextInput('')
    }
  };

  const editTodo = (todoId) => {
    const newTodos = todos.find(elem => elem.id == todoId)
    setTextInput(newTodos.task)
    setEditToggleBtn(true)
    setEditTxt(todoId)
  };
  const deleteTodo = todoId => {
    const newTodos = todos.filter((item => item.id != todoId));
    setTodos(newTodos);
  }

  const clearTodos = () => {
    Alert.alert("Confirm", "Clear Todos?", [{
      text: 'Yes'
    }])
    setTodos([])
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: colors.primary }}>ToDo App</Text>
        <Icon name='delete' size={25} color={colors.danger} onPress={clearTodos}/>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => <ListItem todo={item} />}
        contentContainerStyle={{ padding: 20, paddingBottom: 100, }}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Add Todo' value={textInput} onChangeText={txt => setTextInput(txt)} />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            {!editToggleBtn ? (
              <Icon name='add' color={colors.white} size={25} />
              ) : (
              <Icon name='edit' color={colors.white} size={25} />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  inputContainer: {
    backgroundColor: colors.white,
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20
  },
  iconContainer: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 50,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    backgroundColor: colors.white,
    padding: 20,
    flexDirection: 'row',
    elevation: 8,
    borderRadius: 7,
    marginVertical: 8,
  },
  actionIcon: {
    backgroundColor: 'green',
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default App;
