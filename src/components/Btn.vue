
<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    required: false,
    validator(value) {
      return [
        'primary', 'link', 'info', 'success', 'warning',
        'danger', 'white', 'light', 'dark', 'text', 'ghost'
      ].includes(value);
    }
  },
  light: {
    type: Boolean,
    required: false,
  },
  size: {
    type: String,
    required: false,
    validator(value) {
      return ['small', 'normal', 'medium', 'large'].includes(value);
    }
  },
  resposive: {
    type: Boolean,
    required: false,
  },
  fullwidth: {
    type: Boolean,
    required: false,
  },
  outlined: {
    type: Boolean,
    required: false,
  },
  inverted: {
    type: Boolean,
    required: false,
  },
  rounded: {
    type: Boolean,
    required: false,
  },
  state: {
    type: String,
    required: false,
    validator(value, props) {
      return ['hover', 'focus', 'active', 'loading', 'static'].includes(value);
    }
  },
  disabled: {
    type: Boolean,
    required: false,
  },
 
});

const classNames = computed(() => {
  let names = [];

  if (props.color) {
    names.push('is-' + props.color);
  }

  if (props.light) {
    names.push('is-light');
  }

  if (props.size) {
    names.push('is-' + props.size);
  }
  if (props.resposive) {
    names.push('is-responsive');
  }
  if (props.resposive) {
    names.push('is-fullwidth');
  }
  if (props.outlined) {
    names.push('is-outlined');
  }
  if (props.inverted) {
    names.push('is-inverted');
  }
  if (props.state) {
    names.push('is-' + props.state);
  }
  if (props.rounded) {
    names.push('is-rounded');
  }
   if (props.disabled) {
    names.push('is-disabled');
  }


  return names.join(' ');
});
</script>

<template>
  <button :class="['button', classNames]">
    <slot></slot>
  </button>
</template>
