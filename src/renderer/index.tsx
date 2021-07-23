import { PrimaryButton, ThemeProvider } from '@fluentui/react';
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { ipcRenderer } from './ipcRenderer';

const App = () => {

    const onOpenFileButtonClick = () => { 
        ipcRenderer.send('sysinfo')
    }

    const [info, setInfo] = useState<string | undefined>()
    useEffect(() => {
        ipcRenderer.on('sysinfo-display', (sender, sysinfo) => {
            setInfo(JSON.stringify(sysinfo))
        })
    }, [])

    return (
        <ThemeProvider>
            <PrimaryButton onClick={onOpenFileButtonClick}>System Info</PrimaryButton>
            <div>
                {info}
            </div>
        </ThemeProvider>
    )
}


render(<App />, document.getElementById('root'));