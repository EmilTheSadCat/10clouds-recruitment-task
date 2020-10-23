import React, { useEffect } from 'react';
import MainView from './views/mainView/MainView';
import CreateAccount from './components/createAccount/CreateAccount';
import handleFocusOutline from './utils/handleFocusOutline';

function App() {
    useEffect(() => {
        handleFocusOutline();
    }, []);

    return (
        <div className="app-wrapper">
            <MainView>
                <CreateAccount />
            </MainView>
        </div>
    );
}

export default App;
