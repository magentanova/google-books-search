import HomePage from './components/HomePage/HomePage';
import store from './store';

store.on('update', () => {
    new HomePage(store.getState()).mount(document.body);
});
new HomePage().mount(document.body);