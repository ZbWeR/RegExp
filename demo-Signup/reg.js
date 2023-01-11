function regName() {
    let regexp = /^[0-9a-zA-Z-_]{4,10}$/;
    let cont = $('.inputBox input[type="text"]').val();
    let errMes = '';
    if (regexp.test(cont) == false)
        errMes = "❌用户名仅允许数字,字母,下划线以及短横线";
    if (cont.length < 4 || cont.length > 10)
        errMes = "❌用户名长度需在4-10个字符之间";
    if (cont.length == 0) errMes = '';
    $('#errName').text(errMes);
}

function regPassWord() {
    let reglow = /([\d]{6,15})|([a-z]{6,15})|([A-Z]{6,15})/;
    let regmid = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^0-9a-zA-Z]+$).{6,15}/;
    let reghigh = /(?=.*[A-Z])(?=.*[^0-9a-zA-Z]).{6,15}/
    let cont = $('.inputBox input[type="password"]').val();
    // 处理输入框为空的情况
    if (cont.length == 0) {
        $('.wordPower ul li').addClass('hidden');
        $('.links').removeClass('active');
        $('.inputBox .wordPower>span').text('');
        return;
    }
    let cnt = 0, power = '';
    if (reghigh.test(cont)) { cnt = 3; power = '强'; }
    else if (regmid.test(cont)) { cnt = 2; power = '中'; }
    else if (reglow.test(cont)) { cnt = 1; power = '弱'; }
    else power = '❌密码要求 6~15 个字符';
    for (let i = 0; i < cnt; i++)
        $('.wordPower ul li').eq(i).removeClass('hidden');
    $('.links').addClass('active');
    $('.inputBox .wordPower>span').text(power);
    if (cnt == 0) $('.inputBox .wordPower>span').css("float", "unset");
    else $('.inputBox .wordPower>span').css("float", "right");
}