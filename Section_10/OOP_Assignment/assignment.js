class Course {
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    thereafter() {
        console.log(typeof this.length)
        return this.length/this.price
    }

    outPutTheResultToTheConsole(measurementOfTime) {
        if (this.price <= 0) {
            return
        } else {
            console.log(this.title, this.length.toString() + ' ' + measurementOfTime, '$' + this.price.toString())
        }
    }

}

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price)
        this.numOfExercises = numOfExercises
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log('bobTheBuilder')
    }
}




let dummyCourse1 = new Course('dummyCourse1', 2, 0.02)
let dummyCourse2 = new Course('dummyCourse2', 4, 0.04)

console.log(dummyCourse1, dummyCourse2)
console.log(dummyCourse1.thereafter(), dummyCourse2.thereafter())
dummyCourse1.outPutTheResultToTheConsole('seconds')
dummyCourse2.outPutTheResultToTheConsole('minutes')
