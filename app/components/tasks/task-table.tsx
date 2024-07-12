async function getTasksByCrewId(idCrew:any) {    
    try {
        const TasksAPIURL = `${process.env.API_URL}/tasks/${idCrew}`;
        
        const response = await fetch(TasksAPIURL, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        
        const tasks = await response.json()
        if(!tasks) return null

        return tasks
    } catch (error) {
        return null
    }
}

export default async function TaskTable({ idCrew }:any) {

    const tasks = await getTasksByCrewId(idCrew)

    return(
        <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border p-2 w-1/12">ID</th>
                        <th className="border p-2 w-3/12">Nome</th>
                        <th className="border p-2 w-6/12">Descrição</th>
                        <th className="border p-2 w-2/12">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((task: any) => (
                        <tr key={task.id_task} className="border-b">
                            <td className="border p-2">{task.id_task}</td>
                            <td className="border p-2">{task.name_task}</td>
                            <td className="border p-2">{task.description_task.length > 20 ? 
                                    `${task.description_task.substring(0, 60)}...` : 
                                    task.description_task}</td>
                            <td className="border p-2">{task.status_task ? "Ativado": "Desativado"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}