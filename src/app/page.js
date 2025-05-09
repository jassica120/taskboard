// ================ Next.js 頁面組件說明 ================
//
// 這是一個 Next.js 的頁面組件，用於實現一個簡單的任務管理板
//
// 'use client' 指令的重要性：
// 1. 表明這是一個客戶端組件，將在瀏覽器中執行
// 2. 允許使用 useState 等 React Hooks
// 3. 能夠處理用戶交互（如點擊事件）
'use client';

// ================ 引入必要的模組 ================
// React 的圖片組件，用於優化圖片加載
// Next.js 的圖片優化組件，提供自動圖片優化功能
import Link from "next/link";
// React 的 useState Hook，用於管理組件的狀態
import { useState, useEffect } from "react";
// 自定義的任務列表組件
import TaskList from "../components/TaskList";

// ================ 主頁面組件 ================
export default function Home() {
  // -------- 狀態管理 --------
  // tasks 狀態：
  // - 用途：儲存所有任務的陣列
  // - tasks：當前的任務列表
  // - setTasks：更新任務列表的函數
  const [tasks, setTasks] = useState([]);
  
  // newTask 狀態：
  // - 用途：管理輸入框的值
  // - newTask：當前輸入框的內容
  // - setNewTask：更新輸入框內容的函數
  const [newTask, setNewTask] = useState('');
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
    const maxId = savedTasks.reduce((max, task) => Math.max(max, task.id), 0);
    setNextId(maxId + 1);
  },[]);

  // -------- 功能函數 --------
  // addTask 函數：處理添加新任務的邏輯
  const addTask = () => {
    // 除錯用：顯示添加前的任務列表
    console.log("Before:", tasks);
    // 除錯用：顯示即將添加的新任務
    console.log("NewTask:", newTask);
    

    const newTaskObj = {
      id: nextId,
      title: newTask,
      description: '',
    };

    // 創建新的任務陣列：
    // 1. [...tasks]：複製現有的任務列表
    // 2. newTask：將新任務加入陣列末尾
    const updatedTasks = [...tasks, newTaskObj];
    
    // 更新任務列表狀態
    setTasks(updatedTasks);
    // 除錯用：顯示更新後的任務列表
    console.log("After:" ,updatedTasks);
    
    // 清空輸入框，準備下一次輸入
    setNewTask('');


    setNextId(nextId + 1);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // ================ 渲染用戶界面 ================
  const handleDelete = (index) => {
      // 使用 filter 方法過濾掉被刪除的任務
      const newTasks = tasks.filter((_, i) => i !== index);
      // 更新狀態
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    // 主容器：使用 Tailwind CSS 設置內邊距
    <main className="p-4 max-w-md mx-auto">
      {/* 頁面標題 */}
      <h1 className="text-2xl font-bold">Task Board</h1>

      {/* 輸入區域 */}
      {/* flex：彈性布局 */}
      {/* gap-2：元素間距 */}
      {/* mb-4：下方邊距 */}
      <div className="flex gap-2 mb-4">
        {/* 任務輸入框 */}
        <input
          // 樣式：邊框、內邊距、佔用剩餘空間
          className="border p-2 flex-1"
          // 提示文字
          placeholder="Enter a task"
          // 綁定到 newTask 狀態
          value={newTask}
          // 當輸入內容改變時，更新 newTask 狀態
          onChange={(e) => setNewTask(e.target.value)}
        />
        {/* 添加按鈕 */}
        <button
          // 樣式：藍色背景、白色文字、水平內邊距
          className="bg-blue-500 text-white px-4"
          // 點擊時執行 addTask 函數
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {/* 渲染自定義的任務列表組件 */}
      {/* 將當前的任務列表傳遞給子組件 */}
      <TaskList tasks={tasks} onDelete={handleDelete}/>
    </main>
  );
}
