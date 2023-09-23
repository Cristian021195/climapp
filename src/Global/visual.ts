import { create } from 'zustand'

type Size = "md" | "sm" | "lg";

interface IVisual{
    dark:boolean,
    size: Size,
}

interface IVisualState{
    dark:boolean,
    size: Size,
    switchTheme: (theme:boolean)=>void,
    setFs: (size: Size)=>void,
}

export const useVisual = create<IVisualState>((set) => ({
    dark: false,
    size: "md",
    switchTheme: ()=> set((state:IVisual)=>({dark: !state.dark})),
    setFs: ()=>set((state:IVisual)=>({size: state.size}))
}))
