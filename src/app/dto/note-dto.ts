export class NoteDto {
    id?: number
    title?: string
    content?: string
    owner?: string
    constructor(id: number, title: string, content: string, owner: string) {}
}
