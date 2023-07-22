import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './store/store'


export const Context = React.createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value = {{
        store: new Store()
    }
    }>

    <App />
    </Context.Provider>
);


