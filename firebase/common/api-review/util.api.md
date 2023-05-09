## API Report File for "@firebase/util"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// Warning: (ae-missing-release-tag) "areCookiesEnabled" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function areCookiesEnabled(): boolean;

// Warning: (ae-missing-release-tag) "assert" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const assert: (assertion: unknown, message: string) => void;

// Warning: (ae-missing-release-tag) "assertionError" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const assertionError: (message: string) => Error;

// Warning: (ae-missing-release-tag) "async" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function async(fn: Function, onError?: ErrorFn): Function;

// Warning: (ae-forgotten-export) The symbol "Base64" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "base64" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const base64: Base64;

// Warning: (ae-missing-release-tag) "base64Decode" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const base64Decode: (str: string) => string | null;

// Warning: (ae-missing-release-tag) "base64Encode" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const base64Encode: (str: string) => string;

// Warning: (ae-missing-release-tag) "base64urlEncodeWithoutPadding" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const base64urlEncodeWithoutPadding: (str: string) => string;

// Warning: (ae-missing-release-tag) "calculateBackoffMillis" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function calculateBackoffMillis(backoffCount: number, intervalMillis?: number, backoffFactor?: number): number;

// Warning: (ae-missing-release-tag) "Compat" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export interface Compat<T> {
    // (undocumented)
    _delegate: T;
}

// Warning: (ae-missing-release-tag) "CompleteFn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type CompleteFn = () => void;

// Warning: (ae-missing-release-tag) "CONSTANTS" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const CONSTANTS: {
    NODE_CLIENT: boolean;
    NODE_ADMIN: boolean;
    SDK_VERSION: string;
};

// Warning: (ae-missing-release-tag) "contains" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function contains<T extends object>(obj: T, key: string): boolean;

// Warning: (ae-missing-release-tag) "createMockUserToken" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function createMockUserToken(token: EmulatorMockTokenOptions, projectId?: string): string;

// Warning: (ae-missing-release-tag) "createSubscribe" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function createSubscribe<T>(executor: Executor<T>, onNoObservers?: Executor<T>): Subscribe<T>;

// Warning: (ae-forgotten-export) The symbol "DecodedToken" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "decode" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const decode: (token: string) => DecodedToken;

// Warning: (ae-missing-release-tag) "DecodeBase64StringError" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export class DecodeBase64StringError extends Error {
    // (undocumented)
    readonly name = "DecodeBase64StringError";
}

// Warning: (ae-missing-release-tag) "deepCopy" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function deepCopy<T>(value: T): T;

// Warning: (ae-missing-release-tag) "deepEqual" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function deepEqual(a: object, b: object): boolean;

// Warning: (ae-missing-release-tag) "deepExtend" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function deepExtend(target: unknown, source: unknown): unknown;

// Warning: (ae-missing-release-tag) "Deferred" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export class Deferred<R> {
    constructor();
    // (undocumented)
    promise: Promise<R>;
    // (undocumented)
    reject: (value?: unknown) => void;
    // (undocumented)
    resolve: (value?: unknown) => void;
    wrapCallback(callback?: (error?: unknown, value?: unknown) => void): (error: unknown, value?: unknown) => void;
}

// Warning: (ae-forgotten-export) The symbol "FirebaseIdToken" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "EmulatorMockTokenOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type EmulatorMockTokenOptions = ({
    user_id: string;
} | {
    sub: string;
}) & Partial<FirebaseIdToken>;

// Warning: (ae-missing-release-tag) "ErrorData" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface ErrorData {
    // (undocumented)
    [key: string]: unknown;
}

// Warning: (ae-missing-release-tag) "ErrorFactory" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class ErrorFactory<ErrorCode extends string, ErrorParams extends {
    readonly [K in ErrorCode]?: ErrorData;
} = {}> {
    constructor(service: string, serviceName: string, errors: ErrorMap<ErrorCode>);
    // (undocumented)
    create<K extends ErrorCode>(code: K, ...data: K extends keyof ErrorParams ? [ErrorParams[K]] : []): FirebaseError;
    }

