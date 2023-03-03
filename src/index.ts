export const useOutsidePromise = (callback?) => {
    let promiseResolve: any = null
    let promiseReject: any = null
    const promise: any = new Promise((resolve, reject) => {
        promiseResolve = resolve
        promiseReject = reject
        return callback && callback(resolve, reject)
    })
    promise.resolve = promiseResolve
    promise.reject = promiseReject
    return promise
}
