export const getCurrentDate = ()=>{

    var date = new Date().toLocaleDateString();

    return date;
}

export const getCurrentTime = () => {
    var time = new Date().toLocaleTimeString();

    return time;
}
