<template>
  <div class="drag-container" v-drag-and-drop:options="options">
    <div class="drag-list">
      <template v-for="group in groups">
      <div class="drag-column" :key="group.id" 
      :style="{'background-color':group.backgroundColor}">
        <span class="drag-column-header">
          <h2>{{ group.name }}</h2>
        </span>
        <vue-draggable-group
          v-model="group.items"
          :groups="groups"
          :data-id="group.id"
          @change="onGroupsChange"
        >
          <div class="drag-inner-list" :data-id="group.id">
            <div class="drag-item" v-for="item in group.items" :key="item.id" :data-id="item.id">
              <div class="drag-item-text">{{ item.name }}</div>
            </div>
          </div>
        </vue-draggable-group>
      </div>
      </template>
    </div>
  </div>
</template>

<script>
//https://vivify-ideas.github.io/vue-draggable/#setup
import { VueDraggableDirective } from 'vue-draggable'
import DemoData from '@/demodata'
import { Component, Vue } from 'vue-property-decorator';

  const props = Vue.extend({
    directives: {
      dragAndDrop: VueDraggableDirective
    },
  })

@Component({
  })
export default class kanbanCard extends props {
  data() {
    return {
      groups:DemoData.getKanbanGroups,
      options: {
        dropzoneSelector: ".drag-inner-list",
        draggableSelector: ".drag-item",
        onDrop(event) {
          console.log("On drop");
          console.log(event.droptarget.getAttribute("data-id"));
          console.log(event.items[0].getAttribute("data-id"));
          
        },
         onDragstart(event) {
          console.log('Drag start');
          console.log(event.items[0].parentElement.getAttribute("data-id"));
          //console.log(event.droptarget.getAttribute("data-id"));
          console.log(event.items[0].getAttribute("data-id"));
          // if (!event.droptarget) {
          //   console.log('Drag end');
          // }
        }        
      }
    };
  }
  onGroupsChange(e) {
    console.log({ e });
    console.log('Group changed');
  }
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.drag-container {
  box-sizing: border-box;
  max-width: 1000px;
  margin: 20px auto;

  background: white;
  color: black;
  font-family: "Roboto Mono", serif;
  font-weight: 300;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

.drag-list {
  display: flex;

  @media (max-width: 1000px) {
    display: block;
  }
}

.drag-column {
  flex: 1;
  margin: 0px;
  position: relative;
  background: rgba(black, 0.2);
  overflow: hidden;

  @media (max-width: 690px) {
    margin-bottom: 30px;
  }
}

.drag-column-header {
  display: flex;
  align-items:flex-start;
  justify-content:center;
  padding: 10px;
  user-select: none;
}

.drag-column-header~h1 {
    font-size: 0.6rem;
    margin: 0;
    text-transform: uppercase;
    text-align: justify;
    font-weight: 600;
}

.drag-inner-list {
  height: 85vh;
  overflow: auto;
}

.drag-item {
  border: 2px solid black;
  border-radius: 20px;
  background-color:#5cc1a6;
  padding: 5px;
  margin: 10px;
  height: 100px;
  background: rgba(black, 0.4);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

/* items grabbed state */
.drag-item[aria-grabbed="true"] {
  background: #c5cb0c;
  color: #a72e2e;
}

.drag-item-text {
  font-size: 1rem;
  padding-left: 1rem;
  padding-top: 1rem;
}

.drag-header-more {
  cursor: pointer;
}

@keyframes nodeInserted {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 0.8;
  }
}

.item-dropzone-area {
  border-radius:20px;
  height: 6rem;
  background: rgb(88, 88, 88);
  opacity: 0.8;
  animation-duration: 0.5s;
  animation-name: nodeInserted;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}
</style>
