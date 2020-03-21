// специфичные операторы тайпскрипта
interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

// ошибка key = 'job'

type User = {
    _id:number
    name: string
    email: string
    createAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' |'createAt'> // теперь мы вырезали те поля и остались наейм и емайл
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> //а тут мы забрали из юзеров нужное а не удаляли

let u1: UserKeysNoMeta = 'name'
// u1 = '_id' ошибка