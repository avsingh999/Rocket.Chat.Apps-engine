import { IModify, IModifyCreator, IModifyExtender, IModifyUpdater } from '@rocket.chat/apps-ts-definition/accessors';

import { AppBridges } from '../bridges';
import { ModifyCreator } from './ModifyCreator';
import { ModifyExtender } from './ModifyExtender';
import { ModifyUpdater } from './ModifyUpdater';

export class Modify implements IModify {
    private creator: IModifyCreator;
    private updater: IModifyUpdater;
    private extender: IModifyExtender;

    constructor(private readonly bridges: AppBridges, private readonly appId: string) {
        this.creator = new ModifyCreator(this.bridges, this.appId);
        this.updater = new ModifyUpdater(this.bridges, this.appId);
        this.extender = new ModifyExtender(this.bridges, this.appId);
    }

    public getCreator(): IModifyCreator {
        return this.creator;
    }

    public getUpdater(): IModifyUpdater {
        return this.updater;
    }

    public getExtender(): IModifyExtender {
        return this.extender;
    }
}
