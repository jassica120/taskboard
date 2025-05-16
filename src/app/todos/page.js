'use client';

import{ useState, useEffect } from "react";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('finished tetching');

        async function fetchTodos() {
            try{
                const res = await fetch(
                    'https://jsonplaceholder.typicode.com/todos?_limit=20');
                console.log(res);
                /*
                res
                    .then((res) => {
                        console.log('converting to json');
                        return res.json();
                    })
                    .then((data) => {
                        console.log('getting data');
                    });
                */
                console.log('finished fetching');
                if (res.status != 200) throw new Error('Failed to fetch');

                await new Promise((resolve) => setTimeout(resolve, 3000));

                const data = await res.json();
                setTodos(data);
            }catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchTodos();
    },[])

    return (
        <main className="p-4 max-w-x1 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Todos</h1>

            {loading && <p>Loading...</p>}

            {!loading && (
                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li key={todo.id} className="border py-2 rounded">
                            <h2 className="font-semibold">
                                {todo.title} {todo.completed ? 'Done' : ''}
                            </h2>
                        </li>
                    ))}
                    
                </ul>
            ) }
        </main>
    );
}