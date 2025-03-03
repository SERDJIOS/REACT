import React, { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { connect } from "react-redux";
import { moveTask, updateTask } from "../redux/actions";

function Task({ task, status, moveTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const taskId = e.dataTransfer.getData("id");
    moveTask(taskId, status);
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };

    const handleSave = () => {
        updateTask(task.id, newText);
        setIsEditing(false);
    };
    
    const handleCancel = () => {
        setIsEditing(false);
        setNewText(task.text);
    }

  return (
    <Card
      draggable
      onDragStart={(e) => e.dataTransfer.setData("taskId", task.id)}
      onDrop={handleDrop}
    >
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            <Typography>{task.text}</Typography>
            <Button onClick={handleUpdate} variant="contained" color="primary">
              Edit
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

const mapDispatchToProps = {
  moveTask,
  updateTask,
};

export default connect(null, mapDispatchToProps)(Task);
