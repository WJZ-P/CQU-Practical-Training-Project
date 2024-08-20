const taskList = {};//任务对象
export function debounce(func, wait = 100, key = '') {
    try {
        //之前已经设置过了
        if (taskList[key]) {clearTimeout(taskList[key]);}//清除之前的那个渲染进程

        //设置新的渲染进程
        taskList[key] = setTimeout(() => {
            func();
            delete taskList.key;//清除任务列表中已经执行完的任务
        }, wait);
    } catch (e) {
        console.log(e)
    }
}

