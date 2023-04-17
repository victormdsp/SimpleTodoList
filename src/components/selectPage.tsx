import { Link } from 'react-router-dom';

interface propsType {
    title: string,
    route: string,
    pageId: number,
    updatePage: Function,
}

export function SelectPage(props: propsType) {
    const actualRoute = location.pathname.endsWith(props.route);

    return (
        <Link className={`border-b-2 my-1 border-white pl-2 text-sm hover:text-lg duration-200 ${actualRoute  ? 'border-opacity-100' : 'border-opacity-40'}`} 
          to={props.route} onClick={() => props.updatePage(props.pageId)}>
            {props.title}
        </Link>
    )
}