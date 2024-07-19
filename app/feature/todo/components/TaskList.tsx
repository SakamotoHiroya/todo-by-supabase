import Task from "../util/task";
import TaskListEntry from "./TaskListEntry";

type Props = {
    tasks: Task[],
    onCheck: (task: Task) => void,
}

const TaskList = ({tasks, onCheck} : Props) => {
    return (
        <div>
            {tasks.map((task) => {
                return (
                    <TaskListEntry key={task.id} task={task} onCheck={() => onCheck(task)}/>
                )
            })}
        </div>
    );
}