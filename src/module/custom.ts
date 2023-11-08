import {BaseModule} from "./base";

export class WhmcsClientCustom extends BaseModule {
    public async call<T>(method: string, options: Record<string, unknown>): Promise<T> {
        return this.request(method, options);
    }
}