# parcel2-issue
sandbox for parcel2 build issues

```shell
npx parcel build ./src/index.html --no-optimize
```

```js
// broken
const $2e312cb5ec191554$export$33f07d46bc452aa4 = (payload)=>payload?.$2e312cb5ec191554$export$33f07d46bc452aa4 === true
;
const $2e312cb5ec191554$export$3100cf595abe3c86 = (payload)=>payload?.bValue === true
;


console.log($2e312cb5ec191554$export$33f07d46bc452aa4({
    isAValue: true
}));
console.log($2e312cb5ec191554$export$3100cf595abe3c86({
    isBValue: true
}));
```