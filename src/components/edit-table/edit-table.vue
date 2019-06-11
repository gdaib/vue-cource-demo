<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from "clonedeep";
export default {
  name: "EditTable",
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
      insideColumns: [],
      edittingId: "",
      edittingContent: ""
    };
  },
  watch: {
    columns() {
      this.handleColumns();
    }
  },
  methods: {
    handleInput(newValue) {
      this.edittingContent = newValue;
    },
    handleClick({ row, index, column }) {
      if (this.edittingId === `${column.key}_${index}`) {
        let tableData = clonedeep(this.value);
        table[index][column.key] = this.edittingContent;
        this.$emit("input", tableData);
        this.$emit("on-edit", {
          row,
          index,
          column,
          newValue: this.edittingContent
        });
        this.edittingId = "";
        this.edittingContent = "";
      } else {
        this.edittingId = `${column.key}_${index}`;
      }
    },
    handleColumns() {
      const insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h,
          ({ row, index, column }) => {
            const isEditting = this.edittingId === `${column.key}_${index}`;
            return (
              <div>
                {isEditting ? (
                  <i-input
                    value={row[column.key]}
                    style="width: 50px;"
                    on-input={this.handleInput}
                  />
                ) : (
                  <span>{row[column.key]}</span>
                )}
                <i-button
                  on-click={this.handleClick.bind(this, { row, index, column })}
                >
                  {isEditting ? "保存" : "编辑"}
                </i-button>
              </div>
            );
          });
          return item;
        } else {
          return item;
        }
      });
    },
    mounted() {
      this.handleColumns();
    }
  }
};
</script>

<style>
</style>
