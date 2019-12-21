
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        灾害损失评估 <span>- 地震</span>
                    </div>
                    <div class="layout-nav">
                        <div class="title_nav">
                            广西壮族自治区玉林市北流市发生5.2级地震  时间： 2019-10-28 03:23:28  震中： 东经10.51度，北纬22.18度  震源深度： 10KM 震中海拔： 200.00米
                        </div>
                    </div>
                    <div class="man">
                        <Icon type="md-contact" />
                        系统管理员
                    </div>
                    <div class="set">
                        <Icon type="md-settings" />
                    </div>
                    <div class="share">
                        <Icon type="ios-log-in" />
                    </div>
                </Menu>
            </Header>
        </Layout>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    // width: 100px;
    height: 30px;
    background: #3b62b1;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    padding: 3px 3px;
    span{
        font-size: 14px;
    }
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.ivu-menu-dark{
    background-color: #3b62b1;
}
.title_nav{
    display: inline-block;
    width: 800px;
    height: 50px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    line-height: 50px;
    border:1px solid rgb(106, 109, 240);
}
.man{
    display: inline-block;
    width: 80px;
    height: 30px;
    color: #fff;
    font-size: 10px;
    position: absolute;
    top:50%;
    right: 13%;
    transform: translateY(-50%);
    text-align: center;
    line-height: 30px;
    background-color:rgb(39, 41, 155);
    border-radius: 15px;
}
.set{
    display: inline-block;
    width: 30px;
    height: 30px;
    color: #fff;
    font-size: 10px;
    position: absolute;
    top:50%;
    right: 8%;
    transform: translateY(-50%);
    text-align: center;
    line-height: 30px;
    background-color:rgb(39, 41, 155);
    border-radius: 15px;
}
.share{
    display: inline-block;
    width: 30px;
    height: 30px;
    color: #fff;
    font-size: 10px;
    position: absolute;
    top:50%;
    right: 3%;
    transform: translateY(-50%);
    text-align: center;
    line-height: 30px;
    background-color:rgb(39, 41, 155);
    border-radius: 15px;
}
</style>
