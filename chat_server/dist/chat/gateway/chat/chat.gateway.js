"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
let ChatGateway = class ChatGateway {
    handleConnection(client, ...args) {
        console.log(`${client.id} has connected`);
    }
    handleDisConnect(client) {
        console.log(`${client.id} has disconnected`);
    }
    handleMessage(client, payload) {
        const roomId = payload.roomId;
        console.log("message-", roomId, payload);
        this.server.emit("message-" + roomId, payload);
        return 'Hello world!';
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Object)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], ChatGateway.prototype, "handleMessage", null);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true })
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map