// Warning: (ae-missing-release-tag) "ErrorFn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type ErrorFn = (error: Error) => void;

// Warning: (ae-missing-release-tag) "ErrorMap" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export type ErrorMap<ErrorCode extends string> = {
    readonly [K in ErrorCode]: string;
};

// Warning: (ae-missing-release-tag) "errorPrefix" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function errorPrefix(fnName: string, argName: string): string;

// Warning: (ae-missing-release-tag) "Executor" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type Executor<T> = (observer: Observer<T>) => void;

// @public
export type ExperimentalKey = 'authTokenSyncURL' | 'authIdTokenMaxAge';

// Warning: (ae-missing-release-tag) "extractQuerystring" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function extractQuerystring(url: string): string;

// @public
export interface FirebaseDefaults {
    // (undocumented)
    [key: string]: unknown;
    // (undocumented)
    _authIdTokenMaxAge?: number;
    // (undocumented)
    _authTokenSyncURL?: string;
    // (undocumented)
    config?: Record<string, string>;
    // (undocumented)
    emulatorHosts?: Record<string, string>;
    forceEnvironment?: 'browser' | 'node';
}

// Warning: (ae-missing-release-tag) "FirebaseError" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class FirebaseError extends Error {
    constructor(
    code: string, message: string,
    customData?: Record<string, unknown> | undefined);
    readonly code: string;
    customData?: Record<string, unknown> | undefined;
    readonly name: string;
}

// Warning: (ae-missing-release-tag) "FirebaseSignInProvider" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export type FirebaseSignInProvider = 'custom' | 'email' | 'password' | 'phone' | 'anonymous' | 'google.com' | 'facebook.com' | 'github.com' | 'twitter.com' | 'microsoft.com' | 'apple.com';

// @public
export const getDefaultAppConfig: () => Record<string, string> | undefined;

// @public
export const getDefaultEmulatorHost: (productName: string) => string | undefined;

// @public
export const getDefaultEmulatorHostnameAndPort: (productName: string) => [hostname: string, port: number] | undefined;

// @public
export const getDefaults: () => FirebaseDefaults | undefined;

// @public
export const getExperimentalSetting: <T extends ExperimentalKey>(name: T) => FirebaseDefaults[`_${T}`];

// @public
export function getGlobal(): typeof globalThis;

// Warning: (ae-missing-release-tag) "getModularInstance" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function getModularInstance<ExpService>(service: Compat<ExpService> | ExpService): ExpService;

// Warning: (ae-missing-release-tag) "getUA" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function getUA(): string;

// Warning: (ae-missing-release-tag) "isAdmin" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const isAdmin: (token: string) => boolean;

// Warning: (ae-missing-release-tag) "isBrowser" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isBrowser(): boolean;

// Warning: (ae-missing-release-tag) "isBrowserExtension" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function isBrowserExtension(): boolean;

// Warning: (ae-missing-release-tag) "isElectron" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isElectron(): boolean;

// Warning: (ae-missing-release-tag) "isEmpty" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function isEmpty(obj: object): obj is {};

// Warning: (ae-missing-release-tag) "isIE" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isIE(): boolean;

// Warning: (ae-missing-release-tag) "isIndexedDBAvailable" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isIndexedDBAvailable(): boolean;

// Warning: (ae-missing-release-tag) "isMobileCordova" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isMobileCordova(): boolean;

// Warning: (ae-missing-release-tag) "isNode" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isNode(): boolean;

// Warning: (ae-missing-release-tag) "isNodeSdk" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isNodeSdk(): boolean;

// Warning: (ae-missing-release-tag) "isReactNative" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isReactNative(): boolean;

// Warning: (ae-missing-release-tag) "isSafari" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isSafari(): boolean;

// Warning: (ae-missing-release-tag) "issuedAtTime" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const issuedAtTime: (token: string) => number | null;

// Warning: (ae-missing-release-tag) "isUWP" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isUWP(): boolean;

// Warning: (ae-missing-release-tag) "isValidFormat" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const isValidFormat: (token: string) => boolean;

// Warning: (ae-missing-release-tag) "isValidTimestamp" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const isValidTimestamp: (token: string) => boolean;

