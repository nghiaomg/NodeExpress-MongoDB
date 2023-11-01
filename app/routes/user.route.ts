import { Router, Request, Response } from 'express';

const router = Router();

router.get('/users', (req: Request, res: Response) => {
  res.json({ message: 'Danh sách người dùng' });
});

router.get('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  res.json({ message: `Thông tin người dùng có ID ${userId}` });
});

router.post('/users', (req: Request, res: Response) => {
  const userData = req.body;
  res.json({ message: 'Tạo mới người dùng', data: userData });
});

router.put('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const userData = req.body;
  res.json({ message: `Cập nhật người dùng có ID ${userId}`, data: userData });
});

router.delete('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  res.json({ message: `Xóa người dùng có ID ${userId}` });
});

export default router;