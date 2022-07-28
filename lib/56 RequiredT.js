"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CCircle {
    constructor(config) {
        var _a, _b;
        this.config = {
            color: (_a = config.color) !== null && _a !== void 0 ? _a : 'green',
            radius: (_b = config.radius) !== null && _b !== void 0 ? _b : 0
        };
    }
    drawfunction() {
        //no null checking needed
        console.log('Frawing a circle', 'Color:', this.config.color, 'Radius', this.config.radius);
    }
}
