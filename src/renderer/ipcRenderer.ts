export type ipcRenderer = {
    send: (ch: string, ...args: any[]) => void
    on: (ch: string, callback: (sender: any, ...args: any[]) => void) => void
}
export const ipcRenderer: ipcRenderer = (window as any).ipcRenderer