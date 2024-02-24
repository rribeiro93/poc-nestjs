import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const { method, body, headers } = req;

    const log = { middleware: LoggerMiddleware.name, method, headers, body };

    console.log(JSON.stringify(log));

    next();
  }
}
