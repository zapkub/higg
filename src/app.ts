import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import fs from 'fs'
import { cwd, getProcessMemoryInfo, getCPUUsage } from 'process'

app.on('ready', () => {
    console.log('ready')
    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, '../dist/preload.js')
        }
    });
    window.loadFile(path.join(__dirname, '../src/index.html'))

    ipcMain.on('sysinfo', async () => {
        console.log('try to open file from os');
        console.log("cwd = ", cwd())
        console.log("memory info = ", await getProcessMemoryInfo())
        console.log("cpu usage = ", await getCPUUsage())
        window.webContents.send('sysinfo-display', {
            cwd: cwd(),
            meminfo: await getProcessMemoryInfo(),
            cpu: await getCPUUsage(),
        })
    })
})