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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const chat_schema_1 = require("../../../schemas/chat.schema");
let ChatService = class ChatService {
    getTime() {
        const currDate = new Date();
        return currDate.toLocaleString();
    }
    constructor(chatModel) {
        this.chatModel = chatModel;
    }
    async getAll() {
        try {
            let chatData = await this.chatModel.find({}).exec();
            return chatData;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async getById(id) {
        try {
            let chatData = await this.chatModel.find({ roomId: id }).exec();
            return chatData;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async create(newChat) {
        try {
            let chatData = this.chatModel.create(newChat);
            return chatData;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async update(id, upChat) {
        try {
            let chatData = await this.chatModel.findOneAndUpdate({ roomId: id }, { $set: {
                    senderMsg: upChat.senderMsg,
                    time: this.getTime()
                } }).exec();
            return chatData;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async detete(id) {
        try {
            this.chatModel.deleteOne({ roomId: id }).exec();
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
};
ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chat_schema_1.Chat.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map