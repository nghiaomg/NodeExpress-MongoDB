"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const request_ip_1 = __importDefault(require("request-ip"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_route_1 = __importDefault(require("./app/routes/index.route"));
dotenv_1.default.config();
const port = parseInt(process.env.PORT || '3000', 10);
const base_url = process.env.BASE_URL || 'http://localhost';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(request_ip_1.default.mw());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'uploads')));
app.use('/uploads', express_1.default.static('uploads'));
app.set('trust proxy', true);
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
app.use(allowCrossDomain);
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
}));
app.use(index_route_1.default);
app.listen(port, () => {
    console.log(`Hi Bro! We are running in ${base_url}:${port}`);
});
