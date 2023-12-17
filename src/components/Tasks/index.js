import {TaskName, TagsCategory, ListItem} from './style'

const Tasks = props => {
    const {taskDetails}=props 
    const {taskName, taskCategory}=taskDetails

    return (
        <ListItem />
        <TaskName>{taskName}</TaskName>
        <TagsCategory>{taskCategory}</TagsCategory>
    )
}

export default Tasks