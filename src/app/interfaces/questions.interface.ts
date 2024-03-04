export interface Question {
    title: string,
    img?: string,
    options: Option[]
}

export interface Option {
    letter: string,
    value: string
}