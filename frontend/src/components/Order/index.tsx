import { Container } from "./styled";

import { OrdersBoard } from "../OrdersBoard";

export function Order() {
    return (
        <Container>
            <OrdersBoard icon="🕓" title="Fila de espera" orders={[]} />
            <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
            <OrdersBoard icon="✅" title="Prontos!" orders={[]} />
        </Container>
    );
}
