import { useState } from "react";
import "./App.css";
import {
  AppBar,
  Button,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  Container,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@mui/material"; // Importing Material UI components

function App() {
 
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
  
    // Функция для добавления новой задачи
    const handleAddTask = () => {
      // Если поле ввода пустое, не добавляем задачу
      if (task.trim() === "") return;
  
      const newTask = {
        id: Date.now(), // уникальный идентификатор
        text: task,
        completed: false,
      };
  
      setTaskList(prevTaskList => [...prevTaskList, newTask]);
      setTask(""); // очищаем поле ввода
    };
  
    // Функция для переключения состояния задачи
    const handleToggleTask = (taskId) => {
      setTaskList(prevTaskList =>
        prevTaskList.map(t =>
          t.id === taskId ? { ...t, completed: !t.completed } : t
        )
      );
    };
  
    // Функция для удаления задачи
    const handleDeleteTask = (taskId) => {
      setTaskList(prevTaskList =>
        prevTaskList.filter(t => t.id !== taskId)
      );
    };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">TODO LIST</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Box mt={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing.
          <Paper elevation={3} style={{ padding: 16 }} sx={{ p: 2 }}>
            <Typography variant="h5" component="h2">
              {" "}
              Create task
            </Typography>
            <Box>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="New TAsk"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Button
               variant="contained"
               color="primary"
               fullWidth
               onClick={() => setTaskList([...taskList, task])}
              >
                ADD TASK
              </Button>
            </Box>
          
          </Paper>
        </Box>
        <List>
          {taskList. map((task, index) => (
            <ListItem key={index}>
              <ListItemText primary={task} />
              <Checkbox />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" onClick={() => setTaskList([])}>Delete</Button>
      </Container>
    </>
  );
}

export default App;
