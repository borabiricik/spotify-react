import { FC } from "react";
import Home from "./pages/Home"
import Library from "./pages/Library";
import Playlist from "./pages/Library/Playlist";
import Search from "./pages/Search";

interface IRoute {
    path: string;
    title: string
    element: FC
    children?: IRoute[]
    iconPath?: string
}

export const routes: IRoute[] = [
    {
        path: '/',
        title: 'Home',
        element: Home,
        iconPath: '/images/home.png'

    },
    {
        path: '/search',
        title: 'Search',
        element: Search,
        iconPath: '/images/search.png'
    },
    {
        path: '/library',
        title: 'Your Library',
        element: Library,
        iconPath: '/images/library.png',
        children: [
            {
                path: '/:id',
                title: '',
                element: Playlist
            }
        ]
    }
]