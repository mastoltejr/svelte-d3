<script lang="ts">
  export let description: string = "Description goes here";
</script>

<p>
  <slot>
    {description}
  </slot>
</p>

<style>
  p {
    font-size: 0.6rem;
    text-align: center;
  }
</style>