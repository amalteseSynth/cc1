import http from 'http';
import routes from './routing/routes';
import express, { Express } from 'express';

const router: Express = express();
router.use(express.json());
router.use('/', routes);
router.use((req, res, next) => {
    const error = new Error('Not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Set server and listening port */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));