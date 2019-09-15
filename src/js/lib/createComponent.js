const parser = new DOMParser();

const createComponent = (initObj) => {
    if (typeof initObj.template !== 'function') {
        throw new Error(`a component must be initialized with a template 
function that returns an html string`);
    }
    const Component = function (props) {
        this.props = props;
        this.events = {};
        this.postRender = () => {};
        Object.assign(this, initObj);
    };
    Component.prototype = {
        $ (sel) {
            return document.querySelector(sel);
        },
        render () {
            this.tree = parser.parseFromString(this.template(), 'text/html').body.children[0];
            Object.keys(this.events).map(selectorAndTrigger => {
                const [selector, trigger] = selectorAndTrigger.split(' ');
                const handler = this.events[selectorAndTrigger];
                this.tree.querySelector(selector).addEventListener(trigger, handler);
            });
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
