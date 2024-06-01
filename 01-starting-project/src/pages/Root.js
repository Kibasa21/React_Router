import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
    return (
        <>
            <MainNavigation /> {/* Ou seja, MainNavigation vai aparecer, mas se tiver algo depois de outlet, não vai */}
            <main>
                <Outlet /> {/* Isso marca até onde do RootLayout ele vai ficar fixo nos outros URL's, ou seja, é um ponto final */}
            </main>
        </>
    );
}