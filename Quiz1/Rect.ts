
class Rect {

    x: number = null
    y: number = null
    width: number = null
    height: number = null

    top: number = null
    right: number = null
    bottom: number = null
    left: number = null

    constructor(x: number, y: number, width: number, height: number) {

        if(width <= 0 || height <= 0) {
            throw new Error('width or height must > 0')
        }

        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.top = this.x + this.height
        this.right = this.y + this.width
        this.bottom = this.y
        this.left = this.x
    }

    isIntersectionWith = (target: Rect)=> {
        return this.right > target.left
            && this.top > target.bottom
            && this.left < target.right
            && this.bottom < target.top
    }
}

export default Rect