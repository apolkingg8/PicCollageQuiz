import Rect from './Rect'

it('can be init', ()=> {

    // w,h must > 0
    expect(()=> {new Rect(0, 0, 0, 0)}).toThrow()
    expect(()=> {new Rect(0, 0, -1, -1)}).toThrow()

    let rect = new Rect(0, 0, 1, 1)

    expect(rect).toBeInstanceOf(Rect)
    expect(rect.x).toEqual(0)
    expect(rect.y).toEqual(0)
    expect(rect.width).toEqual(1)
    expect(rect.height).toEqual(1)
    expect(rect.left).toEqual(0)
    expect(rect.bottom).toEqual(0)
    expect(rect.right).toEqual(1)
    expect(rect.top).toEqual(1)
})

it('isIntersectionWith works', ()=> {
    // intersection
    let rect1 = new Rect(0, 0, 2, 2)
    let rect2 = new Rect(1, 1, 2, 2)

    expect(rect1.isIntersectionWith(rect2)).toEqual(true)
    expect(rect2.isIntersectionWith(rect1)).toEqual(true)

    // intersection with point
    let rect3 = new Rect(0, 0, 2, 2)
    let rect4 = new Rect(2, 2, 2, 2)

    expect(rect3.isIntersectionWith(rect4)).toEqual(false)
    expect(rect4.isIntersectionWith(rect3)).toEqual(false)

    // intersection with edge
    let rect5 = new Rect(0, 0, 1, 1)
    let rect6 = new Rect(0, 1, 1, 1)

    expect(rect5.isIntersectionWith(rect6)).toEqual(false)
    expect(rect6.isIntersectionWith(rect5)).toEqual(false)

    // no intersection
    let rect7 = new Rect(2, 2, 2, 2)
    let rect8 = new Rect(20, 20, 2, 2)

    expect(rect7.isIntersectionWith(rect8)).toEqual(false)
    expect(rect8.isIntersectionWith(rect7)).toEqual(false)

    // intersection
    let rect9 = new Rect(0, 0, 2, 2)
    let rect10 = new Rect(-1, -1, 2, 2)

    expect(rect9.isIntersectionWith(rect10)).toEqual(true)
    expect(rect10.isIntersectionWith(rect9)).toEqual(true)

    // intersection
    let rect11 = new Rect(0, 0, 2, 2)
    let rect12 = new Rect(1, 0, 2, 2)

    expect(rect11.isIntersectionWith(rect12)).toEqual(true)
    expect(rect12.isIntersectionWith(rect11)).toEqual(true)
})