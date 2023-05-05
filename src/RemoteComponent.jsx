import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    createRemoteComponent,
    createRequires,
} from "@paciolan/remote-component";

// What is a Remote Component?
// A Remote Components is loaded at runtime from a URL. It is used in the same way any other React Component is used

// Install
// npm install @paciolan/remote-component

// Documentation
// https://github.com/Paciolan/remote-component

// Vite Usage
// https://stackblitz.com/edit/vitejs-vite-myxwzz?file=src%2FApp.jsx&terminal=dev

export const RemoteComponent = createRemoteComponent({
    requires: createRequires({ react: React, "react-dom": ReactDOM }),
});
