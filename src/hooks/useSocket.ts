import io, {Socket} from 'socket.io-client';
import {useEffect, useState} from "react";
import {DefaultEventsMap} from "@socket.io/component-emitter";

export const useSocket = (url) => {
    const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>(null);

    useEffect(() => {
        const socketIo = io(url);
        setSocket(socketIo);

        function cleanup() {
            socketIo.disconnect();
        }

        return cleanup;
    }, []);

    return socket;
};