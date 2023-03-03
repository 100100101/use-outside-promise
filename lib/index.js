"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOutsidePromise = void 0;
const useOutsidePromise = (callback) => {
    let promiseResolve = null;
    let promiseReject = null;
    const promise = new Promise((resolve, reject) => {
        promiseResolve = resolve;
        promiseReject = reject;
        return callback && callback(resolve, reject);
    });
    promise.resolve = promiseResolve;
    promise.reject = promiseReject;
    return promise;
};
exports.useOutsidePromise = useOutsidePromise;
//# sourceMappingURL=index.js.map