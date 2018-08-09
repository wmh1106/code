/**
 * 处理 url search 部分的数据
 * @param {String} strSearch 
 * @returns {Object} 一个 hash 结构的对象
 */
function getURLSearch(strSearch) {
    if (strSearch.length < 2) return null;
    let arr = strSearch.substring(1).split("&")

    let newObj = {}
    arr.forEach(item => {
        const data = item.split('=')
        newObj[decodeURI(data[0])] = decodeURI(data[1])
    })
    return newObj
}
// 链接： http://127.0.0.1:8080/location.search.html?aa=1&bb=2&%E5%93%88%E5%93%88=%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6
console.log(getURLSearch(location.search))