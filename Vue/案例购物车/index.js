new Vue({
    el:"#app",
    data() {
        return {
            name:"张三",
            count:0,
            Nocount:0,
            content:'',
            goodList:[
                {name:'手机',state:false},
                {name:'电脑',state:true},
                {name:'笔记本',state:false},
                {name:'游戏机',state:true},
            ]
        }
    },
    mounted() {
        this.getCout()
    },
    updated() {
        this.getCout()
    },
    methods: {
        // 计数函数
        getCout(){
            // goods总数
            this.count = this.goodList.length;
            // 未采购的数量
            this.Nocount = this.goodList.filter(item=>item.state === false).length;
        },
        // 添加函数
        add(content){
            if(content){
                this.goodList.unshift({name:this.content,state:false});
                this.content = '';
            }
            this.getCout()
        },
        // 删除函数
        del(index){
            
            this.goodList.splice(index,1);
            this.getCout()
        }

    },
    // 过滤器
    filters:{
        // 把true和false转换为中文
        checkState(state){
            switch(state){
                case true:
                    return '已采购'
                    break;
                case false:
                    return '未采购'
                    break;
            }
        }
    }
})