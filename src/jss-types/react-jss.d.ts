declare module "react-jss/lib/JssProvider" {
    export function JssProvider(Component: JSX.Element): any;
    export { JssProvider as default };
}

declare module "react-jss" {
    export function injectSheet(stylesOrSheet: any, options?: any): any;
    export { injectSheet as default};
}