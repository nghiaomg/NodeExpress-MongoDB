"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/users', (req, res) => {
    res.json({ message: 'Danh sách người dùng' });
});
router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Thông tin người dùng có ID ${userId}` });
});
router.post('/users', (req, res) => {
    const userData = req.body;
    res.json({ message: 'Tạo mới người dùng', data: userData });
});
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    res.json({ message: `Cập nhật người dùng có ID ${userId}`, data: userData });
});
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Xóa người dùng có ID ${userId}` });
});
exports.default = router;
