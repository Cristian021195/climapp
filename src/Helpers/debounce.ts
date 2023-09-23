/* eslint-disable prefer-rest-params */
/*export const debounce = (func:()=>void, delay:number) => {
    let timer:undefined | number;

    return function () {
        const self = this;
        const args = arguments;
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(self, args)
        }, delay);
    }
}*/
//type MyFn = ()=>
type Entrada = string;
export const debounce = (fn: (e:Entrada)=>unknown, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: never, ...args: never[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args as never), ms);
    };
};

