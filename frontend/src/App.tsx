import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header";
import { Order } from "./components/Order";

export function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Order />
        </>
    );
}
