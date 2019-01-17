import Raven from 'raven-js';

function init() {
    Raven.config('https://4dfd930b0c6345868622a28bd0e54bf5@sentry.io/1373857', {
        release: '1.0.0',
        environment: 'development-test'
    }).install();
}

function log(error) {
    Raven.captureException(error);
}

export default {
    init,
    log
};
