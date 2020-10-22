import got from 'got';
import WhmcsApi from '..';

export abstract class Module {

  async request(methodName: string, options?: any): Promise<any> {
    options.identifier = WhmcsApi.options.identifier // TODO get these from where the lib is constructed?
    options.secret = WhmcsApi.options.secret;
    options.action = methodName;
    options.responsetype = 'json';

    return new Promise(async (resolve, reject) => {
        const res = await got(WhmcsApi.options.apiUrl, {
            method: 'post',
            form: options
        });
        
        const data = JSON.parse(res.body);

        if (data.result != "success") return reject(data);
        resolve(data);
    });
  }
}