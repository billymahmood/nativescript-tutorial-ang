import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { setStatusBarColors } from "./utils/status-bar-util";

platformNativeScriptDynamic().bootstrapModule(AppModule);

setStatusBarColors();