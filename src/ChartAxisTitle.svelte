<script lang="ts">
  export let side: 'top' | 'right' | 'bottom' | 'left' = 'bottom';
  export let title: string = "axis title";
  let titleWidth: number;
</script>

<div style:position='relative' style:height="100%">
<div style:width={`${titleWidth}px`}>
</div>
{#if side === 'top'}
  <div bind:clientHeight={titleWidth}>
    <slot>
      {title}
    </slot>
  </div>
{:else if side === 'right'}
  <div class="inner rotate-right" bind:clientHeight={titleWidth}>
    <slot>
      {title}
    </slot>
  </div>
{:else if side === 'bottom'}
  <div bind:clientHeight={titleWidth}>
    <slot>
      {title}
    </slot>
  </div>
{:else }
  <div class="inner rotate-left" bind:clientHeight={titleWidth}>
    <slot>
      {title}
    </slot>
  </div>
{/if}
</div>

<style>
  div {
    font-size: 0.8rem;
    text-align: center;
  }

  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .rotate-left {
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    transform:  translateX(-50%) translateY(-50%) rotate(-90deg);
  }

  .rotate-right {
    -moz-transform: translateX(-50%) translateY(-50%) rotate(90deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(90deg);
    transform:  translateX(-50%) translateY(-50%) rotate(90deg);
  }
</style>