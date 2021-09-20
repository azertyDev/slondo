import {createContext} from 'react';
import {Socket} from "socket.io-client";
import {DefaultEventsMap} from "socket.io-client/build/typed-events";

export const SocketCtx =
    createContext<Socket<DefaultEventsMap, DefaultEventsMap>>(null);