interface IpropsType{
    className?: string;
    data?: any;
    children: JSX.Element [] | JSX.Element;
}

export function Box(props: IpropsType){
    return(
        <div>
            {props.children as React.ReactNode}
        </div>
    )
}