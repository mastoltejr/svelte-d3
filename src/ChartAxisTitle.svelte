<script lang="ts">
  export let side: 'top' | 'right' | 'bottom' | 'left' = 'bottom';
  export let title: string = "axis title";
  let height: number = 0;
</script>

<div id="container" style:position='relative' style:height="100%" bind:clientHeight={height}>

{#if side === 'top'}
  <div>
    <slot>
      {title}
    </slot>
  </div>
{:else if side === 'right'}
  <div class="rotate-right" style={`max-height: ${height}px`}>
    <slot>
      {title}
    </slot>
  </div>
{:else if side === 'bottom'}
  <div>
    <slot>
      {title}
    </slot>
  </div>
{:else }
  <div class="rotate-left" style={`max-height: ${height}px`}>
    <slot>
      {title}
    </slot>
  </div>
  
{/if}
</div>

<style>
  #container {
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
  }

  .rotate-left {
    writing-mode: vertical-rl;
    overflow-wrap: break-word;
    transform: rotate(180deg);
  }

  .rotate-right {
    writing-mode: vertical-rl;
    overflow-wrap: break-word;
  }

  
</style>