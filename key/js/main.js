const config = {
    imgUrl : 'https://wmh1106.github.io/code/key/images/dot.png'
}

function init() {
    const keys = {
        0: {
            0: "q",
            1: "w",
            2: "e",
            3: "r",
            4: "t",
            5: "y",
            6: "u",
            7: "i",
            8: "o",
            9: "p",
            length: 10
        },
        1: {
            0: "a",
            1: "s",
            2: "d",
            3: "f",
            4: "g",
            5: "h",
            6: "j",
            7: "k",
            8: "l",
            length: 9
        },
        2: {
            0: "z",
            1: "x",
            2: "c",
            3: "v",
            4: "b",
            5: "n",
            6: "m",
            length: 7
        },
        length: 3
    };

    const hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'ele.me',
        'r': 'renren.com',
        't': 'taobao.com',
        'y': 'youtube.cn',
        'u': 'uc.cn',
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'p': undefined,
        'a': 'alibab.com',
        's': 'sohu.com',
        'm': 'maidanglao.com',
        'i': 'ife.baidu.com/',
        'b': 'www.bilibili.com/'
    }

    let localHash = localStorage.getItem('localHash') || null;
    if (localHash) {
        return {
            hash: JSON.parse(localHash),
            keys: keys
        }
    } else {
        localStorage.setItem('localHash',JSON.stringify(hash))
        return {
            hash,
            keys
        }
    }

}

function createButton(key) {
    const button = tag('button')
    button.innerText = '编辑'
    button.id = key
    button.addEventListener('click', function(event) {
        const key = event.target.id
        const url = prompt('请输入一个网址！')
        hash[key] = url
        
        const img = event.target.previousElementSibling

        if (hash[key]) {
            img.src = 'http://' + hash[key] + '/favicon.ico'
        } else {
            img.src = config.imgUrl
        }
        img.onerror = function(event) {
            event.target.src = config.imgUrl
        }
        localStorage.setItem('localHash',JSON.stringify(hash))
    })

    

    return button
}

function createImg(domain) {
    const img = new Image()
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico'
    } else {
        img.src = config.imgUrl
    }
    img.onerror = function(event) {
        event.target.src = config.imgUrl
    }

    return img
}

function generateKeyboard(){
    for (let i = 0; i < keys.length; i++) {
        const wrap = tag('div');
        wrap.className = "wrap";
        for (let j = 0; j < keys[i].length; j++) {
            const keyboard = tag('kbd');
            keyboard.innerText = keys[i][j];

            const button = createButton(keys[i][j])
            const img = createImg(hash[keys[i][j]])
            keyboard.appendChild(img);
            keyboard.appendChild(button);
    
            wrap.appendChild(keyboard);
        }
        $$('.content')[0].appendChild(wrap);
    }
}

function listenToUser(){
    document.addEventListener('keypress', function(event) {
        window.open('http://' + hash[event.key])
    })
}

// 1. 初始化数据
let hashObj = init()
let keys = hashObj.keys
let hash = hashObj.hash

// 2 循环创建键盘
generateKeyboard()

// 3 监听用户动作
listenToUser()

// 工具函数
function $$(select) {
    return document.querySelectorAll(select)
}

function tag(select) {
    return document.createElement(select);
}