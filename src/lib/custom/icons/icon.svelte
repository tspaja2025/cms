<script lang="ts">
  import type { Snippet } from "svelte";

  interface DefAttrs {
    xmlns: string;
    width: number;
    height: number;
    viewBox: string;
    fill: string;
    stroke: string;
    "stroke-width": number;
    "stroke-linecap": string;
    "stroke-linejoin": string;
  }
  interface IconProps {
    children: Snippet;
    name?: string;
    color?: string;
    size?: number;
    strokeWidth?: number;
    absoluteStrokeWidth?: boolean;
    iconNode?: any[];
  }
  const defaultAttributes: DefAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  };
  const {
    children,
    name,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    ...props
  }: IconProps = $props();
</script>

<svg
  {...defaultAttributes}
  {...props}
  width={size}
  height={size}
  stroke={color}
  stroke-width={absoluteStrokeWidth
    ? (Number(strokeWidth) * 24) / Number(size)
    : strokeWidth}
  class={["lucide-icon lucide", name && `lucide-${name}`, props.class]}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs}></svelte:element>
  {/each}
</svg>
