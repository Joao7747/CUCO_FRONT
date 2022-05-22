export class Result<T = void> {
    content!: T;
    success!: boolean;
    messages!: String;
    status!: number
}