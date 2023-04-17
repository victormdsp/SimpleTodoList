export interface optionsType{
    title: string;
    route: string;
}

// Array<optionsType>
export const sidebarOptions: any = [
    {
        title: 'Home',
        route: '/home',
    },
    {
        title: 'Lista de Todos',
        route: 'todos',
    },
    {
        title: 'Meu perfil',
        route: 'perfil',
    }
]