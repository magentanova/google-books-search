import HomePage from './components/HomePage/HomePage';
import store from './store';

window.postRenderQueue = []

store.on('update', () => {
    console.log('rerendering')
    new HomePage(store.getState()).mount(document.body);
    console.log('finsihed rendering');
});
new HomePage().mount(document.body);