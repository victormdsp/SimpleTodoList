export function dateToFormat(date: Date){
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formated = day + '/' + month + '/' + year;
    return formated;
}