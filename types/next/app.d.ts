import * as React from "react";
import { NextContext, NextComponentType } from ".";
import { RouterProps, DefaultQuery } from "./router";

// Deprecated
export type AppComponentProps = AppProps;
export type AppComponentContext = NextAppContext;
// End Deprecated

/**
 * Context passed to App.getInitialProps.
 * Component is dynamic - cannot infer type.
 *
 * @template Q Query object schema.
 */
export interface NextAppContext<Q extends DefaultQuery = DefaultQuery> {
    Component: NextComponentType<any, any, NextContext<Q>>;
    router: RouterProps<Q>;
    ctx: NextContext<Q>;
}

/**
 * Props passed to the App component.
 * Component and pageProps are dynamic - cannot infer type.
 *
 * @template Q Query object schema.
 */
export interface AppProps<Q extends DefaultQuery = DefaultQuery> {
    Component: NextComponentType<any, any, NextContext<Q>>;
    router: RouterProps<Q>;
    pageProps: any;
}

/**
 * App component type. Differs from the default type because the context it passes
 * to getInitialProps and the props is passes to the component are different.
 *
 * @template IP Initial props returned from getInitialProps.
 * @template C Context passed to getInitialProps.
 */
export type AppComponentType<IP = {}, C = NextAppContext> = NextComponentType<IP & AppProps, IP, C>;

export class Container extends React.Component {}
export default class App<P = {}> extends React.Component<P & AppProps> {
    static getInitialProps(context: NextAppContext): Promise<{ pageProps: any }>;
}