// Warning: (ae-missing-release-tag) "jsonEval" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function jsonEval(str: string): unknown;

// Warning: (ae-missing-release-tag) "map" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function map<K extends string, V, U>(obj: {
    [key in K]: V;
}, fn: (value: V, key: K, obj: {
    [key in K]: V;
}) => U, contextObj?: unknown): {
    [key in K]: U;
};

// Warning: (ae-missing-release-tag) "MAX_VALUE_MILLIS" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const MAX_VALUE_MILLIS: number;

// Warning: (ae-missing-release-tag) "NextFn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export type NextFn<T> = (value: T) => void;

// Warning: (ae-missing-release-tag) "Observable" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface Observable<T> {
    // (undocumented)
    subscribe: Subscribe<T>;
}

// Warning: (ae-missing-release-tag) "Observer" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface Observer<T> {
    // (undocumented)
    complete: CompleteFn;
    // (undocumented)
    error: ErrorFn;
    // (undocumented)
    next: NextFn<T>;
}

// Warning: (ae-missing-release-tag) "ordinal" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function ordinal(i: number): string;

// Warning: (ae-missing-release-tag) "PartialObserver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type PartialObserver<T> = Partial<Observer<T>>;

// Warning: (ae-internal-missing-underscore) The name "promiseWithTimeout" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function promiseWithTimeout<T>(promise: Promise<T>, timeInMS?: number): Promise<T>;

// Warning: (ae-missing-release-tag) "querystring" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function querystring(querystringParams: {
    [key: string]: string | number;
}): string;

// Warning: (ae-missing-release-tag) "querystringDecode" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function querystringDecode(querystring: string): Record<string, string>;

// Warning: (ae-missing-release-tag) "RANDOM_FACTOR" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const RANDOM_FACTOR = 0.5;

// Warning: (ae-missing-release-tag) "safeGet" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function safeGet<T extends object, K extends keyof T>(obj: T, key: K): T[K] | undefined;

// Warning: (ae-missing-release-tag) "Sha1" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export class Sha1 {
    constructor();
    // (undocumented)
    blockSize: number;
    compress_(buf: number[] | Uint8Array | string, offset?: number): void;
    // @override (undocumented)
    digest(): number[];
    // (undocumented)
    reset(): void;
    // (undocumented)
    update(bytes?: number[] | Uint8Array | string, length?: number): void;
    }

// Warning: (ae-missing-release-tag) "stringify" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function stringify(data: unknown): string;

// Warning: (ae-missing-release-tag) "stringLength" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const stringLength: (str: string) => number;

// Warning: (ae-missing-release-tag) "StringLike" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface StringLike {
    // (undocumented)
    toString(): string;
}

// Warning: (ae-missing-release-tag) "stringToByteArray" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const stringToByteArray: (str: string) => number[];

// Warning: (ae-missing-release-tag) "Subscribe" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export interface Subscribe<T> {
    // (undocumented)
    (next?: NextFn<T>, error?: ErrorFn, complete?: CompleteFn): Unsubscribe;
    // (undocumented)
    (observer: PartialObserver<T>): Unsubscribe;
}

// Warning: (ae-missing-release-tag) "Unsubscribe" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type Unsubscribe = () => void;

// @public
export const uuidv4: () => string;

// Warning: (ae-missing-release-tag) "validateArgCount" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const validateArgCount: (fnName: string, minCount: number, maxCount: number, argCount: number) => void;

// Warning: (ae-missing-release-tag) "validateCallback" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function validateCallback(fnName: string, argumentName: string, callback: Function, optional: boolean): void;

// Warning: (ae-missing-release-tag) "validateContextObject" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function validateContextObject(fnName: string, argumentName: string, context: unknown, optional: boolean): void;

// Warning: (ae-missing-release-tag) "validateIndexedDBOpenable" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function validateIndexedDBOpenable(): Promise<boolean>;

// Warning: (ae-missing-release-tag) "validateNamespace" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function validateNamespace(fnName: string, namespace: string, optional: boolean): void;


// (No @packageDocumentation comment for this package)

```