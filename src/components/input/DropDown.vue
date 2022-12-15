<template>
  <div class="dropdown_container" :tabindex="tabindex" @blur="open = false">
    <div class="selected" @click="open = !open">
      {{ selected }}
    </div>
     <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    color: { type: String , required: false , default: 'indigo' },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
  computed:{
    focus__border(){
      return {
        "background-color" : this.color
      }
    }
  }
};
</script>

<style>



.dropdown_container {
  margin:auto;
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
 }

.dropdown_container .selected {
  background-color: transparent;
  border-bottom: 1px solid #555;
  color: rgb(0, 0, 0);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.dropdown_container .selected.open {
  border-bottom: 1px solid #555;
  border-radius: 6px 6px 0px 0px; 
}

.dropdown_container .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #555 transparent transparent transparent;
}

.dropdown_container .items {
  color: rgb(0, 0, 0);
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #000000;
  border-left: 1px solid #000000;
  border-bottom: 1px solid #000000;
  position: absolute;
  background-color: #bf9595;
  left: 0;
  right: 0;
  z-index: 1;
}

.dropdown_container .items div {
  color: rgb(0, 0, 0);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.dropdown_container .items div:hover {
  color: rgb(255, 255, 255);
  background-color: #555;
}

.selectHide {
  display: none;
}



</style>