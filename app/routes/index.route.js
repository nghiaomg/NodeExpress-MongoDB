"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = void 0;
const user_route_1 = __importDefault(require("./user.route"));
function setupRoutes(app) {
    app.use('/api', user_route_1.default);
}
exports.setupRoutes = setupRoutes;
