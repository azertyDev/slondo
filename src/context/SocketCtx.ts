import {createContext} from 'react';
import {Socket} from "socket.io-client";
import {DefaultEventsMap} from "@socket.io/component-emitter";

export const SocketCtx =
    createContext<Socket<DefaultEventsMap, DefaultEventsMap>>(null);