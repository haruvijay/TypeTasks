// 1. TaskStatus literal union type
type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task interface
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

// 3. Required typed operations

// Add a new task
function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = { id: nextId++, title, status: "todo" };
  return [...tasks, newTask];
}

// Mark a task as done
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t));
}

// Filter tasks by status
function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((t) => t.status === status);
}

// 4. Extra operation
function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((t) => {
    if (t.id !== id) return t;
    const nextStatus: Record<TaskStatus, TaskStatus> = {
      "todo": "in-progress",
      "in-progress": "done",
      "done": "done",
    };
    return { ...t, status: nextStatus[t.status] };
  });
}