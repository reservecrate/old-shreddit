import Feed from './Feed';
import Sidebar from './Sidebar';

export const MainContent = () => {
    return (
        <div id='main-content'>
            <Feed />
            <Sidebar />
        </div>
    );
};