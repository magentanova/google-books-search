import store from './store';
import { exportAllDeclaration } from '@babel/types';

describe('The store', () => {
    it('should invoke any callbacks registered with `.on()` when the \
corresponding event is triggered.', () => {
        // arrange
        const func1 = jest.fn();
        const func2 = jest.fn();
        const event = 'test-event';
        store.on(event, func1);
        store.on(event, func2);

        // act
        store.trigger(event);

        // assert
        expect(func1).toHaveBeenCalled();
        expect(func2).toHaveBeenCalled();
    });

    it('should trigger any callbacks registered to "update" when `.set()`\
is called.', () => {
            // arrange
            const func1 = jest.fn();
            const func2 = jest.fn();
            const event = 'update';
            store.on(event, func1);
            store.on(event, func2);
    
            // act
            store.set({a: 1});
    
            // assert
            expect(func1).toHaveBeenCalled();
            expect(func2).toHaveBeenCalled();
    });
});
