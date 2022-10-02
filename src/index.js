const express = require('express');
const cors = require('cors');
const { modules } = require('./modules');

const configurateExpress = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(cors({ origin: '*' }));
};

const main = async () => {
    const app = express();
    const port = 3000;

    configurateExpress(app);

    Object
        .values(modules)
        .forEach(({ basePath, router }) => (
            app.use(basePath, router)
        ));

    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
};

main().finally();
