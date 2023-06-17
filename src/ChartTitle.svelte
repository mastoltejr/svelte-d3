<script lang="ts">
  export let title: string = "Title goes here";
</script>

<div>
  <slot>
    {title}
  </slot>
</div>

<style>
  div {
    font-size: 2rem;
    text-align: left;
  }
</style>