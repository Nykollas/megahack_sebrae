"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractmessage_1 = require("./abstractmessage");
class ContinuationTokenStatus {
}
exports.ContinuationTokenStatus = ContinuationTokenStatus;
class InitReply extends abstractmessage_1.AbstractMessage {
    constructor(id, continuationToken, continuationTokenStatus, offlineStorage, initRegistrations, debugInfo) {
        super(id);
        this.continuationToken = continuationToken;
        this.continuationTokenStatus = continuationTokenStatus;
        this.offlineStorage = offlineStorage;
        this.initRegistrations = initRegistrations;
        this.debugInfo = debugInfo;
    }
}
exports.InitReply = InitReply;
