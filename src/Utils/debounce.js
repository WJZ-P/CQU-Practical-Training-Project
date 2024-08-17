let isSetting = false;
let setTimeoutObj = null;

export function debounce(func, wait) {
    try{
    if (isSetting)//之前已经设置过了
    {
        clearTimeout(setTimeoutObj);//清除之前的那个渲染进程
        setTimeoutObj = setTimeout(() => {
            func();
            isSetting = false;
        }, wait);
    } else setTimeoutObj = setTimeout(() => {func()})}
    catch(e){console.log(e)}
}