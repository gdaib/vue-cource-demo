<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from "clonedeep";
export default {
  name: "EditTableMul",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      insideData: [],
      insideColumns: [],
      edittingId: "",
      edittingContent: ""
    };
  },
  watch: {
    columns() {
      this.handleColumns();
    },
    value() {
      this.handleColumns();
    }
  },
  methods: {
    handleInput(newValue) {
      this.edittingContent = newValue;
    },
    handleClick({ row, index, column }) {
      // this.insideData[index].edittingKeyArr ?
      // let tableData = clonedeep(this.value);
      let keyIndex = this.insideData[index].edittingKeyArr
        ? this.insideData[index].edittingKeyArr.indexOf(column.key)
        : -1;
      let rowObj = this.insideData[index];

      if (keyIndex > -1) {
        rowObj.edittingKeyArr.splice(keyIndex, 1);
        this.insideData.splice(index, 1, rowObj);
        this.$emit("input", this.insideData);
        this.$emit("on-edit", {
          row,
          index,
          column,
          newValue: this.insideData[index][column.key]
        });
      } else {
        // 取当前行数据，创建一个 key 数组，key数组有当前key就是一个编辑状态
        let rowObj = this.insideData[index];
        rowObj.edittingKeyArr = rowObj.edittingKeyArr
          ? [...rowObj.edittingKeyArr, column.key]
          : [column.key];
        this.insideData.splice(index, 1, rowObj);
      }
    },
    handleColumns() {
      this.insideData = clonedeep(this.value);
      this.insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            const keyArr = this.insideData[index]
              ? this.insideData[index].edittingKeyArr
              : [];
            const isEdit = keyArr && keyArr.indexOf(column.key) > -1;
            return (
              <div>
                {isEdit ? (
                  <i-input
                    value={row[column.key]}
                    style="width: 50px;"
                    on-input={this.handleInput}
                  />
                ) : (
                  <span>{row[column.key]}</span>
                )}
                <i-button
                  type="text"
                  on-click={this.handleClick.bind(this, { row, index, column })}
                >
                  {isEdit ? "保存" : "编辑"}
                </i-button>
              </div>
            );
          };
          return item;
        } else {
          return item;
        }
      });
    }
  },
  mounted() {
    this.handleColumns();
  }
};
</script>

<style>
</style>
