import express, { Application, Request, Response, urlencoded } from 'express';
import cors from 'cors';
import { Server } from 'http';
import router from './app/routes';
import config from './app/config';
import globalErrorHandler from './app/middlewares/global_error_handler';

const app: Application = express();
let server: Server;

// parser
app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));

// root endpoint
app.get('/', (_: Request, res: Response) => {
    res.send('Hello World!');
});

// application route
app.use('/api', router);

// global error catcher
app.use(globalErrorHandler)

// not found route
app.all('*', (_: Request, res: Response) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Endpoint Not Found",
    });
});

server = app.listen(config.port || 5000, () => {
    console.log(`ChapterChain is listening on port ${config.port || 5000}`);
});

// async error handle
process.on('unhandledRejection', () => {
    console.log('unhandledRejection is detected! shutting down the server...');

    if (server) {
        server.close(() => {
            process.exit(1);

        });
    };

    process.exit(1);
});


// synchronies error handle
process.on('uncaughtException', () => {
    console.log('uncaughtException is detected! shutting down the server...');
    process.exit();
});