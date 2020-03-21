const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typestring'

const numberArray: number[] = [1,2,3]
const numberArray2: Array<number> = [1,2,3]

const words: string[] = ['Hello', 'Typescriprt']

// Tuple масив с указанием типов данных

const contact: [string, number] = ['serj', 1234]

//Any
let variable: any = 42
//...
variable = 'str'
variable = []

// === функции с указанием возвращаемого значения и типов принимаемых параметров
function sayMyName (name: string): void {
    console.log(name)
}  

sayMyName ('Hyzenberg')

// Never для бесконечный циклов

// Type свои типы данных
type Login = string
const login: Login = 'admin'
type ID = string | number
const id1: ID = 1234
const id2: ID = 'str'
// const id3: ID = true

type Sometype = string | null | undefined