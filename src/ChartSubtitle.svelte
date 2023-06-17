<script lang="ts">
  export let subtitle: string = "Subtitle goes here";
</script>

<div>
  <slot>
    {subtitle}
  </slot>
</div>

<style>
  div {
    font-size: 0.7rem;
    text-align: left;
  }
</style>