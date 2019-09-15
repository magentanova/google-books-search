const parser = new DOMParser();

const createComponent = (initObj) => {
    if (typeof initObj.template !== 'function') {
        throw new Error(`a component must be initialized with a template 
function that returns an html string`);
    }
    const Component = function (props) {
        // defaults/stubs
        this.events = {};
        this.postRender = () => {};
        this.init = () => {};

        Object.assign(this, initObj);
        this.props = props || {};
        this.init();
    };
    Component.prototype = {
        assignEventHandlers() {
            Object.keys(this.events).map(selectorAndTrigger => {
                const [selector, trigger] = selectorAndTrigger.split(' ');
                const handler = this.events[selectorAndTrigger];
                this.tree.querySelector(selector).addEventListener(trigger, handler.bind(this));
            });
        },
        render () {
            this.tree = parser.parseFromString(this.template(), 'text/html').body.children[0];
            this.tree.$ = ((sel) => this.tree.querySelector(sel)).bind(this);
            this.tree.$$ = ((sel) => this.tree.querySelectorAll(sel)).bind(this);

            this.assignEventHandlers();
            this.postRender();
            return this.tree;
        },
        mount (el) {
            el.appendChild(this.render());
        }
    };
    return Component;
};

export default createComponent;
