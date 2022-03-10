const { app, BrowserWindow } = require('electron');
const server = require("./server/server");

const createWindow = () => {

    const loader = new BrowserWindow({
        width: 300,
        maxWidth: 300,
        height: 300,
        maxHeight: 300,
        resizable: false,
        center: true,
        movable: false,
        minimizable: false,
        maximizable: false,
        frame: false,
        backgroundColor: "#303030"
    });

    loader.loadFile("./loader/index.html");

    server.start();

    const mainWindow = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        resizable: true,
        center: true,
        movable: true,
        minimizable: true,
        maximizable: true,
        autoHideMenuBar: true,
        backgroundColor: "#282a36",
        show: false
    });

    mainWindow.loadURL("http://127.0.0.1:1717");

    mainWindow.once("ready-to-show", () => {
        loader.close();
        mainWindow.maximize();
        mainWindow.show();
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});