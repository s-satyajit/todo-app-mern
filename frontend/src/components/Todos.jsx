import { useState, useEffect } from "react"

export const Todos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/todos`, {method: "GET"})
        .then(async(res) => {
            const data = await res.json()
            setTodos(data.todo)
            console.log(`Data fetched! ${JSON.stringify(data.todo)}`)
        })
    }, [])

    return (
        <>
            {todos.map((todo) => {
                return (
                    <div key={todo._id}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.complete ? "Completed" : "Mark as completed"}</button>
                    </div>
                )
            })}
        </>
    )
}