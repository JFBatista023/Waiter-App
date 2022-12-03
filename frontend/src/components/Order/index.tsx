import { Container } from "./styled";

import { OrdersBoard } from "../OrdersBoad";

export function Order() {
    return (
        <Container>
            <OrdersBoard icon="🕓" title="Fila de espera" />
            <OrdersBoard icon="🟢" title="Prontos" />
            <OrdersBoard icon="🔴" title="Cancelados" />
        </Container>
    );
}
