import {v4 as uuidv4} from 'uuid';

const Todos = [
    {
        id: uuidv4(), 
        text: "Catch up and complete homework", 
        isCompleted: false
    },

    {
        id: uuidv4(), 
        text: "B.U end-of-course survey ", 
        isCompleted: false
    },

    {
        id: uuidv4(), 
        text: "Complete Capstone", 
        isCompleted: false
    },

    {
        id: uuidv4(), 
        text: "Complete pending projects", 
        isCompleted: false
    },

      {
        id: uuidv4(), 
        text: "Complete pending Slack", 
        isCompleted: false
    },

       {
        id: uuidv4(), 
        text: "Watch all videos", 
        isCompleted: false
    },

       {
        id: uuidv4(), 
        text: "Caught up to week project", 
        isCompleted: false
    }
   
]

export default Todos