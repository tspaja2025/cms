<script lang="ts">
  import type { InvoiceStatus } from "$lib/custom/invoice/types";
  import {
    getStatusLabel,
    getStatusColorClass,
  } from "$lib/custom/invoice/utils";
  import { Badge } from "$lib/components/ui/badge";

  let {
    status,
  }: {
    status: InvoiceStatus;
  } = $props();
</script>

<Badge class={getStatusColorClass(status)}>
  {getStatusLabel(status)}
</Badge>
