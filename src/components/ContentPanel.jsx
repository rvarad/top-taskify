import { useTaskContext } from "../context/taskContext"

function ContentPanel({ currentTab }) {
	const { tasks } = useTaskContext()
	function generateTaskListElements(tab) {
		switch (tab) {
			case "All Tasks":
				return tasks.tasks

			default:
				return tasks.tasks.filter((task) => task.project === tab)
		}
	}

	return (
		<div>
			{generateTaskListElements(currentTab).map((task) => (
				<h4 key={task.id}>
					{task.title}-{task.project}
				</h4>
			))}
		</div>
	)
}

export default ContentPanel
