import got from 'got';

export class WhmcsService {

    public getApiEndpoint(): string {
        return '';
    }

    async request(methodName: string, options?: any): Promise<any> {
        options.identifier = ''; // TODO get these from where the lib is constructed?
        options.secret = '';
        options.action = methodName;
        options.responsetype = 'json';

        return new Promise(async (resolve, reject) => {
            const res = await got('https://shockbyte.com/billing/includes/api.php', {
                method: 'post',
                form: options
            });
            const data = JSON.parse(res.body);

            if (data.result != "success") return reject(data);
            resolve(data);
        });
    }
}
