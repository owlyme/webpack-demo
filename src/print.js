

export default function printMe() {
    console.log('I get called from print.js!');
    // import(/* webpackChunkName: "unuse" */ './unuse.js');
    // import(/* webpackPrefetch: true */ "./unuse.js");
    // import("./unuse.js");
    // import(/* webpackPreload: true */ "./unuse.js");
        import(/* webpackChunkName: "unuse" */ './unuse').then(module => {
           var unuse = module.default;
            unuse();
        })
}