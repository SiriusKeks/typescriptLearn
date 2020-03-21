// вспомогательная сущность для структурирования однотипных елементов

enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)


// енум с более понятными ключами значениями

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social =  SocialMedia.INSTAGRAM
console.log(social)