let tasks = [
    {
        id: 1,
        title: 'Task 1',
        status: 'active',
    },
    {
        id: 2,
        title: 'Task 2',
        status: 'completed',
    }
]

exports.getAllTasks = (req, res) => {
    res.status(200).json(tasks);
}

exports.createTask = (req, res) => {
    const { body } = req;
    if(!body && !body?.title) {
        return res.status(400).send({ message: 'Title is required' });
    }

    const { title, status } = body;
    const newTask = { id: tasks.length + 1, title, status};
    tasks.push(newTask);
    res.status(200).json(newTask);
}

exports.updateTask = (req, res) => {
    const { body } = req;
    const id = Number(req.params.id)

    if(!body && !body?.status) {
        return res.status(400).send({ message: "Status is required" });
    }

    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).send({ message: "Task not found" });
    }

    task.status = body.status;
    res.status(200).json(task);
}

exports.deleteTask = (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((task) => task.id === id);
    if (!task) {
        return res.status(404).send({ message: "Task not found" });
    }

    tasks = tasks.filter((task) =>  task.id !== id);
    res.status(200).json({ message: "Task deleted successfully" });
}