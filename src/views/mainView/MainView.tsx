import React from 'react';
import './_mainView.scss';

const MainView: React.FC = ({ children }) => {
    return <main className="main-view">{children}</main>;
};

export default MainView;
