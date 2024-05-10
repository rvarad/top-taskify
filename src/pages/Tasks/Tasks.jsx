import { useEffect, useState } from "react"
import { tasksData as initialTasks } from "../../initialData"
import ProjectTile from "../../components/ProjectTile/ProjectTile"
import { TaskContextProvider } from "../../context/taskContext"
import StyledTasks from "./Tasks.styled"
import TasksContentPanel from "../../components/tasksContentPanel/TasksContentPanel"

function Tasks() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem("tasks")) || initialTasks
	)
	// const [projDeleted, setProjDeleted] = useState(false)
	const [currentTab, setCurrentTab] = useState("All Tasks")
	const [newProjectName, setNewProjectName] = useState("")
	const [addNewProjectFormState, setAddNewProjectFormState] = useState(false)

	function addNewTask(task) {
		setTasks((prev) => ({
			...prev,
			tasks: [...prev.tasks, { id: Date.now(), ...task }],
		}))
	}

	function editTask(id, updatedTask) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.map((prevTask) =>
					prevTask.id === id ? { ...prevTask, ...updatedTask } : prevTask
				),
			}
		})
	}

	function deleteTask(id) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.filter((prevTask) => prevTask.id !== id),
			}
		})
	}

	function toggleTaskCompleted(id) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.map((prevTask) =>
					prevTask.id === id
						? { ...prevTask, completed: !prevTask.completed }
						: prevTask
				),
			}
		})
	}

	function toggleTaskImportant(id) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.map((prevTask) =>
					prevTask.id === id
						? { ...prevTask, important: !prevTask.important }
						: prevTask
				),
			}
		})
	}

	function addNewProject(project) {
		setTasks((prev) => ({ ...prev, projects: [...prev.projects, project] }))
		changeCurrentTab(project)
	}

	function renameProject(originalName, newName) {
		setTasks((prev) => {
			return {
				...prev,
				projects: prev.projects.map((prevName) =>
					prevName === originalName ? newName : prevName
				),
				tasks: prev.tasks.map((task) => {
					return task.project === originalName
						? { ...task, project: newName }
						: task
				}),
			}
		})
		changeCurrentTab(newName)
	}

	function deleteProject(name) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.filter((task) => task.project !== name),
				projects: prev.projects.filter((prevName) => prevName !== name),
			}
		})
	}

	function changeCurrentTab(tab) {
		setCurrentTab(tab)
	}

	const projectListElements = tasks.projects.map((project) => {
		return (
			project !== "misc" && (
				<ProjectTile
					key={project}
					project={project}
					changeCurrentTab={changeCurrentTab}
				/>
			)
		)
	})

	useEffect(() => {
		if (!newProjectName) {
			changeCurrentTab("All Tasks")
		}
		setNewProjectName("")
	}, [tasks.projects.length])

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks))
		console.log(tasks)
	}, [tasks])

	console.log(currentTab)

	return (
		// <ThemeProvider>
		<TaskContextProvider
			value={{
				tasks,
				currentTab,
				addNewTask,
				editTask,
				deleteTask,
				toggleTaskCompleted,
				toggleTaskImportant,
				addNewProject,
				renameProject,
				deleteProject,
			}}
		>
			<StyledTasks className="main">
				<nav className="navbar">
					<section className="home">
						<h2>Home</h2>
						<div
							className={`nav-btn ${currentTab === "All Tasks" && "active"}`}
							data-tab-name="All Tasks"
							onClick={() => changeCurrentTab("All Tasks")}
						>
							<svg
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 512 512"
								xmlSpace="preserve"
								fill="#000000"
							>
								<path
									fill="#FFDA79"
									d="M409.507,512H102.493c-9.864,0-17.86-7.997-17.86-17.86V132.528c0-9.864,7.997-17.86,17.86-17.86 h307.014c9.864,0,17.86,7.997,17.86,17.86V494.14C427.368,504.003,419.371,512,409.507,512z"
								></path>
								<path
									fill="#FFD155"
									d="M409.507,114.668H256V512h153.507c9.864,0,17.86-7.997,17.86-17.86V132.528 C427.368,122.664,419.371,114.668,409.507,114.668z"
								></path>
								<path
									fill="#36495E"
									d="M436.611,150.389H75.389c-9.864,0-17.86-7.997-17.86-17.86V62.083c0-9.864,7.997-17.86,17.86-17.86 h121.145C204.224,18.667,227.972,0,256,0c28.027,0,51.775,18.667,59.465,44.223h121.146c9.864,0,17.86,7.997,17.86,17.86v70.445 C454.471,142.392,446.475,150.389,436.611,150.389z"
								></path>
								<path
									fill="#6A82A1"
									d="M277.077,235.259H165.155c-9.864,0-17.86-7.997-17.86-17.86c0-9.864,7.997-17.86,17.86-17.86 h111.922c9.864,0,17.86,7.997,17.86,17.86C294.937,227.264,286.94,235.259,277.077,235.259z"
								></path>
								<path
									fill="#6A82A1"
									d="M277.077,311.123H165.155c-9.864,0-17.86-7.997-17.86-17.86s7.997-17.86,17.86-17.86h111.922 c9.864,0,17.86,7.997,17.86,17.86C294.937,303.127,286.94,311.123,277.077,311.123z"
								></path>
								<path
									fill="#6A82A1"
									d="M277.077,386.986H165.155c-9.864,0-17.86-7.997-17.86-17.86s7.997-17.86,17.86-17.86h111.922 c9.864,0,17.86,7.997,17.86,17.86C294.937,378.99,286.94,386.986,277.077,386.986z"
								></path>
								<path
									fill="#6A82A1"
									d="M277.077,462.849H165.155c-9.864,0-17.86-7.997-17.86-17.86s7.997-17.86,17.86-17.86h111.922 c9.864,0,17.86,7.997,17.86,17.86C294.937,454.852,286.94,462.849,277.077,462.849z"
								></path>
								<path
									fill="#2C3E50"
									d="M436.611,44.223H315.465C307.775,18.667,284.027,0,256,0v150.389h180.611 c9.864,0,17.86-7.997,17.86-17.86V62.083C454.471,52.219,446.475,44.223,436.611,44.223z"
								></path>
								<path
									fill="#36495E"
									d="M277.077,199.538H256v35.721h21.077c9.864,0,17.86-7.997,17.86-17.86 C294.937,207.535,286.94,199.538,277.077,199.538z"
								></path>
								<path
									fill="#36495E"
									d="M346.845,235.259h-14.535c-9.864,0-17.86-7.997-17.86-17.86c0-9.864,7.997-17.86,17.86-17.86h14.535 c9.864,0,17.86,7.997,17.86,17.86C364.706,227.264,356.709,235.259,346.845,235.259z"
								></path>
								<path
									fill="#36495E"
									d="M277.077,275.402H256v35.721h21.077c9.864,0,17.86-7.997,17.86-17.86 C294.937,283.399,286.94,275.402,277.077,275.402z"
								></path>
								<path
									fill="#36495E"
									d="M346.845,311.123h-14.535c-9.864,0-17.86-7.997-17.86-17.86s7.997-17.86,17.86-17.86h14.535 c9.864,0,17.86,7.997,17.86,17.86C364.706,303.127,356.709,311.123,346.845,311.123z"
								></path>
								<path
									fill="#36495E"
									d="M277.077,351.265H256v35.721h21.077c9.864,0,17.86-7.997,17.86-17.86 S286.94,351.265,277.077,351.265z"
								></path>
								<path
									fill="#36495E"
									d="M346.845,386.986h-14.535c-9.864,0-17.86-7.997-17.86-17.86s7.997-17.86,17.86-17.86h14.535 c9.864,0,17.86,7.997,17.86,17.86S356.709,386.986,346.845,386.986z"
								></path>
								<path
									fill="#36495E"
									d="M277.077,427.128H256v35.721h21.077c9.864,0,17.86-7.997,17.86-17.86 S286.94,427.128,277.077,427.128z"
								></path>
								<path
									fill="#36495E"
									d="M346.845,462.849h-14.535c-9.864,0-17.86-7.997-17.86-17.86s7.997-17.86,17.86-17.86h14.535 c9.864,0,17.86,7.997,17.86,17.86S356.709,462.849,346.845,462.849z"
								></path>
							</svg>
							<span>All Tasks</span>
						</div>
						<div
							className={`nav-btn ${currentTab === "Today" && "active"}`}
							data-tab-name="Today"
							onClick={() => changeCurrentTab("Today")}
						>
							<svg
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 512 512"
								xmlSpace="preserve"
								fill="#000000"
							>
								<path
									fill="#FFE477"
									d="M488.727,186.182h-23.273H253.054H46.545H23.273C10.42,186.182,0,175.762,0,162.909v325.818 C0,501.582,10.42,512,23.273,512h229.781h235.674C501.58,512,512,501.582,512,488.727V162.909 C512,175.762,501.58,186.182,488.727,186.182z"
								></path>
								<path
									fill="#6E76E5"
									d="M488.727,46.545H356.848h-23.273h-23.273h-57.249h-51.357h-23.273h-23.273H23.273 C10.42,46.545,0,56.965,0,69.818v93.091c0,12.853,10.42,23.273,23.273,23.273h23.273h206.508h212.401h23.273 c12.853,0,23.273-10.42,23.273-23.273V69.818C512,56.965,501.58,46.545,488.727,46.545z"
								></path>
								<path
									fill="#A78966"
									d="M356.848,46.545V23.273C356.848,10.42,346.428,0,333.576,0s-23.273,10.42-23.273,23.273v23.273 h23.273H356.848z"
								></path>
								<path
									fill="#806749"
									d="M201.697,46.545V23.273C201.697,10.42,191.277,0,178.424,0c-12.853,0-23.273,10.42-23.273,23.273 v23.273h23.273H201.697z"
								></path>
								<path
									fill="#DF6246"
									d="M253.054,343.066l10.477-34.605l10.389,34.605H253.054v29.389h29.662l6.701,22.454 c0.031,0.101,0.062,0.202,0.095,0.303c1.981,5.896,7.173,9.559,13.548,9.559c8.149,0,16.873-5.942,16.873-14.786 c0-1.035-0.158-1.898-0.285-2.459c-0.068-0.476-0.172-0.946-0.313-1.407l-39.311-128.323c-0.022-0.067-0.042-0.133-0.065-0.2 c-2.158-6.518-8.592-10.73-16.392-10.73c-0.497,0-0.988,0.019-1.471,0.053c-0.107,0.008-0.211,0.023-0.316,0.033 c-0.377,0.033-0.754,0.068-1.123,0.121c-0.096,0.014-0.186,0.034-0.281,0.05c-0.379,0.061-0.754,0.124-1.123,0.205 c-0.065,0.014-0.126,0.033-0.189,0.048c-0.396,0.092-0.787,0.191-1.17,0.306c-0.036,0.011-0.07,0.025-0.105,0.036 c-0.408,0.126-0.808,0.261-1.199,0.413c-0.012,0.005-0.026,0.011-0.039,0.016c-1.258,0.49-2.428,1.114-3.496,1.857v93.066H253.054z"
								></path>
								<g>
									<path
										fill="#DD512A"
										d="M253.054,250c-1.016,0.707-1.936,1.524-2.745,2.439c-0.008,0.009-0.016,0.019-0.023,0.028 c-0.259,0.293-0.504,0.597-0.74,0.911c-0.033,0.043-0.062,0.09-0.093,0.135c-0.208,0.284-0.41,0.573-0.594,0.87 c-0.059,0.095-0.109,0.192-0.164,0.287c-0.154,0.258-0.304,0.514-0.441,0.782c-0.095,0.183-0.174,0.374-0.261,0.56 c-0.088,0.191-0.182,0.377-0.262,0.573c-0.158,0.389-0.304,0.79-0.431,1.198l-39.396,127.971c-0.704,1.921-0.704,3.621-0.704,4.414 c0,9.021,8.56,14.603,16.488,14.603c6.814,0,12.235-3.918,13.881-10.006l6.664-22.309h8.82v-29.389V250H253.054z"
									></path>
									<path
										fill="#DD512A"
										d="M155.482,248.003h-33.449c-8.4,0-14.978,6.079-14.978,13.841v128.892 c0,7.869,6.578,14.033,14.978,14.033h33.449c30.562,0,48.809-18.598,48.809-49.748V297.57 C204.291,266.533,186.044,248.003,155.482,248.003z M173.202,355.022c0,13.742-5.3,19.605-17.72,19.605h-17.337v-96.478h17.337 c12.42,0,17.72,5.807,17.72,19.42L173.202,355.022L173.202,355.022z"
									></path>
								</g>
								<path
									fill="#EEBF00"
									d="M155.482,278.149h-17.337v96.478h17.337c12.42,0,17.72-5.863,17.72-19.605V297.57 C173.202,283.957,167.902,278.149,155.482,278.149z"
								></path>
								<path
									fill="#DF6246"
									d="M388.805,248.003c-5.579,0-10.404,3.252-13.219,8.879l-26.636,52.551l-26.466-52.508 c-3.885-7.764-9.965-8.923-13.244-8.923c-7.748,0-16.111,5.584-16.111,14.603c0,1.552,0.273,4.606,2.071,7.84l38.178,73.221v46.877 c0,7.978,6.83,14.226,15.548,14.226c8.864,0,15.548-6.116,15.548-14.226v-46.5l38.623-73.716c0.116-0.222,0.225-0.448,0.323-0.68 c0.95-2.237,1.496-4.805,1.496-7.042C404.914,253.587,396.553,248.003,388.805,248.003z"
								></path>
								<path
									fill="#EEBF00"
									d="M244.233,372.455l-6.664,22.309c-1.646,6.088-7.069,10.006-13.881,10.006 c-7.928,0-16.488-5.584-16.488-14.603c0-0.793,0-2.492,0.704-4.414l39.396-127.971c0.127-0.41,0.273-0.808,0.431-1.198 c0.081-0.196,0.174-0.382,0.262-0.573c0.087-0.188,0.166-0.379,0.261-0.56c0.137-0.267,0.289-0.524,0.441-0.782 c0.056-0.095,0.105-0.194,0.164-0.287c0.185-0.298,0.386-0.586,0.594-0.87c0.031-0.043,0.061-0.092,0.093-0.135 c0.233-0.315,0.483-0.617,0.74-0.911c0.008-0.009,0.016-0.019,0.023-0.028c0.807-0.915,1.727-1.731,2.745-2.439v-63.818H46.545 H23.273C10.42,186.182,0,175.762,0,162.909v325.818C0,501.582,10.42,512,23.273,512h229.781V372.455L244.233,372.455 L244.233,372.455z M204.291,355.022c0,31.151-18.247,49.748-48.809,49.748h-33.449c-8.4,0-14.978-6.164-14.978-14.033V261.845 c0-7.762,6.578-13.841,14.978-13.841h33.449c30.562,0,48.809,18.528,48.809,49.565V355.022z"
								></path>
								<g>
									<path
										fill="#D6D5D8"
										d="M249.547,253.379c0.234-0.313,0.481-0.617,0.74-0.911 C250.028,252.762,249.78,253.065,249.547,253.379z"
									></path>
									<path
										fill="#D6D5D8"
										d="M248.255,255.452c0.137-0.267,0.289-0.524,0.441-0.782 C248.542,254.928,248.391,255.185,248.255,255.452z"
									></path>
									<path
										fill="#D6D5D8"
										d="M247.732,256.585c0.081-0.195,0.174-0.382,0.262-0.573 C247.906,256.203,247.813,256.389,247.732,256.585z"
									></path>
									<path
										fill="#D6D5D8"
										d="M248.86,254.383c0.185-0.298,0.386-0.586,0.594-0.87 C249.248,253.797,249.046,254.085,248.86,254.383z"
									></path>
									<path
										fill="#D6D5D8"
										d="M250.309,252.439c0.807-0.914,1.727-1.73,2.745-2.439l0,0 C252.036,250.708,251.116,251.524,250.309,252.439z"
									></path>
								</g>
								<g>
									<path
										fill="#DEDEE0"
										d="M256.588,248.128c0.391-0.152,0.793-0.289,1.199-0.413 C257.381,247.841,256.979,247.977,256.588,248.128z"
									></path>
									<path
										fill="#DEDEE0"
										d="M259.254,247.327c0.368-0.081,0.745-0.144,1.123-0.205 C259.997,247.181,259.621,247.246,259.254,247.327z"
									></path>
									<path
										fill="#DEDEE0"
										d="M257.894,247.679c0.383-0.115,0.774-0.214,1.17-0.306 C258.669,247.465,258.278,247.564,257.894,247.679z"
									></path>
									<path
										fill="#DEDEE0"
										d="M260.656,247.073c0.368-0.053,0.745-0.088,1.123-0.121 C261.401,246.984,261.024,247.018,260.656,247.073z"
									></path>
									<path
										fill="#DEDEE0"
										d="M256.549,248.143c-1.258,0.49-2.428,1.112-3.496,1.857l0,0 C254.12,249.257,255.291,248.633,256.549,248.143z"
									></path>
									<path
										fill="#DEDEE0"
										d="M262.096,246.917c0.484-0.034,0.974-0.053,1.471-0.053 C263.07,246.866,262.578,246.883,262.096,246.917z"
									></path>
								</g>
								<path
									fill="#424EDE"
									d="M23.273,186.182h23.273h206.508V46.545h-51.357h-23.273h-23.273H23.273 C10.42,46.545,0,56.965,0,69.818v93.091C0,175.762,10.42,186.182,23.273,186.182z"
								></path>
							</svg>
							<span>Today</span>
						</div>
						<div
							className={`nav-btn ${currentTab === "This Week" && "active"}`}
							data-tab-name="This Week"
							onClick={() => changeCurrentTab("This Week")}
						>
							<svg
								version="1.1"
								id="Capa_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 45.167 45.167"
								xmlSpace="preserve"
								fill="#000000"
							>
								<path
									fill="#1a01fd"
									d="M38.255,7.859v2.597c0,2.414-1.964,4.378-4.378,4.378s-4.378-1.964-4.378-4.378V7.5H15.5v2.956 c0,2.414-1.964,4.378-4.378,4.378s-4.378-1.964-4.378-4.378v-2.53C4.983,8.7,3.75,10.454,3.75,12.5v27.667c0,2.761,2.239,5,5,5 h27.667c2.761,0,5-2.239,5-5V12.5C41.417,10.39,40.105,8.593,38.255,7.859z M37.338,40.672H7.828V19h29.51V40.672z"
								></path>
								<path
									fill="#232224"
									d="M11.122,12.834c1.314,0,2.378-1.065,2.378-2.378V7.5V2.378C13.5,1.065,12.435,0,11.122,0 C9.808,0,8.744,1.065,8.744,2.378v5.123v2.955C8.744,11.77,9.809,12.834,11.122,12.834z"
								></path>
								<path
									fill="#232224"
									d="M33.877,12.834c1.314,0,2.378-1.065,2.378-2.378V7.5V2.378C36.255,1.065,35.19,0,33.877,0 s-2.378,1.065-2.378,2.378V7.5v2.956C31.499,11.77,32.564,12.834,33.877,12.834z"
								></path>
								<path
									fill="#fd5d01"
									d="M35.338,21H9.828v17.672h25.51V21z M26.524,26.893l-4.681,8.495 c-0.333,0.617-0.733,0.866-1.233,0.866c-0.683,0-1.316-0.417-1.316-1.15c0-0.216,0.1-0.565,0.233-0.799l4.331-7.596h-4.464 c-0.617,0-1.116-0.483-1.116-1.1c0-0.616,0.499-1.116,1.116-1.116h6.33c0.717,0,1.166,0.417,1.166,1.15 C26.89,26.026,26.74,26.493,26.524,26.893z"
								></path>
							</svg>
							<span>This Week</span>
						</div>
						<div
							className={`nav-btn ${currentTab === "Important" && "active"}`}
							data-tab-name="Important"
							onClick={() => changeCurrentTab("Important")}
						>
							<svg
								viewBox="0 0 24.00 24.00"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								// stroke="#000000"
								strokeWidth="0.552"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M11.0137 2.76683C11.379 1.89022 12.6208 1.89022 12.9861 2.76683L14.9102 7.38462C15.0654 7.75726 15.4295 8 15.8332 8H20.893C21.8234 8 22.2893 9.12483 21.6314 9.78268L17.5391 13.875C17.2823 14.1318 17.185 14.5076 17.2847 14.8568L18.9076 20.5369C19.1816 21.496 18.1122 22.2767 17.2822 21.7234L12.5546 18.5716C12.2187 18.3477 11.7811 18.3477 11.4452 18.5717L6.72544 21.7182C5.89284 22.2732 4.81988 21.49 5.09479 20.5279L6.71509 14.8568C6.81486 14.5076 6.71747 14.1318 6.46068 13.875L2.38859 9.8029C1.72328 9.13758 2.19448 8 3.13538 8H8.16658C8.57028 8 8.93438 7.75726 9.08965 7.38462L11.0137 2.76683Z"
									fill="#FFD700"
								></path>
							</svg>
							<span>Important</span>
						</div>
					</section>
					<section className="projects">
						<h2>Projects</h2>
						<div
							className="nav-btn"
							id="addNewProjectBtn"
							onClick={() => setAddNewProjectFormState(true)}
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
								></path>
							</svg>
							<span>Add New Project</span>
						</div>
						{addNewProjectFormState && (
							<form
								className="add-new-project-form"
								onSubmit={() => {
									addNewProject(newProjectName)
									// setNewProjectName("")
									setAddNewProjectFormState(false)
									// changeCurrentTab(newProjectName)
								}}
							>
								<input
									type="text"
									placeholder="Enter project name"
									value={newProjectName}
									onChange={(e) => setNewProjectName(e.target.value)}
								/>
								<div className="add-new-project-form-buttons">
									<button id="addNewProjectForm_inputSubmitBtn">
										<svg
											viewBox="0 0 24 24"
											id="d9090658-f907-4d85-8bc1-743b70378e93"
											data-name="Livello 1"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												id="70fa6808-131f-4233-9c3a-fc089fd0c1c4"
												data-name="done circle"
												d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"
											></path>
										</svg>
									</button>
									<button
										id="addNewProjectForm_inputCancelBtn"
										onClick={() => {
											setAddNewProjectFormState(false)
											setNewProjectName("")
										}}
									>
										<svg
											version="1.1"
											id="Layer_1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											viewBox="0 0 300.003 300.003"
											xmlSpace="preserve"
										>
											<path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150 C300.002,67.159,232.839,0,150,0z M206.584,207.171c-5.989,5.984-15.691,5.984-21.675,0l-34.132-34.132l-35.686,35.686 c-5.986,5.984-15.689,5.984-21.672,0c-5.989-5.991-5.989-15.691,0-21.68l35.683-35.683L95.878,118.14 c-5.984-5.991-5.984-15.691,0-21.678c5.986-5.986,15.691-5.986,21.678,0l33.222,33.222l31.671-31.673 c5.986-5.984,15.694-5.986,21.675,0c5.989,5.991,5.989,15.697,0,21.678l-31.668,31.671l34.13,34.132 C212.57,191.475,212.573,201.183,206.584,207.171z"></path>
										</svg>
									</button>
								</div>
							</form>
						)}
						<div className="project-list">{projectListElements}</div>
					</section>
				</nav>
				<TasksContentPanel currentTab={currentTab} />
			</StyledTasks>
		</TaskContextProvider>
		// </ThemeProvider>
	)
}

export default Tasks
