<template>
  <div class="edit-table-page">
    <!-- <edit-table :columns="columns" v-model="tableData" @on-edit="handlEdit"></edit-table> -->
    <edit-table-mul :columns="columns" v-model="tableData" @on-edit="handlEdit"></edit-table-mul>
  </div>
</template>

<script>
import { getTableData } from "@/api/data";
import EditTable from "@/components/edit-table/";
import EditTableMul from "@/components/edit-table-mul/";

export default {
  name: "EditTablePage",
  components: {
    EditTable,
    EditTableMul
  },
  data() {
    return {
      columns: [
        { key: "name", title: "姓名" },
        { key: "age", title: "年龄", editable: true },
        { key: "email", title: "邮箱", editable: true }
      ],
      tableData: []
    };
  },
  methods: {
    handlEdit({ row, index, column, newValue }) {
      // console.log(row, index, column, newValue);
      console.log(column)
    }
  },
  mounted() {
    this.tableData = [
      {
        name: "cjff",
        age: 20,
        email: "865553742@qq.com"
      },
      {
        name: "cjff2",
        age: 22,
        email: "865553744@qq.com"
      }
    ];
  }
};
</script>

<style>
</style>
