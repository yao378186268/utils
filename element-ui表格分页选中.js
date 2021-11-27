<el-table :data="tableData" ref="table" @selection-change="handleSelectionChange">
     <el-table-column type="selection"></el-table-column>
     <el-table-column prop="personName" label="客户名称"></el-table-column>
     <el-table-column prop="telphone" label="手机号"></el-table-column>
     <el-table-column prop="idNo" label="身份证号"></el-table-column>
     <el-table-column prop="linkTypes" label="客户身份"></el-table-column>
</el-table>
<el-pagination :page-size="pagination.pageSize" @current-change="currentChange"
                         :current-page="pagination.pageNumber"
                         :page-sizes="pagination.pageSizes"
                         :total="pagination.totalRows"
                         @size-change='sizeChange'>
</el-pagination>

data () {
   return {
      multipleSelectionAll: [],   // 所有选中的数据包含跨页数据
      multipleSelection: [],   // 当前页选中的数据
　　   idKey: 'personId', // 标识列表数据中每一行的唯一键的名称(需要按自己的数据改一下)
      tableData: [] // 表格数据
　　　 // 此处省略pagination的定义
   }  
}

methods : {
           // 设置选中的方法
           setSelectRow() {
                if (!this.multipleSelectionAll || this.multipleSelectionAll.length <= 0) {
                    return;
                }
                // 标识当前行的唯一键的名称
                let idKey = this.idKey;
                let selectAllIds = [];
                let that = this;
                this.multipleSelectionAll.forEach(row=>{
                    selectAllIds.push(row[idKey]);
                })
                this.$refs.table.clearSelection();
                for(var i = 0; i < this.tableData.length; i++) {                    
                    if (selectAllIds.indexOf(this.tableData[i][idKey]) >= 0) {
                        // 设置选中，记住table组件需要使用ref="table"
                        this.$refs.table.toggleRowSelection(this.tableData[i], true);
                    }
                }
            } ,
            // 记忆选择核心方法
            changePageCoreRecordData () {
                // 标识当前行的唯一键的名称
                let idKey = this.idKey;
                let that = this;
                // 如果总记忆中还没有选择的数据，那么就直接取当前页选中的数据，不需要后面一系列计算
                if (this.multipleSelectionAll.length <= 0) {
                    this.multipleSelectionAll = this.multipleSelection;
                    return;
                }
                // 总选择里面的key集合
                let selectAllIds = [];
                this.multipleSelectionAll.forEach(row=>{
                    selectAllIds.push(row[idKey]);
                })
                let selectIds = []
                // 获取当前页选中的id
                this.multipleSelection.forEach(row=>{
                    selectIds.push(row[idKey]);
                    // 如果总选择里面不包含当前页选中的数据，那么就加入到总选择集合里
                    if (selectAllIds.indexOf(row[idKey]) < 0) {
                        that.multipleSelectionAll.push(row);
                    }
                })
                let noSelectIds = [];
                // 得到当前页没有选中的id
                this.tableData.forEach(row=>{
                    if (selectIds.indexOf(row[idKey]) < 0) {
                        noSelectIds.push(row[idKey]);
                    }
                })
                noSelectIds.forEach(id=>{
                    if (selectAllIds.indexOf(id) >= 0) {
                        for(let i = 0; i< that.multipleSelectionAll.length; i ++) {
                            if (that.multipleSelectionAll[i][idKey] == id) {
                                // 如果总选择中有未被选中的，那么就删除这条
                                that.multipleSelectionAll.splice(i, 1);
                                break;
                            }
                        }
                    }
                })
            },
            currentChange(val){
                // 改变页的时候调用一次
                this.changePageCoreRecordData();
　　　　　　　　　this.pagination.pageNumber = val;
　　　　　　　　　this.query();
 　　　　　　}, sizeChange(val){ // 改变每页显示条数的时候调用一次 
　　　　　　　　　this.changePageCoreRecordData();
　　　　　　　　　this.pagination.pageSize = val;
　　　　　　　　　this.query();
            }, 
            handleSelectionChange (val) {
                // table组件选中事件,记得加上@selection-change="handleSelectionChange"
                this.multipleSelection = val;
            },
            query () {
                  // 分页查询数据方法，在成功返回数据方法里调用setSelectRow方法，使每次分页查询都能勾选中
                $.ajax({...,
                    success:(res)=>{
                        ......
                        setTimeout(()=>{
                            this.setSelectRow();
                        }, 200)
                    }
                })
            }, 
　　　　　　　// 得到选中的所有数据
            getAllSelectionData () {
　　　　　　　　　  // 再执行一次记忆勾选数据匹配，目的是为了在当前页操作勾选后直接获取选中数据
　　　　　　　　　　this.changePageCoreRecordData();
　　　　　　　　　console.log(this.multipleSelectionAll)
            }
}



如果你的是自定义组件dialog弹窗里面的表格选择，如果想每次打开想选中，那么就直接在props加一个值，然后加一个watch
props: [ "selectData"],
watch: {
    'selectData' (val) {
        this.multipleSelectionAll = val;
        }
    },