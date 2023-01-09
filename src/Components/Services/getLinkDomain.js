export default function getLinkDomain (url){
    let domain = (new URL(url));

    return(
        domain.hostname
    )
}