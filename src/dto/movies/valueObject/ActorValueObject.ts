import { RoleValueObject } from './RoleValueObject.js';

/* eslint-disable no-empty-function */
class ActorValueObject {
    constructor(
        private name: string,
        private sourceId: string | undefined,
        private roles: RoleValueObject[],
        private extraInfo?: string
    ) {}

    public getSourceId(): string | undefined {
        return this.sourceId;
    }

    public getName(): string {
        return this.name;
    }
}

export { ActorValueObject };
