//存放主要交互逻辑的js代码

var handler = {
    //封装相关ajax的url
    URL: {
        goodsBuy: function (goodsId) {
            return '/ssm/goods/' + goodsId + '/buy';
        },
        toGoods:function(){
            return '/ssm/goods/list';
        },
        toUsers:function(){
            return '/ssm/user/list';
        },
        refresh:function(){
            return '/ssm/goods/list?isRefresh=true';
        }
    },
    //验证手机号
    validatePhone: function (phone) {
        if (phone && phone.length == 11 && !isNaN(phone)) {
            return true;//直接判断对象会看对象是否为空,空就是undefine就是false; isNaN 非数字返回true
        } else {
            return false;
        }
    },
    //详情页秒杀逻辑
    goods: {
        //详情页初始化
        init: function (params) {
            //在cookie中查找手机号
            var userPhone = $.cookie('userPhone');
            //验证手机号
            if (!handler.validatePhone(userPhone)) {
                //绑定手机 控制输出
                var loginModal = $('#loginModal');
                loginModal.modal({
                    show: true,//显示弹出层
                    backdrop: 'static',//禁止位置关闭
                    keyboard: false//关闭键盘事件
                });

                $('#loginBtn').click(function () {
                    var inputPhone = $('#userPhone').val();
                    if (handler.validatePhone(inputPhone)) {
                        //电话写入cookie(7天过期)
                        $.cookie('userPhone', inputPhone, {expires: 7});
                        //验证通过　　刷新页面
                        window.location.reload();
                    } else {
                        $('#userPhoneMessage').hide().html('<label class="label label-danger">手机号错误!</label>').show(300);
                    }
                });
            }
        }
    },

    goodsBuy: function (goodsId) {
        //执行购买请求
        $.post(handler.URL.goodsBuy(goodsId), {}, function (result) {
            if (result && result['success']) {
                var r = confirm("购买成功！")
                if (r==true)
                {
                    //window.location.reload(true);
                    //location.replace(handler.URL.refresh());
                    window.location.href = handler.URL.refresh();
                }
            }else{
            	alert(result['error']);
            }
            
        });

    },
    toGoodsPage : function(){
        window.location.href = handler.URL.toGoods();
    },
    toUsersPage : function(){
        window.location.href = handler.URL.toUsers();
    }

};