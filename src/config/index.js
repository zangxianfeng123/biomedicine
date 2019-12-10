const env = process.env
let ngConfig = {}
if (env.NODE_ENV === 'development') {
    ngConfig={
        modularResources:'',
        lookForPrint:'/lkp#'
    }
} else{
    ngConfig={
        modularResources:'',
        lookForPrint:'/lkp'
    }
}
export default ngConfig;