import { Checkbox } from "@yamada-ui/react";
import Task from "../util/task";

type Props = {
    task: Task,
    onCheck: () => void,
};

const TaskListEntry = ({task, onCheck}: Props) => {
    return(
        <div>
            <Checkbox isChecked={task.isDone} onChange={onCheck}/>
            <label>{task.text}</label>
        </div>
    )
}

export default TaskListEntry;