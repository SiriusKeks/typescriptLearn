// дженерик синтаксис стрелок указателей для задания типа переменых
const arrayOfNumbers: Array<number> = [1,2,3]
const arrayOfStrings: Array<string> = ['hello', 'sukva']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)