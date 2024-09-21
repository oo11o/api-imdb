import { RoleValueObject } from './RoleValueObject.js';

/* eslint-disable no-empty-function */
class ActorValueObject {
    constructor(
        private name: string,
        private sourceId: string | undefined,
        private roles: RoleValueObject[],
        private extraInfo?: string
    ) {}


    public getName(): string {
        return this.name;
    }

    public getSourceId(): string | undefined {
        return this.sourceId;
    }

    public getRoles(): RoleValueObject[] {
        return this.roles;
    }

    public getExtraInfo(): string | undefined {
        return this.extraInfo;
    }
}

export { ActorValueObject };
