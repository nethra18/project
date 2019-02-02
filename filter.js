function sum(...args) {
    console.log(args.filter(e => typeof e === 'number')
        .reduce((prev, curr)=> prev + curr));
}
sum(1,2,3,"haii","bye",6,7);
