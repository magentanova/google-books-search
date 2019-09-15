const parser = new DOMParser();

const createComponent = (initObj) => {
    if (typeof initObj.template !== 'function') {
        throw new Error(`a component must be initialized with a template 
function that returns an html string`);
    }
    const Component = function (props) {
        // defaults/stubs
        this.events = {};
        this.init = () => {};
        this.postRender = () => {};
        this.propTypes = {};
        this.checkPropTypes = false;

        Object.assign(this, initObj);

        if (this.checkPropTypes) {
            for (const key in this.propTypes) {
                if (typeof props[key] !== this.propTypes[key]) {
                    throw new Error(`The required type for the prop ${key} is \
    ${this.propTypes[key]}. Received ${props[key]}`);
                }
            }
        }
        this.props = props || {};
        this.init();
    };
    Component.prototype = {
        assignEventHandlers () {
            Object.keys(this.events).map(selectorAndTrigger => {
                const [selector, trigger] = selectorAndTrigger.split(' ');
                const handler = this.events[selectorAndTrigger];
                this.tree.querySelector(selector).addEventListener(trigger, handler.bind(this));
            });
        },
        render () {
            this.tree = parser.parseFromString(this.template(), 'text/html').body.children[0];
            this.tree.$ = (sel) => this.tree.querySelector(sel);
            this.tree.$$ = (sel) => this.tree.querySelectorAll(sel);

            this.assignEventHandlers();
            this.postRender();
            return this.tree;
        },
        mount (el) {
            el.innerHTML = '';
            el.appendChild(this.render());
        }
    };
    return Component;
};

export default createComponent;
