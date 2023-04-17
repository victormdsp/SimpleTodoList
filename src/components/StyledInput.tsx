interface propsType {
    type?: string;
    placeholder?: any;
    disabled?: boolean;
    id?: string;
    title?: string;
    className?: string;
    onChangeInput?: Function;
    getValue?: {value: string}
}


export function StyledInput(props: propsType) {

    return (
        <div className="flex items-center">
            {props.title ? <label htmlFor={props.id}>{props.title}</label> : ''}
            <input type={props.type ?? 'text'} value={undefined} id={props.id ?? undefined}
                placeholder={props.placeholder ?? undefined} disabled={props.disabled ?? false}
                className={`${props.className} m-2 rounded w-48 h-6 font-sans pl-2`}
                onChange={(value) => {
                    if(props.getValue) props.getValue.value = value.target.value;
                }}
            />
        </div>
    )
}