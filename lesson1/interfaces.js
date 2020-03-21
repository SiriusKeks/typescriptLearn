var rect1 = {
    id: '1234',
    size: {
        width: 25,
        height: 25
    }
    // color не указан но все нормально
};
rect1.color = 'black';
var rect2 = {};
var rect3 = {};
var rect5 = {
    id: "123",
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
