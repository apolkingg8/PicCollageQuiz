"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rect {
    constructor(x, y, width, height) {
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        this.top = null;
        this.right = null;
        this.bottom = null;
        this.left = null;
        this.isIntersectionWith = (target) => {
            return this.right > target.left
                && this.top > target.bottom
                && this.left < target.right
                && this.bottom < target.top;
        };
        if (width <= 0 || height <= 0) {
            throw new Error('width or height must > 0');
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.x + this.height;
        this.right = this.y + this.width;
        this.bottom = this.y;
        this.left = this.x;
    }
}
exports.default = Rect;
//# sourceMappingURL=Rect.js.map