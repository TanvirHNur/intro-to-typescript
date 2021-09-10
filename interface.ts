interface Player {
    name: string,
    club: string,
    type: 'football',
    salary: number;
    wife?: string,
    perviousClub: string
}

const rakib: Player = {
    name: 'sk mycko',
    club: 'MS Club',
    salary: 40000,
    wife: 'Micky',
    perviousClub: 'REAL',
    type: 'football'
}

const josim: Player = {
    name: 'sk mycko',
    club: 'MS Club',
    salary: 40000,
    perviousClub: 'REAL',
    type: 'football'
};

interface Employee {
    name: string,
    designation: string,
    salary?: number
};

interface Developer extends Employee {
    language: string, 
    codeEditor: string,
    typingSpeed: number
}

const zuku: Developer = {
    name: 'Zakar',
    designation: 'Co-founder',
    language: 'js',
    codeEditor: 'vsCode',
    typingSpeed: 50
}