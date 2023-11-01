import { Express } from 'express';
import userRoutes from './user.route';

export function setupRoutes(app: Express) {
  app.use('/api', userRoutes);
}