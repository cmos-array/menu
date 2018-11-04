//@ sourceURL=test.js

var Main = {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
var Ctor = Vue.extend(Main);
new Ctor().$mount('#app');

Vue.component('root-menu', {
    props: ['indexid','title','iconname','text'],
    template:
        '<el-menu-item v-bind:index="indexid">\n' +
        '   <template v-bind:slot="title">\n' +
        '   <i v-bind:class="iconname"></i>\n' +
        '   <span>{{text}}</span>\n' +
        '   </template>\n' +
        '</el-menu-item>'
});

Vue.component('option-menu', {
    props: ['indexid','iconname','text'],
    template:
    '<el-menu-item v-bind:index="indexid">\n' +
    '   <i v-bind:class="iconname"></i>\n' +
    '   <span>{{text}}</span>\n' +
    '</el-menu-item>'
});

new Vue({ el: '#menu-components' });

Vue.component('chat-comp', {
    data () {
        return {
            chartData: {
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [
                    { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                    { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                    { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                    { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                    { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                    { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                ]
            }
        }
    },
    components: { VeLine },
    template: '<ve-line :data="chartData"  width="1400px"></ve-line>'
});

Vue.component('user-chat', {
    data () {
        this.typeArr = ['line', 'histogram', 'pie'];
        this.index = 0;
        return {
            chartData: {
                columns: ['城市', '数量'],
                rows: [
                    { '城市': '北京', '数量': 135 },
                    { '城市': '上海', '数量': 220 },
                    { '城市': '广州', '数量': 60 },
                    { '城市': '深圳', '数量': 200 },
                    { '城市': '成都', '数量': 90 },
                    { '城市': '昆明', '数量': 20 }
                ]
            },
            chartSettings: {
                type: this.typeArr[this.index],
            }
        }
    },
    methods: {
        changeType: function () {
            this.index++;
           if (this.index >= this.typeArr.length) { this.index = 0 }
            if (2 == this.index) {
                this.chartSettings = {
                    type: this.typeArr[this.index],
                    roseType: 'radius',
                    radius: 250,
                    offsetY: 350,
                }
            }
            else {this.chartSettings = { type: this.typeArr[this.index] }}
        }
    },
    template: '<div>\n' +
    '<div style="text-align: right;">\n' +
    '    <el-button type="info" plain icon="el-icon-sort" @click="changeType">切换图表类型</el-button>\n' +
    '    <el-button type="info" plain icon="el-icon-edit"></el-button>\n' +
    '    <el-button type="info" plain icon="el-icon-share"></el-button>\n' +
    '    <el-button type="info" plain icon="el-icon-delete"></el-button>\n' +
    '</div>\n' +
    '    <ve-chart :data="chartData" :settings="chartSettings" width="1400px" height="700px" style="margin: 0 auto;"></ve-chart>\n' +
    '</div>'
});

new Vue({
    el: '#app',
    data () {
        this.typeArr = ['line', 'histogram', 'pie'];
        this.index = 0;
        return {
            chartData: {
                columns: ['日期', '访问用户'],
                rows: [
                    { '日期': '1月1日', '访问用户': 1523 },
                    { '日期': '1月2日', '访问用户': 1223 },
                    { '日期': '1月3日', '访问用户': 2123 },
                    { '日期': '1月4日', '访问用户': 4123 },
                    { '日期': '1月5日', '访问用户': 3123 },
                    { '日期': '1月6日', '访问用户': 7123 }
                ]
            },
            chartSettings: {
                type: this.typeArr[this.index],
                roseType: 'radius',
                radius: 300,
                offsetY: 400
            }
        }
    },
    methods: {
        changeType: function () {
            this.index++;
            if (this.index >= this.typeArr.length) { this.index = 0 }
            if (2 == this.index) {
                this.chartSettings = {
                    type: this.typeArr[this.index],
                    roseType: 'radius',
                    radius: 300,
                    offsetY: 400,
                }
            }
            else {this.chartSettings = { type: this.typeArr[this.index] }}
        }
    }
})

new Vue({ el: '#components-chat' });

Vue.component('user-talbe', {
    data() {
        return {
            tableData: [],
            pagesize:10,
            currentPage:1,
            totalPage:10
        }
    },
    mounted () {
        axios
            .get('/basicinfo/user')
            .then(response => (this.tableData = response.data))
    },
    template: '<div id="user-talbe">\n' +
    '    <template>\n' +
    '<div style="height: 80%;">\n' +
    '  <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">\n' +
    '    <el-table-column type="index" :index="indexMethod">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column prop="regDate" label="日期" width="180">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column prop="userName" label="姓名" width="180">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column prop="address" label="地址">\n' +
    '    </el-table-column>\n' +
    '  </el-table>\n' +
    '</div>\n' +
    '<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="prev, pager, next, jumper" :total="tableData.length">\n' +
    '</el-pagination>\n' +
    '</template>\n' +
    '</div>'
});

Vue.component('admin-talbe', {
    data() {
        return {
            tableData: [],
            pagesize:10,
            currentPage:1,
            totalPage:10
        }
    },
    mounted () {
        axios
            .get('/basicinfo/admin')
            .then(response => (this.tableData = response.data))
    },
    template: '<div id="admin-talbe">\n' +
    '    <template>\n' +
    '<div style="height: 80%;">\n' +
    '  <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">\n' +
    '    <el-table-column type="index" :index="indexMethod">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column prop="userName" label="姓名" width="180">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column prop="regDate" label="注册日期" width="180">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column prop="address" label="地址">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column prop="root" label="权限">\n' +
    '    </el-table-column>\n' +
    '  </el-table>\n' +
    '</div>\n' +
    '<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="prev, pager, next, jumper" :total="tableData.length">\n' +
    '</el-pagination>\n' +
    '</template>\n' +
    '</div>'
});

Vue.component('seller-talbe', {
    data() {
        return {
            almflag: {
                title: 'seller-talbe-title',
                content: 'seller-talbe-content',
                flag: false,
                name: '',
                address: '',
                id: ''
            },
            tableData5: [],
            pagesize:10,
            currentPage:1,
            totalPage:10,
            dialogVisible: false,
            tempIndex:1,
            form: {
                name: '',
                detail: '',
                tel: '',
                volume: '',
                address: '',
                score: '',
                id:'',
                category:''
            }
        }
    },
    mounted () {
    axios
        .get('/sellertable')
        .then(response => (this.tableData5 = response.data))
    },
    methods:{
        handleCurrentChange:function(currentPage){
            this.currentPage = currentPage;
        },
        deleteRow(index, rows) {
            var url = '/sellertable/' + this.tableData5[index].id;
            axios.delete(url);
            this.tableData5.splice(index, 1);
            rows = this.tableData5;
        },
        editRow(index) {
            this.tempIndex = index;
            this.form.name = this.tableData5[this.tempIndex].name;
            this.form.detail = this.tableData5[this.tempIndex].detail;
            this.form.tel = this.tableData5[this.tempIndex].tel;
            this.form.volume = this.tableData5[this.tempIndex].volume;
            this.form.address = this.tableData5[this.tempIndex].address;
            this.form.id = this.tableData5[this.tempIndex].id;
            this.form.score = this.tableData5[this.tempIndex].score;
            this.form.category = this.tableData5[this.tempIndex].category;
            this.dialogVisible = true;
        },
        saveRow(rows) {
            this.dialogVisible = false;
            this.tableData5[this.tempIndex].name = this.form.name;
            this.tableData5[this.tempIndex].detail = this.form.detail;
            this.tableData5[this.tempIndex].tel = this.form.tel;
            this.tableData5[this.tempIndex].volume = this.form.volume;
            this.tableData5[this.tempIndex].address = this.form.address;
            this.tableData5[this.tempIndex].id = this.form.id;
            this.tableData5[this.tempIndex].score = this.form.score;
            this.tableData5[this.tempIndex].category = this.form.category;
            rows.splice(this.tempIndex, 1, this.tableData5[this.tempIndex]);
            axios.put('/sellertable', this.tableData5[this.tempIndex]);
        },
        addGoods(index) {
            this.almflag.address = this.tableData5[index].address;
            this.almflag.name = this.tableData5[index].name;
            this.almflag.id = this.tableData5[index].id;
            this.$router.push({name: 'addGoods', params: { info: this.almflag }});
        }
    },
    template: '<div id="seller-talbe">\n' +
    '<template>\n' +
    '<div style="height: 80%;">\n' +
    '<el-scrollbar wrap-class="list" view-style="font-weight: bold;" view-class="view-box" :native="false">\n' +
    '  <el-table :data="tableData5.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">\n' +
    '    <el-table-column type="expand">\n' +
    '      <template    slot-scope="props">\n' +
    '        <el-form label-position="left" inline class="demo-table-expand">\n' +
    '          <el-form-item label="店铺名称">\n' +
    '            <span>{{ props.row.name }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="店铺介绍">\n' +
    '            <span>{{ props.row.detail }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="联系电话">\n' +
    '            <span>{{ props.row.tel }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="销售量">\n' +
    '            <span>{{ props.row.volume }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="店铺地址">\n' +
    '            <span>{{ props.row.address }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="店铺 ID">\n' +
    '            <span>{{ props.row.id }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="评分">\n' +
    '<el-rate v-model="props.row.score" disabled show-score text-color="#ff9900" score-template="{value}">\n' +
    '</el-rate>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="店铺分类">\n' +
    '            <span>{{ props.row.category }}</span>\n' +
    '          </el-form-item>\n' +
    '        </el-form>\n' +
    '      </template>\n' +
    '    </el-table-column>\n' +
    '    <el-table-column label="店铺 ID" prop="id">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column label="店铺名称" prop="name">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column label="店铺介绍" prop="detail">\n' +
    '    </el-table-column>\n' +
    '<el-table-column label="操作">\n' +
    '      <template slot-scope="scope">\n' +
    '        <el-button size="mini" @click="editRow(scope.$index)">编辑</el-button>\n' +
    '        <el-dialog title="修改店铺信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">\n' +
    '<el-form ref="form" :model="form" label-width="80px">\n' +
    '  <el-form-item label="店铺名称">\n' +
    '    <el-input v-model="form.name"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="店铺介绍">\n' +
    '    <el-input v-model="form.detail"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="联系电话">\n' +
    '    <el-input v-model="form.tel"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="销售量">\n' +
    '    <el-input v-model="form.volume"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="店铺地址">\n' +
    '    <el-input v-model="form.address"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="店铺 ID">\n' +
    '    <el-input v-model="form.id"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="评分">\n' +
    '    <el-input v-model="form.score"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="店铺分类">\n' +
    '    <el-select v-model="form.category" placeholder="请选分类">\n' +
    '      <el-option label="异国料理" value="异国料理"></el-option>\n' +
    '      <el-option label="快餐便当" value="快餐便当"></el-option>\n' +
    '      <el-option label="小吃夜宵" value="小吃夜宵"></el-option>\n' +
    '    </el-select>\n' +
    '  </el-form-item>\n' +
    '</el-form>\n' +
    '            <span slot="footer" class="dialog-footer">\n' +
    '               <el-button type="primary" @click="saveRow(tableData5)">确 定</el-button>\n' +
    '               <el-button @click="dialogVisible = false">取 消</el-button>\n' +
    '            </span>\n' +
    '        </el-dialog>\n' +
    '        <router-link to="/addseller">\n' +
    '            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">添加</el-button>\n' +
    '        </router-link>\n' +
    '            <el-button size="mini" @click="addGoods(scope.$index)">添加商品</el-button>\n' +
    '        <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, tableData5)">删除</el-button>\n' +
    '      </template>\n' +
    '    </el-table-column>\n' +
    '  </el-table>\n' +
    '</el-scrollbar>\n' +
    '</div>\n' +
    '<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="prev, pager, next, jumper" :total="tableData5.length">\n' +
    '</el-pagination>\n' +
    '</template>\n' +
    '</div>'
});

Vue.component('food-talbe', {
    data() {
        return {
            tableData: [],
            pagesize:10,
            currentPage:1,
            totalPage:10,
            dialogVisible: false,
            saveflag: false,
            tempIndex:1,
            form1: {},
            form: {
                id: '',
                foodName: '',
                foodDetail: '',
                foodClass: '',
                packCost: '',
                sendCost: '',
                shopName:'',
                shopAddress:'',
                shopId:'',
                volume:'',
                score:''
            }
        }
    },
    mounted () {
        axios
            .get('/foodtable')
            .then(response => (
                this.tableData = response.data
            ))
    },
    methods:{
        handleCurrentChange:function(currentPage){
            this.currentPage = currentPage;
        },
        deleteRow(index, rows) {
            var url = '/foodtable/' + this.tableData[index].id;
            axios.delete(url);
            this.tableData.splice(index, 1);
            rows = this.tableData;
        },
        editRow(index) {
            this.saveflag = true;
            if(this.saveflag) {
                this.tempIndex = index;
                this.form.id = this.tableData[this.tempIndex].id;
                this.form.foodName = this.tableData[this.tempIndex].foodName;
                this.form.foodDetail = this.tableData[this.tempIndex].foodDetail;
                this.form.foodClass = this.tableData[this.tempIndex].foodClass;
                this.form.packCost = this.tableData[this.tempIndex].packCost;
                this.form.sendCost = this.tableData[this.tempIndex].sendCost;
                this.form.shopName = this.tableData[this.tempIndex].shopName;
                this.form.shopAddress = this.tableData[this.tempIndex].shopAddress;
                this.form.shopId = this.tableData[this.tempIndex].shopId;
                this.form.volume = this.tableData[this.tempIndex].volume;
                this.form.score = this.tableData[this.tempIndex].score;
                this.dialogVisible = true;
                this.saveflag = false;
            }
        },
        saveRow(rows) {
            this.saveflag = true;
            if(this.saveflag) {
                this.dialogVisible = false;
                this.tableData[this.tempIndex].id = this.form.id;
                this.tableData[this.tempIndex].foodName = this.form.foodName;
                this.tableData[this.tempIndex].foodDetail = this.form.foodDetail;
                this.tableData[this.tempIndex].foodClass = this.form.foodClass;
                this.tableData[this.tempIndex].packCost = this.form.packCost;
                this.tableData[this.tempIndex].sendCost = this.form.sendCost;
                this.tableData[this.tempIndex].shopName = this.form.shopName;
                this.tableData[this.tempIndex].shopAddress = this.form.shopAddress;
                this.tableData[this.tempIndex].shopId = this.form.shopId;
                this.tableData[this.tempIndex].volume = this.form.volume;
                this.tableData[this.tempIndex].score = this.form.score;
                rows.splice(this.tempIndex, 1, this.tableData[this.tempIndex]);
                axios.put('/foodtable', this.tableData[this.tempIndex]);
                this.saveflag = false;
            }
        },
        addGoods(index) {
            this.almflag.address = this.tableData[index].address;
            this.almflag.name = this.tableData[index].name;
            this.almflag.id = this.tableData[index].id;
            this.$router.push({name: 'addGoods', params: { info: this.almflag }});
        }
    },
    template: '<div id="food-talbe">\n' +
    '<template>\n' +
    '<div style="height: 80%;">\n' +
    '<el-scrollbar wrap-class="list" view-style="font-weight: bold;" view-class="view-box" :native="false">\n' +
    '  <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">\n' +
    '    <el-table-column type="expand">\n' +
    '      <template    slot-scope="props">\n' +
    '        <el-form label-position="left" inline class="demo-table-expand">\n' +
    '          <el-form-item label="食品 ID">\n' +
    '            <span>{{ props.row.id }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="食品名称">\n' +
    '            <span>{{ props.row.foodName }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="食品介绍">\n' +
    '            <span>{{ props.row.foodDetail }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="食品分类">\n' +
    '            <span>{{ props.row.foodClass }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="包装费">\n' +
    '            <span>{{ props.row.packCost }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="派送费">\n' +
    '            <span>{{ props.row.sendCost }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="店铺名称">\n' +
    '            <span>{{ props.row.shopName }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="店铺地址">\n' +
    '            <span>{{ props.row.shopAddress }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="店铺 ID">\n' +
    '            <span>{{ props.row.shopId }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="评分">\n' +
    '<el-rate v-model="props.row.score" disabled show-score text-color="#ff9900" score-template="{value}">\n' +
    '</el-rate>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="销量">\n' +
    '            <span>{{ props.row.volume }}</span>\n' +
    '          </el-form-item>\n' +
    '        </el-form>\n' +
    '      </template>\n' +
    '    </el-table-column>\n' +
    '    <el-table-column label="食品 ID" prop="id">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column label="食品名称" prop="foodName">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column label="食品介绍" prop="foodDetail">\n' +
    '    </el-table-column>\n' +
    '<el-table-column label="操作">\n' +
    '      <template slot-scope="scope">\n' +
    '        <el-button size="mini" @click="editRow(scope.$index)">编辑</el-button>\n' +
    '        <el-dialog title="修改食品信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">\n' +
    '<el-form ref="form" :model="form" label-width="80px">\n' +
    '  <el-form-item label="食品名称">\n' +
    '    <el-input v-model="form.foodName"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="食品介绍">\n' +
    '    <el-input v-model="form.foodDetail"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="食品分类">\n' +
    '    <el-select v-model="form.foodClass" placeholder="请选分类">\n' +
    '      <el-option label="区域一" value="shanghai"></el-option>\n' +
    '      <el-option label="区域二" value="beijing"></el-option>\n' +
    '    </el-select>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="包装费">\n' +
    '    <el-input v-model="form.packCost"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="派送费">\n' +
    '    <el-input v-model="form.sendCost"></el-input>\n' +
    '  </el-form-item>\n' +
    '</el-form>\n' +
    '            <span slot="footer" class="dialog-footer">\n' +
    '               <el-button type="primary" @click="saveRow(tableData)">确 定</el-button>\n' +
    '               <el-button @click="dialogVisible = false">取 消</el-button>\n' +
    '            </span>\n' +
    '        </el-dialog>\n' +
    '        <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>\n' +
    '      </template>\n' +
    '    </el-table-column>\n' +
    '  </el-table>\n' +
    '</el-scrollbar>\n' +
    '</div>\n' +
    '<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="prev, pager, next, jumper" :total="tableData.length">\n' +
    '</el-pagination>\n' +
    '</template>\n' +
    '</div>'
});

Vue.component('order-talbe', {
    data() {
        return {
            tableData: [],
            pagesize:10,
            currentPage:1,
            totalPage:10,
            form: {
                id: '',
                price: '',
                status: '',
                orderName: '',
                orderAddress: '',
                shopAddress: '',
                shopName:'',
                shopId:''
            }
        }
    },
    mounted () {
        axios
            .get('/ordertable')
            .then(response => (
                this.tableData = response.data
            ))
    },
    template: '<div id="order-talbe">\n' +
    '<template>\n' +
    '<div style="height: 80%;">\n' +
    '<el-scrollbar wrap-class="list" view-style="font-weight: bold;" view-class="view-box" :native="false">\n' +
    '  <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">\n' +
    '    <el-table-column type="expand">\n' +
    '      <template    slot-scope="props">\n' +
    '        <el-form label-position="left" inline class="demo-table-expand">\n' +
    '          <el-form-item label="用户名">\n' +
    '            <span>{{ props.row.orderName }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="收货地址">\n' +
    '            <span>{{ props.row.orderAddress }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="店铺地址">\n' +
    '            <span>{{ props.row.shopAddress }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="店铺名称">\n' +
    '            <span>{{ props.row.shopName }}</span>\n' +
    '          </el-form-item>\n' +
    '          <el-form-item label="店铺ID">\n' +
    '            <span>{{ props.row.shopId }}</span>\n' +
    '          </el-form-item>\n' +
    '        </el-form>\n' +
    '      </template>\n' +
    '    </el-table-column>\n' +
    '    <el-table-column label="订单 ID" prop="id">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column label="订单价格" prop="price">\n' +
    '    </el-table-column>\n' +
    '    <el-table-column label="订单状态" prop="status">\n' +
    '    </el-table-column>\n' +
    '  </el-table>\n' +
    '</el-scrollbar>\n' +
    '</div>\n' +
    '<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="prev, pager, next, jumper" :total="tableData.length">\n' +
    '</el-pagination>\n' +
    '</template>\n' +
    '</div>'
});

new Vue({ el: '#components-table' });

Vue.component('elform', {
    data() {
        return {
            form: {
                name: '',
                detail: '',
                tel: '',
                volume: '',
                address: '',
                score: '0',
                category:'',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                format: ''
            }
        }
    },
    methods:{
        creatSeller() {
            axios.post('/sellertable', this.form);
        }
    },
    template: '<el-form ref="form" :model="form" label-width="80px" style="width: 1000px;">\n' +
    '  <el-form-item label="店铺名称">\n' +
    '    <el-input v-model="form.name"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="店铺介绍">\n' +
    '    <el-input v-model="form.detail"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="联系电话">\n' +
    '    <el-input v-model="form.tel"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="销售量">\n' +
    '    <el-input v-model="form.volume"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="店铺地址">\n' +
    '    <el-input v-model="form.address"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="店铺分类">\n' +
    '    <el-select v-model="form.category" placeholder="请选分类">\n' +
    '      <el-option label="异国料理" value="异国料理"></el-option>\n' +
    '      <el-option label="快餐便当" value="快餐便当"></el-option>\n' +
    '      <el-option label="小吃夜宵" value="小吃夜宵"></el-option>\n' +
    '    </el-select>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="活动时间">\n' +
    '    <el-col :span="11">\n' +
    '      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>\n' +
    '    </el-col>\n' +
    '    <el-col class="line" :span="2">-</el-col>\n' +
    '    <el-col :span="11">\n' +
    '      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>\n' +
    '    </el-col>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="即时配送">\n' +
    '    <el-switch v-model="form.delivery"></el-switch>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="活动性质">\n' +
    '    <el-checkbox-group v-model="form.type">\n' +
    '      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>\n' +
    '      <el-checkbox label="地推活动" name="type"></el-checkbox>\n' +
    '      <el-checkbox label="线下主题活动" name="type"></el-checkbox>\n' +
    '      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>\n' +
    '    </el-checkbox-group>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="特殊资源">\n' +
    '    <el-radio-group v-model="form.resource">\n' +
    '      <el-radio label="线上品牌商赞助"></el-radio>\n' +
    '      <el-radio label="线下场地免费"></el-radio>\n' +
    '    </el-radio-group>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="活动形式">\n' +
    '    <el-input type="textarea" v-model="form.format"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item>\n' +
    '    <el-button type="primary" @click="creatSeller">立即创建</el-button>\n' +
    '    <router-link to="/sellertable">\n' +
    '        <el-button>取消</el-button>\n' +
    '    </router-link>\n' +
    '  </el-form-item>\n' +
    '</el-form>'
});

new Vue({ el: '#components-el-form' });

Vue.component('tag-comp', {
    data() {
        return {
            tags1: [
                {message1: '当日数据'},
                {message1: '新增用户'},
                {message1: '新增订单'},
                {message1: '新增管理员'}
            ],
            tags2: [
                {message2: '总数据'},
                {message2: '注册用户'},
                {message2: '订单数量'},
                {message2: '管理员'}
            ]
        }
    },
    template:"<div id=\"tag\" style=\"position: relative;top: 5px;text-align:center;\">\n" +
    "<div><el-badge v-for=\"tag1 in tags1\" style=\"margin:5px;\">{{tag1.message1}}</el-badge></div>\n" +
    "<div><el-badge v-for=\"tag2 in tags2\" style=\"margin:5px;\">{{tag2.message2}}</el-badge></div>\n" +
    "</div>"
});

new Vue({ el: '#tag-components' });

Vue.component('food-edit', {
    data() {
        return {
            currentDate: new Date()
        };
    },
    template:
    '<div id="food-edit">\n' +
    '    <el-row>\n' +
    '        <el-col :span="4" v-for="(o, index) in 1" :key="o" :offset="index > 1 ? 2 : 2">\n' +
    '            <el-card :body-style="{ padding: \'0px\' }">\n' +
    '                <img src="img/1.jpg" class="image">\n' +
    '                <div style="padding: 14px;">\n' +
    '                    <span>卡布奇诺</span>\n' +
    '                    <div class="bottom clearfix">\n' +
    '                        <time class="time">{{ currentDate }}</time>\n' +
    '                        <el-button type="text" class="button">编辑食品</el-button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </el-card>\n' +
    '        </el-col>\n' +
    '        <el-col :span="3" v-for="(o, index) in 1" :key="o" :offset="index > 1 ? 2 : 2">\n' +
    '            <el-card :body-style="{ padding: \'0px\' }">\n' +
    '                <img src="img/2.jpg" class="image">\n' +
    '                <div style="padding: 14px;">\n' +
    '                    <span>天礁皇堡</span>\n' +
    '                    <div class="bottom clearfix">\n' +
    '                        <time class="time">{{ currentDate }}</time>\n' +
    '                        <el-button type="text" class="button">编辑食品</el-button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </el-card>\n' +
    '        </el-col>\n' +
    '        <el-col :span="4" v-for="(o, index) in 1" :key="o" :offset="index > 1 ? 2 : 2">\n' +
    '            <el-card :body-style="{ padding: \'0px\' }">\n' +
    '                <img src="img/3.jpg" class="image">\n' +
    '                <div style="padding: 14px;">\n' +
    '                    <span>小笼包</span>\n' +
    '                    <div class="bottom clearfix">\n' +
    '                        <time class="time">{{ currentDate }}</time>\n' +
    '                        <el-button type="text" class="button">编辑食品</el-button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </el-card>\n' +
    '        </el-col>\n' +
    '        <el-col :span="4" v-for="(o, index) in 1" :key="o" :offset="index > 1 ? 2 : 2">\n' +
    '            <el-card :body-style="{ padding: \'0px\' }">\n' +
    '                <img src="img/4.jpg" class="image">\n' +
    '                <div style="padding: 14px;">\n' +
    '                    <span>钟水饺</span>\n' +
    '                    <div class="bottom clearfix">\n' +
    '                        <time class="time">{{ currentDate }}</time>\n' +
    '                        <el-button type="text" class="button">编辑食品</el-button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </el-card>\n' +
    '        </el-col>\n' +
    '    </el-row>\n' +
    '    <el-row style="position: relative;top: 30px;">\n' +
    '        <el-col :span="4" v-for="(o, index) in 1" :key="o" :offset="index > 1 ? 2 : 2">\n' +
    '            <el-card :body-style="{ padding: \'0px\' }">\n' +
    '                <img src="img/5.png" class="image">\n' +
    '                <div style="padding: 14px;">\n' +
    '                    <span>珍珠奶茶</span>\n' +
    '                    <div class="bottom clearfix">\n' +
    '                        <time class="time">{{ currentDate }}</time>\n' +
    '                        <el-button type="text" class="button">编辑食品</el-button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </el-card>\n' +
    '        </el-col>\n' +
    '        <el-col :span="4" v-for="(o, index) in 1" :key="o" :offset="index > 1 ? 2 : 2">\n' +
    '            <el-card :body-style="{ padding: \'0px\' }">\n' +
    '                <img src="img/6.png" class="image">\n' +
    '                <div style="padding: 14px;">\n' +
    '                    <span>炸鸡块</span>\n' +
    '                    <div class="bottom clearfix">\n' +
    '                        <time class="time">{{ currentDate }}</time>\n' +
    '                        <el-button type="text" class="button">编辑食品</el-button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </el-card>\n' +
    '        </el-col>\n' +
    '        <el-col :span="4" v-for="(o, index) in 1" :key="o" :offset="index > 1 ? 2 : 2">\n' +
    '            <el-card :body-style="{ padding: \'0px\' }">\n' +
    '                <img src="img/7.jpg" class="image">\n' +
    '                <div style="padding: 14px;">\n' +
    '                    <span>蔬菜批萨</span>\n' +
    '                    <div class="bottom clearfix">\n' +
    '                        <time class="time">{{ currentDate }}</time>\n' +
    '                        <el-button type="text" class="button">编辑食品</el-button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </el-card>\n' +
    '        </el-col>\n' +
    '        <el-col :span="3" v-for="(o, index) in 1" :key="o" :offset="index > 1 ? 2 : 2">\n' +
    '            <el-card :body-style="{ padding: \'0px\' }">\n' +
    '                <img src="img/8.jpg" class="image">\n' +
    '                <div style="padding: 14px;">\n' +
    '                    <span>意大利面</span>\n' +
    '                    <div class="bottom clearfix">\n' +
    '                        <time class="time">{{ currentDate }}</time>\n' +
    '                        <el-button type="text" class="button">编辑食品</el-button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </el-card>\n' +
    '        </el-col>\n' +
    '    </el-row>\n' +
    '</div>'
});

new Vue({ el: '#edit-components' });

Vue.component('about-author', {
    data() {
        return {
            activeNames: ['1']
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    },
    template:
    '<div id="about-author" style="height: 800px;">\n' +
    '    <el-collapse v-model="activeNames" @change="handleChange">\n' +
    '        <el-collapse-item title="About" name="1">\n' +
    '            <div>本项是目基于vue + element-ui 构建的后台管理系统</div>\n' +
    '            <div>具有真实的注册、登陆、管理数据、权限验证等功能。</div>\n' +
    '        </el-collapse-item>\n' +
    '        <el-collapse-item title="说明" name="2">\n' +
    '            <div>如果对您对此项目有兴趣，可点击 "Star" 或“Fork”本项目</div>\n' +
    '            <div>如您在使用本项目中存在任何疑问，请于本项目页面留下评论或直接联系本人</div>\n' +
    '            <div>本项目开发环境：</div>\n' +
    '            <div>IntelliJ IDEA 2017.3.5 (Ultimate Edition)</div>\n' +
    '            <div>Build #IU-173.4674.33, built on March 6, 2018</div>\n' +
    '            <div>Licensed to idea</div>\n' +
    '            <div>You have a perpetual fallback license for this version</div>\n' +
    '            <div>Subscription is active until December 31, 2099</div>\n' +
    '            <div>JRE: 1.8.0_152-release-1024-b15 amd64</div>\n' +
    '            <div>JVM: OpenJDK 64-Bit Server VM by JetBrains s.r.o</div>\n' +
    '            <div>Windows 7 6.1</div>\n' +
    '        </el-collapse-item>\n' +
    '        <el-collapse-item title="功能列表" name="3">\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 一致性 Consistency <i class="header-icon el-icon-success"></i></div>\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 登陆/注销 <i class="header-icon el-icon-success"></i></div>\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 添加商铺 <i class="header-icon el-icon-success"></i></div>\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 添加商品 <i class="header-icon el-icon-success"></i></div>\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 数据展示 <i class="header-icon el-icon-success"></i></div>\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 管理用户 <i class="header-icon el-icon-success"></i></div>\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 管理商铺 <i class="header-icon el-icon-success"></i></div>\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 食品管理 <i class="header-icon el-icon-success"></i></div>\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 权限验证 <i class="header-icon el-icon-success"></i></div>\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 管理员设置 <i class="header-icon el-icon-success"></i></div>\n' +
    '            <div>    <i class="header-icon el-icon-arrow-right"></i> 图表 <i class="header-icon el-icon-success"></i></div>\n' +
    '        </el-collapse-item>\n' +
    '        <el-collapse-item title="联系作者" name="4">\n' +
    '            <img src="img/code.png">\n' +
    '        </el-collapse-item>\n' +
    '    </el-collapse>\n' +
    '</div>'
});

new Vue({ el: '#about-components' });

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Tag = { template: '<div id="tag-components">\n' +
    '    <tag-comp></tag-comp>\n' +
    '</div>' };
const Chat = { template: '<div id="components-chat">\n' +
    '  <chat-comp></chat-comp>\n' +
    '</div>' };
const UserChat = { template: '<div id="components-chat">\n' +
    '  <user-chat></user-chat>\n' +
    '</div>' };
const UserTable = { template:'<div id="components-table">\n' +
    '    <user-talbe></user-talbe>\n' +
    '</div>'};
const SellerTable = { template:'<div id="components-table">\n' +
    '    <seller-talbe></seller-talbe>\n' +
    '</div>'};
const FoodTable = { template:'<div id="components-table">\n' +
    '    <food-talbe></food-talbe>\n' +
    '</div>'};
const OrderTable = { template:'<div id="components-table">\n' +
    '    <order-talbe></order-talbe>\n' +
    '</div>'};
const AdminTable = { template:'<div id="components-table">\n' +
    '    <admin-talbe></admin-talbe>\n' +
    '</div>'};
const AddSeller = { template: '<div id="components-el-form">\n' +
    '    <elform></elform>\n' +
    '</div>' };
const  AddGoods = {
    props: ['info'],
    data() {
        return {
            form: {
                foodName: '',
                foodDetail: '',
                foodClass: '',
                date1: '',
                date2: '',
                delivery: false,
                packCost: '',
                sendCost: '',
                shopName: '',
                shopAddress: '',
                shopId: ''
            }
        }
    },
    methods:{
        creatSeller() {
            axios.post('/foodtable', this.form);
        }
    },
    mounted () {
        if(this.info.flag) {
            this.form.shopName = '';
            this.form.shopAddress = '';
            this.$confirm(this.info.content, this.info.title, {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '请选择商家信息'
                });
                this.$router.push('/sellertable');
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '请填写商品信息'
                });
            });
        }else {
            this.form.shopName = this.info.name;
            this.form.shopAddress = this.info.address;
            this.form.shopId = this.info.id;
        }
    },
    template: '<el-form ref="form" :model="form" label-width="80px" style="width: 1000px;">\n' +
    '  <el-form-item label="食品名称">\n' +
    '    <el-input v-model="form.foodName"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="食品介绍">\n' +
    '    <el-input v-model="form.foodDetail"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="食品分类">\n' +
    '    <el-select v-model="form.foodClass" placeholder="请选择活动区域">\n' +
    '      <el-option label="区域一" value="shanghai"></el-option>\n' +
    '      <el-option label="区域二" value="beijing"></el-option>\n' +
    '    </el-select>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="上架时间">\n' +
    '    <el-col :span="11">\n' +
    '      <el-time-picker type="fixed-time" placeholder="开始时间" v-model="form.date1" style="width: 100%;"></el-time-picker>\n' +
    '    </el-col>\n' +
    '    <el-col class="line" :span="2">-</el-col>\n' +
    '    <el-col :span="11">\n' +
    '      <el-time-picker type="fixed-time" placeholder="结束时间" v-model="form.date2" style="width: 100%;"></el-time-picker>\n' +
    '    </el-col>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="即时配送">\n' +
    '    <el-switch v-model="form.delivery"></el-switch>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="包装费">\n' +
    '    <el-input-number v-model="form.packCost" :step="1"></el-input-number>\n'+
    '  </el-form-item>\n' +
    '  <el-form-item label="派送费">\n' +
    '    <el-input-number v-model="form.sendCost" :step="1"></el-input-number>\n'+
    '  </el-form-item>\n' +
    '  <el-form-item label="餐馆名称">\n' +
    '    <el-input v-model="form.shopName"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item label="餐馆地址">\n' +
    '    <el-input v-model="form.shopAddress"></el-input>\n' +
    '  </el-form-item>\n' +
    '  <el-form-item>\n' +
    '    <el-button type="primary" @click="creatSeller">立即创建</el-button>\n' +
    '    <router-link to="/sellertable">\n' +
    '       <el-button>取消</el-button>\n' +
    '    </router-link>\n' +
    '  </el-form-item>\n' +
    '</el-form>'
};
const FoodEdit = { template: '<div id="edit-components">\n' +
    '    <food-edit></food-edit>\n' +
    '</div>' };
const AboutAuthor = { template: '<div id="about-components">\n' +
    '    <about-author></about-author>\n' +
    '</div>' };
const Path0 = { template: '<el-breadcrumb-item>数据管理</el-breadcrumb-item>' };
const Path1 = { template: '<el-breadcrumb-item>用户列表</el-breadcrumb-item>' };
const Path2 = { template: '<el-breadcrumb-item>商家列表</el-breadcrumb-item>' };
const Path3 = { template: '<el-breadcrumb-item>食品列表</el-breadcrumb-item>' };
const Path4 = { template: '<el-breadcrumb-item>订单列表</el-breadcrumb-item>' };
const Path5 = { template: '<el-breadcrumb-item>管理员列表</el-breadcrumb-item>' };
const Path6 = { template: '<el-breadcrumb-item>添加数据</el-breadcrumb-item>' };
const Path7 = { template: '<el-breadcrumb-item>添加商铺</el-breadcrumb-item>' };
const Path8 = { template: '<el-breadcrumb-item>添加商品</el-breadcrumb-item>' };
const Path9 = { template: '<el-breadcrumb-item>图表</el-breadcrumb-item>' };
const Path10 = { template: '<el-breadcrumb-item>编辑食品</el-breadcrumb-item>' };
const Path11 = { template: '<el-breadcrumb-item>设置</el-breadcrumb-item>' };
const Path12 = { template: '<el-breadcrumb-item>说明</el-breadcrumb-item>' };


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes: [
        {
            path: '/homepage',
            components: {
                a: Tag,
                b: Chat
            }
        },
        {
            path: '/usertable',
            components: {
                path0: Path0,
                c: UserTable,
                path1: Path1
            }
        },
        {
            path: '/sellertable',
            components: {
                path0: Path0,
                d: SellerTable,
                path2: Path2
            }
        },
        {
            path: '/foodtable',
            components: {
                path0: Path0,
                e: FoodTable,
                path3: Path3
            }
        },
        {
            path: '/ordertable',
            components: {
                path0: Path0,
                h: OrderTable,
                path4: Path4
            }
        },
        {
            path: '/addseller',
            components: {
                path6:Path6,
                path7:Path7,
                f: AddSeller
            }
        },
        {
            path: '/addGoods/:info',
            name: 'addGoods',
            components: {
                path6:Path6,
                path8:Path8,
                g: AddGoods
            },
            props: { g: true }
        },
        {
            path: '/admintable',
            components: {
                path0: Path0,
                i: AdminTable,
                path5: Path5
            }
        },
        {
            path: '/userchat',
            components: {
                path9:Path9,
                j: UserChat
            }
        },
        {
            path: '/foodedit',
            components: {
                path10:Path10,
                k: FoodEdit
            }
        },
        {
            path: '/setting',
            components: {
                path11:Path11
            }
        },
        {
            path: '/aboutauthor',
            components: {
                path12:Path12,
                l: AboutAuthor
            }
        }
    ]
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
var rout = new Vue({
    el: '#rout',
    data() {
        return {
            msg: {
                title: '提示',
                content: '添加食品需要选择一个商铺，现在就去选择商铺吗？',
                flag: true,
                name: 'name',
                address: 'address',
                id: ''
        }
        }
    },
    router
});

// 现在，应用已经启动了！