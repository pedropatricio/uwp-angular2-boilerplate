import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

declare let Windows: any;

let WinJS = require('winjs');

let app = WinJS.Application;
let activation = Windows.ApplicationModel.Activation;

app.onactivated = (args: any) => {
    if(args.detail.kind === activation.ActivationKind.launch) {
        if (process.env.ENV === 'production') {
            enableProdMode();
        }
        platformBrowserDynamic().bootstrapModule(AppModule);
    }
};

app.start();

