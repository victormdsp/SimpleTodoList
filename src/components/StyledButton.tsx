
interface propsType {
    text: string;
    bgColor?: string;
    onClickFunction: Function;
    param?: any;
}

export function StyledButton(props: propsType){
    return(
        <button className={`${props.bgColor ?? '#ffffff'} m-2 p-2 rounded bg-slate-700 hover:text-white duration-150`} onClick={() => props.onClickFunction(props.param)}>{props.text}</button>
    )
}