"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nextId = 1;
// 3. Add Task
function addTask(tasks, title) {
    const newTask = { id: nextId++, title, status: "todo" };
    return [...tasks, newTask];
}
// 4. Complete Task
function completeTask(tasks, id) {
    return tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t));
}
// 5. Filter By Status
function filterByStatus(tasks, status) {
    return tasks.filter((t) => t.status === status);
}
// 6. Extra Operation (Originality Requirement)
function advanceTask(tasks, id) {
    return tasks.map((t) => {
        if (t.id !== id)
            return t;
        if (t.status === "todo")
            return { ...t, status: "in-progress" };
        if (t.status === "in-progress")
            return { ...t, status: "done" };
        return t;
    });
}
//# sourceMappingURL=model.js.map