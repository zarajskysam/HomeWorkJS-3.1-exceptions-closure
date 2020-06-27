//Задание 1
function parseCount(num) {
    let result = Number.parseInt(num);
    if (isNaN(result)) {
        const parseCountError = new Error("Невалидное значение");
        throw parseCountError;
    }

    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(e) {
        return e;
    }
}

//Задание 2
class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (b + c) < a || (a + c) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;   
    }

    getPerimeter() {
        return Number.parseInt(this.a + this.b + this.c);
    }

    getArea() {
        let halfPerimetr = this.getPerimeter() / 2;
        let area = Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c));
        let newArea = parseFloat(area.toFixed(3));
        return newArea;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e){
        return {
            getArea(){
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter(){
                return "Ошибка! Треугольник не существует";
            }
        } 
        }
    }
