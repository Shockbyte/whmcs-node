import got from 'got';
import WhmcsApi from '..';
import { WhmcsSetupOptions } from '../interface/whmcs.setup.options';

export abstract class BaseModule {

  constructor(private readonly options: WhmcsSetupOptions) { }

  protected async request(methodName: string, options?: any): Promise<any> {
    options.identifier = this.options.identifier;
    options.secret = this.options.secret;
    options.action = methodName;
    options.responsetype = 'json';

    return new Promise(async (resolve, reject) => {
      const res = await got(this.options.apiUrl, {
        method: 'post',
        form: options
      });

      const data = JSON.parse(res.body);

      if (data.result != "success") return reject(data);
      resolve(data);
    });
  }
}