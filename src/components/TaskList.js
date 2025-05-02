// ================ TaskList 組件說明 ================
//
// 這是一個 React 子組件，用於顯示任務列表
// 它接收一個 tasks 陣列作為 props（屬性）
// 使用解構賦值 { tasks } 直接獲取傳入的 tasks 陣列

export default function TaskList({ tasks }){
    // 渲染任務列表
    return (
        // ul 元素：無序列表容器
        // space-y-2：使用 Tailwind CSS 設置列表項之間的垂直間距為 0.5rem
        <ul className="space-y-2">
            {/*
            使用 map 方法遍歷 tasks 陣列：
            - task: 當前處理的任務內容
            - index: 當前任務的索引值
            */}
            {tasks.map((task, index) => (
                // li 元素：列表項
                <li
                    // key: React 需要的唯一識別符，這裡使用索引
                    // 注意：在實際應用中，最好使用唯一的 ID 而不是索引
                    key={index}
                    // 使用 Tailwind CSS 設置樣式：
                    // - border: 添加邊框
                    // - p-2: 內邊距為 0.5rem
                    // - rounded: 圓角邊框
                    className="border p-2 rounded"
                >
                    {/* 顯示任務內容 */}
                    {task}
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