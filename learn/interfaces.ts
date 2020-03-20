interface Rect {
    // только чтение
    readonly id: string
    //необязательный параметр
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 25,
        height: 25
    }
    // color не указан но все нормально
}

rect1.color = 'black'

const rect2 = {} as Rect
const rect3 = <Rect>{}

// ==============

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: "123",
    size:  {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
} 