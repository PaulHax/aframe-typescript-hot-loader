import { ComponentWrapper, EntityBuilder } from '../aframe-typescript-toolkit';
import { Entity } from 'aframe';

interface ColorComponentSchema {
    readonly color: string;
}

export class ColorComponent extends ComponentWrapper<ColorComponentSchema> {
    private textEn: Entity;

    constructor() {
        super({
            color: {
                type: 'string',
                default: 'colorless',
            },
        });
    }

    init() {
        const entityColor = this.el.getAttribute('color');
        this.textEn = EntityBuilder.create('a-text', {
            id: 'color-text',
            value: entityColor || this.data.color,
            color: entityColor || 'black',
            position: '-1.1 1.25 -0',
        })
            .attachTo(this.el)
            .toEntity();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(oldData: {}) {
        // Could be usefull
    }

    tick() {
        // I'm an option
    }

    // Important for hot module reloading
    remove() {
        this.el.removeChild(this.textEn);
    }
}

new ColorComponent().registerComponent('color-component'); //todo boilerplate to get picked up by aframe-super-hot-loader.  Need ; or new line
