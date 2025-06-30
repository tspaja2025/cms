<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  import * as Select from "$lib/components/ui/select";
  import { Label } from "$lib/components/ui/label";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Textarea } from "$lib/components/ui/textarea";
  import PlusIcon from "@lucide/svelte/icons/plus";
  import { createEventDispatcher } from "svelte";
  import { CalendarDate, CalendarDateTime, toCalendarDateTime } from "@internationalized/date";
  import { addEvent, updateEvent } from "$lib/custom/calendar/store/events";

  export let categories: Array<{ id: string, name: string, color: string }>;

  type EventCategory = "work" | "personal" | "family" | "other";

  interface CalendarEvent {
    id?: string;
    title: string;
    description?: string;
    start: CalendarDateTime;
    end: CalendarDateTime;
    allDay: boolean;
    category: EventCategory;
  }

  const dispatch = createEventDispatcher();

  let event: Partial<CalendarEvent> = {
    title: "",
    description: "",
    start: new CalendarDateTime(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), 0, 0),
    end: new CalendarDateTime(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), 1, 0),
    allDay: false,
    category: "work"
  };

  let isEdit = false;

  function formatDateTimeForInput(date: CalendarDateTime): string {
    return date.toString().slice(0, 16);
  }

  $: startDateTime = event.start ? formatDateTimeForInput(event.start) : "";
  $: endDateTime = event.end ? formatDateTimeForInput(event.end) : "";

  function handleSubmit() {
    if (!event.title) return;

    if (isEdit && event.id) {
      updateEvent(event as CalendarEvent);
    } else {
      addEvent({
        ...event,
        title: event.title || "",
        start: event.start as CalendarDateTime,
        end: event.end as CalendarDateTime,
        category: event.category as EventCategory
      });
    }

    dispatch("close");
  }

  function updateStartDate(e: Event) {
    const input = e.target as HTMLInputElement;
    const newDate = new Date(input.value);

    if (event.allDay) {
      event.start = toCalendarDateTime(new CalendarDate(newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate()));
      event.end = toCalendarDateTime(new CalendarDate(newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate()));
    } else {
      event.start = new CalendarDateTime(
        newDate.getFullYear(),
        newDate.getMonth() + 1,
        newDate.getDate(),
        newDate.getHours(),
        newDate.getMinutes()
      );
      
      if (event.end && event.end.compare(event.start) < 0) {
        event.end = new CalendarDateTime(
          newDate.getFullYear(),
          newDate.getMonth() + 1,
          newDate.getDate(),
          newDate.getHours() + 1,
          newDate.getMinutes()
        );
      }
    }
  }

  function updateEndDate(e: Event) {
    const input = e.target as HTMLInputElement;
    const newDate = new Date(input.value);
    
    event.end = event.allDay
      ? toCalendarDateTime(new CalendarDate(newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate()))
      : new CalendarDateTime(
          newDate.getFullYear(),
          newDate.getMonth() + 1,
          newDate.getDate(),
          newDate.getHours(),
          newDate.getMinutes()
        );
  }
</script>

<Dialog.Root>
  <Dialog.Trigger class="w-full">
    <Button class="w-full">
      <PlusIcon class="h-5 w-5" />
      Add Event
    </Button>
  </Dialog.Trigger>
  
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>{isEdit ? "Edit" : "New"} Event</Dialog.Title>
    </Dialog.Header>
    
    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
      <div class="space-y-2">
        <Label for="title">Title</Label>
        <Input
          id="title"
          bind:value={event.title}
          placeholder="Event title"
          required
        />
      </div>

      <div class="space-y-2">
        <Label for="description">Description (optional)</Label>
        <Textarea
          id="description"
          bind:value={event.description}
          placeholder="Add a description"
          rows="2"
        />
      </div>

      <div class="flex items-center">
        <Checkbox id="all-day" bind:checked={event.allDay} />
        <Label for="all-day" class="ml-2">All day</Label>
      </div>

      {#if !event.allDay}
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <Label for="start-date">Start</Label>
            <Input
              type="datetime-local"
              id="start-date"
              value={startDateTime}
              on:change={updateStartDate}
            />
          </div>

          <div class="space-y-2">
            <Label for="end-date">End</Label>
            <Input
              type="datetime-local"
              id="end-date"
              value={endDateTime}
              on:change={updateEndDate}
            />
          </div>
        </div>
      {:else}
        <div class="space-y-2">
          <Label for="date">Date</Label>
          <Input
            type="date"
            id="date"
            value={event.start?.toString().split("T")[0] || ""}
            on:change={updateStartDate}
          />
        </div>
      {/if}

      <div class="space-y-2">
        <Label for="category">Category</Label>
        <Select.Root bind:value={event.category}>
          <Select.Trigger>Select Category</Select.Trigger>
          <Select.Content>
            {#each categories as category}
              <Select.Item value={category.id}>
                {category.name}
              </Select.Item>
            {/each}
          </Select.Content>
        </Select.Root>
      </div>

      <div class="flex justify-end gap-2 pt-2">
        <Button type="button" on:click={() => dispatch("close")} variant="secondary">
          Cancel
        </Button>
        <Button type="submit">
          {isEdit ? "Update" : "Create"} Event
        </Button>
      </div>
    </form>
  </Dialog.Content>
</Dialog.Root>