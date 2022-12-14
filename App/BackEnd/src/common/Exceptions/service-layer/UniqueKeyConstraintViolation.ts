export class UniqueKeyConstraintViolationException extends Error {

    constructor(fields: string[]) {
        super(`Unique constraint violation ${fields}`);
    }
}