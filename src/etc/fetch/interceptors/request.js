import { Interceptor } from 'intercept-fetch';

const apiPrefix = 'https://api.github.com';

const prefixInterceptor = new Interceptor({
    prefix: {
        request(url, config) {
            return Promise.resolve([apiPrefix + url, config]);
        }
    }
});

export default prefixInterceptor;
