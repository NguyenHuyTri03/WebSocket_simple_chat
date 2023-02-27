export declare class ChatGateway {
    server: any;
    handleConnection(client: any, ...args: any[]): void;
    handleDisConnect(client: any): void;
    handleMessage(client: any, payload: any): string;
}
