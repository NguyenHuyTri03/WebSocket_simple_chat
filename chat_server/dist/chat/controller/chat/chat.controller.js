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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const chat_service_1 = require("../../services/chat/chat.service");
const chat_model_1 = require("../../../model/chat.model");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    getAll() {
        return this.chatService.getAll();
    }
    getById(id) {
        return this.chatService.getById(id);
    }
    createNew(newChat) {
        return this.chatService.create(newChat);
    }
    update(id, newChat) {
        return this.chatService.update(id, newChat);
    }
    delete(id) {
        return this.chatService.detete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/byId"),
    __param(0, (0, decorators_1.Query)("roomId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getById", null);
__decorate([
    (0, decorators_1.Post)("/create"),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chat_model_1.ChatModel]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createNew", null);
__decorate([
    (0, decorators_1.Put)("/update"),
    __param(0, (0, decorators_1.Query)("id")),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, chat_model_1.ChatModel]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "update", null);
__decorate([
    (0, decorators_1.Delete)("/delete"),
    __param(0, (0, decorators_1.Query)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "delete", null);
ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map