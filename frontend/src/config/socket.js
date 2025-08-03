import socket from 'socket.io-client';

let socketInstance = null;

export const initializeSocket = (projectId) => {
    // Disconnect previous socket if exists
    if (socketInstance) {
        socketInstance.disconnect();
        socketInstance = null;
    }

    socketInstance = socket(import.meta.env.VITE_API_URL, {
        auth: {
            token: localStorage.getItem('token')
        },
        query: {
            projectId
        }
    });

    return socketInstance;
};

export const disconnectSocket = () => {
    if (socketInstance) {
        socketInstance.disconnect();
        socketInstance = null;
    }
};

export const receiveMessage = (eventName, cb) => {
    if (socketInstance) {
        socketInstance.on(eventName, cb);
    }
};

export const sendMessage = (eventName, data) => {
    if (socketInstance && socketInstance.connected) {
        socketInstance.emit(eventName, data);
    }
};