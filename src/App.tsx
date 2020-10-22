import React from 'react';
import MainView from './views/mainView/MainView';
import CreateAccount from './components/createAccount/CreateAccount';

function App() {
    return (
        <div className="app-wrapper">
            <MainView>
                <CreateAccount />
            </MainView>
        </div>
    );
}

export default App;
