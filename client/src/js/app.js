import HomePage from './components/HomePage/HomePage';
import store from './state/store';

const renderApp = () => {
    new HomePage(store.getState()).mount(document.body);
};

store.on('update', renderApp);

renderApp();