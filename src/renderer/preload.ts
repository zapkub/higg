import { shell, contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld("ipcRenderer", {
    "send": (channel: string, ...args: any[]) => {
        ipcRenderer.send(channel, ...args);
    },
    "on": (channel: string, callback: (sender: any, ...args: any[]) => void) => {
        ipcRenderer.on(channel, callback);
    }
})