// 1. 初始化数据
let hashObj = init()
let keys = hashObj.keys
let hash = hashObj.hash
// 2. 生成键盘
// 遍历 keys，生成 kbd 标签
// generateKeyboard(keys, hash)

// 3. 监听用户动作
// listenToUser(hash)

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
        'u': 'uc.com',
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'p': undefined,
        'a': 'alibab.com',
        's': 'sohu.com',
        'm': 'maidanglao'
    }

    let localHash = localStorage.getItem('localHash') || null;
    if (localHash) {
        return {
            hash: JSON.parse(localHash),
            keys: keys
        }
    } else {
        return {
            hash,
            keys
        }
    }

}

function tag(select) {
    return document.createElement(select);
}

for (let i = 0; i < keys.length; i++) {
    const wrap = tag('div');
    wrap.className = "wrap";
    for (let j = 0; j < keys[i].length; j++) {
        const keyboard = tag('kbd');
        keyboard.innerText = keys[i][j];
        wrap.appendChild(keyboard);

        const img = new Image()
        img.src = '/images/dot.png'
        img.onerror = function(){
          // img.src = '../images/dot.png'
        }

        const button = tag('button')
        button.innerText = '编辑'
        button.addEventListener('click', function(event) {
            event.target
            const url = prompt('请输入一个网址！')
        })

        keyboard.appendChild(img);
        keyboard.appendChild(button);
    }




    $$('.content')[0].appendChild(wrap);
}





function $$(select) {
    return document.querySelectorAll(select)
}