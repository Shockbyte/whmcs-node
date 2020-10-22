import { WhmcsSetupOptions } from "./interface/whmcs.setup.options";
import { WhmcsAddonsService } from "./module/addons";

export default class WhmcsApi {

  public static options: WhmcsSetupOptions;

  constructor(options: WhmcsSetupOptions) {
    WhmcsApi.options = options
  }

  public addons: WhmcsAddonsService = new WhmcsAddonsService;
}