<template>

  <!-- block -->
  <component
    :is="link ? 'router-link' : 'div'"
    :class="{
      'block-bordered': bordered,
      'block-rounded': rounded,
      'block-themed': themed,
      'block-transparent': transparent,
      'block-shadow': shadow,
      'block-mode-loading': loading,
      'block-link-shadow': linkShadow,
      'block-link-pop': linkPop,
      'block-link-rotate': linkRotate
    }"
    :to="link"
    class="block"
  >
    <ul
      v-if="tabs"
      :class="{
        'nav-tabs-block': !tabsAlt,
        'nav-tabs-alt': tabsAlt,
        'justify-content-end': tabsInverse,
      }"
      class="nav nav-tabs"
    >
      <li
        v-if="tabsInverse"
        class="nav-item mr-auto"
      >
        <slot name="options" />
      </li>
      <li
        v-for="tab in tabsMenu"
        :key="tab"
        class="nav-item"
      >
        <a
          :class="{ active: activeTab === tab }"
          class="nav-link"
          href="#"
          @click="activeTab = tab"
        >
          {{ tabs[tab] }}
        </a>
      </li>
      <li
        v-if="!tabsInverse"
        class="nav-item ml-auto"
      >
        <slot name="options" />
      </li>
    </ul>

    <!-- header -->
    <div
      v-if="$slots.header || title"
      :class="headerClass"
      :style="headerStyle"
      class="block-header"
    >
      <slot name="header" />
      <h3
        v-if="title"
        class="block-title"
      >
        <slot name="header-icon" /> {{ title }}
      </h3>
      <div class="block-options">
        <slot name="options" />
      </div>
    </div>

    <!-- image -->
    <div
      v-if="$slots.image"
      class="block-content p-0"
    >
      <slot name="image" />
    </div>

    <!-- content -->
    <div
      :class="[{'tab-content': tabs}, contentClass]"
      class="block-content"
    >
      <template v-if="tabs">
        <div
          v-for="tabName in tabsMenu"
          :key="tabName"
          :class="{ active: activeTab === tabName}"
          class="tab-pane"
        >
          <slot :name="`tab-${tabName}`" />
        </div>

      </template>
      <slot
        v-else
        name="content"
      />
    </div>

    <!-- footer -->
    <div
      v-if="footer"
      :class="footerClass"
      class="block-content"
    >
      <slot name="footer" />
    </div>

  </component>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },

    footerClass: {
      type: String,
      default: 'bg-body-light'
    },

    headerClass: {
      type: String,
      default: ''
    },

    contentClass: {
      type: String,
      default: ''
    },

    headerStyle: {
      type: Object,
      default: () => {}
    },

    bordered: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    themed: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    link: {
      type: Object,
      default: () => {}
    },
    linkShadow: {
      type: Boolean,
      default: false
    },
    linkPop: {
      type: Boolean,
      default: false
    },
    linkRotate: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Object,
      default: undefined
    },
    tabsAlt: {
      type: Boolean,
      default: false
    },
    tabsInverse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeTab: ''
    }
  },
  computed: {
    tabsMenu () {
      return Object.keys(this.$slots)
        .filter(slotName => slotName.startsWith('tab-'))
        .map(tabName => tabName.substring(4))
    }
  },
  mounted () {
    this.activeTab = this.tabsMenu[0]
  }
}
</script>

<style lang="stylus" scoped>
.block-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.block-header > header {
  color: black;
  font-size: 1.3rem;

  i {
    margin-right: 10px;
  }

  small {
    margin-left: 5px;
    font-size: 1rem;
  }
}
</style>
