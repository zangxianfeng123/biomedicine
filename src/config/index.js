const env = process.env
let ngConfig = {}
if (env.NODE_ENV === 'development') {
    ngConfig={
        modularResources:'',
        lookForPrint:'/lookPrint#'
    }
} else if (env.NODE_ENV === 'production') {
    ngConfig={
        modularResources:'',
        lookForPrint:'/lookPrint'
    }
} else if (env.NODE_ENV === 'test') {
    ngConfig = {}
}
export default ngConfig;