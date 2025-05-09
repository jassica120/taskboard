// ================ TaskList 組件說明 ================
//
// 這是一個 React 子組件，用於顯示任務列表
// 它接收一個 tasks 陣列作為 props（屬性）
// 使用解構賦值 { tasks } 直接獲取傳入的 tasks 陣列
'use client';

import Link from 'next/link';

export default function TaskList({ tasks, onDelete }) {
    // 渲染任務列表
    return (
        // ul 元素：無序列表容器
        // space-y-2：使用 Tailwind CSS 設置列表項之間的垂直間距為 0.5rem
        <ul className="space-y-2">
            {tasks.map((task) => (
               <li
                key={task.id}
                className="border p-2 rounded flex justify-between items-center"
               >
                <Link 
                    href={`/task/${task.id}`}
                    className='text-blue-600 hover:underline'    
                >
                    {task.title}
                </Link>
                <button
                    className="text-red-500"
                    onClick={() => onDelete(task.id)}
                >
                    Delete
                </button>
               </li> 
            ))}
        </ul>
    )
}

// ================ 組件說明總結 ================
//
// 這個組件的主要功能：
// 1. 接收任務列表數據
// 2. 將任務列表渲染為帶有樣式的 HTML 列表
// 3. 每個任務都被包裝在一個帶有邊框和內邊距的列表項中
//
// 與 page.js 的關係：
// - 在 page.js 中通過 <TaskList tasks={tasks} /> 使用此組件
// - page.js 負責管理任務數據和添加新任務的邏輯
// - TaskList 組件只負責將任務數據渲染為視覺元素