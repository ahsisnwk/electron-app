document.getElementById("test").addEventListener('click', async () => {
    var searchkey = document.getElementById("searchkey").value.toString()
    var data = {
        "searchtype": "all",
        "searchkey": searchkey,
    }
    var data = new URLSearchParams(data).toString()

    const response = await fetch('https://www.69shuba.com/modules/article/search.php', {
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data,
    })

    let text = await response.text()
    text = await window.encode123.change(text.toString(), 'gbk')

    document.getElementById("info").innerText = text
})