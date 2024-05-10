const tasksData = {
    projects: ["misc", "gym", "study"],
    tasks: [
        {
            id: 1712039907007,
            title: "brush teeth",
            details: "early in the morning, with colgate",
            dueDate: "2023-08-13",
            priority: "high",
            project: "misc",
            completed: false,
            important: true
        },
        {
            id: 1712039907008,
            title: "get dressed",
            completed: true,
            important: false,
            details: "early in the morning, lounge wear",
            dueDate: "2023-08-13",
            priority: "high",
            project: "misc",
        },
        {
            id: 1712039907009,
            title: "cardio",
            completed: true,
            important: false,
            details: "don't miss this",
            dueDate: "2023-08-13",
            priority: "medium",
            project: "gym",
        },
        {
            id: 1712039907010,
            title: "weights",
            completed: false,
            important: true,
            details: "",
            dueDate: "2023-08-13",
            priority: "low",
            project: "gym",
        },
        {
            id: 1712039907011,
            title: "todo app",
            completed: true,
            important: false,
            details: "end this project within this week",
            dueDate: "2023-08-18",
            priority: "medium",
            project: "study",
        },
        {
            id: 1712039907012,
            title: "React",
            completed: true,
            important: false,
            details: "get started with a project or two",
            dueDate: "2023-09-01",
            priority: "high",
            project: "study",
        }
    ]
}

const notesData = [
    {
        id: 1712039907013,
        title: "note 1",
        content: "this is a note",
        timestamp: 1712039907013
    },
    {
        id: 1712039907014,
        title: "note 2",
        content: "this is another note",
        timestamp: 1712039907014,
    },
    {
        id: 1712039907015,
        title: "note 3",
        content: "this is yet another note",
        timestamp: 1712039907015
    },
    {
        id: 1712039907016,
        title: "note 4",
        content: "this is yet another note",
        timestamp: 1712039907016
    }
]

export { tasksData, notesData }