import SockJsClient from 'react-stomp';

const Socket = props => {

    const WEBSOCKET_SUFFIX = "/sopra-websocket"
    const WEBSOCKET_PREFIX= "/topic"

    return (
        <SockJsClient
            url={'http://localhost:8080' + WEBSOCKET_SUFFIX}
            topics={[WEBSOCKET_PREFIX + props.topics]}
            onMessage={(msg) => props.onMessage(msg)}
        />
    );
}

export default Socket;