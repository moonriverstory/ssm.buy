<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@include file="/WEB-INF/jsp/common/tag.jsp"%>
<%@include file="/WEB-INF/jsp/common/head.jsp"%>
<!DOCTYPE html>
<html>
<body>
<div class="panel-body">
    <table class="table">
        <tbody>
            <tr>
                <td><button class="btn btn-info" id="user_list" onclick="handler.toUsersPage();">用户页</button></td>
                <td><button class="btn btn-info" id="goods_list" onclick="handler.toGoodsPage();">商品页</button></td>
            </tr>
        </tbody>
    </table>
</div>
</body>
<script src="<%=path%>/resource/script/handler.js" type="text/javascript"></script>
</html>