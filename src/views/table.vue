<template>
  <div class="edit-table-page">
    <edit-table :columns="columns" v-model></edit-table>
  </div>
</template>

<script>
import { getTableData } from "@/api/data";
import EditTable from "@/components/edit-table";

export default {
  name: "EditTablePage",
  components: {
    EditTable
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
      console.log(row, index, column, newValue);
    }
  },
  mounted() {
    getTableData().then(res => {
      this.tableData = res;
    });
  }
};
</script>

<style>
</style>
