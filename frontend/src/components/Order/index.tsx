import { Board, Container, OrdersContainer } from "./styled";

export function Order() {
    return (
        <Container>
            <Board>
                <header>
                    <span>🕒</span>
                    <strong>Fila de espera</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Mesa 2</strong>
                        <span>2 itens</span>
                    </button>
                    <button type="button">
                        <strong>Mesa 2</strong>
                        <span>2 itens</span>
                    </button>
                </OrdersContainer>
            </Board>

            <Board>
                <header>
                    <span>🕒</span>
                    <strong>Fila de espera</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Mesa 2</strong>
                        <span>2 itens</span>
                    </button>
                    <button type="button">
                        <strong>Mesa 2</strong>
                        <span>2 itens</span>
                    </button>
                </OrdersContainer>
            </Board>

            <Board>
                <header>
                    <span>🕒</span>
                    <strong>Fila de espera</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Mesa 2</strong>
                        <span>2 itens</span>
                    </button>
                    <button type="button">
                        <strong>Mesa 2</strong>
                        <span>2 itens</span>
                    </button>
                </OrdersContainer>
            </Board>
        </Container>
    );
}