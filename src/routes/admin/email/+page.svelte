<script lang="ts">
  import type { FolderId, FolderType } from "$lib/custom/email/types";
  import {
    searchQuery,
    currentFolder,
    isComposeOpen,
    labels,
    folderEmails,
    markAsRead,
    selectedEmail,
    deleteEmail,
    moveToFolder,
    selectedEmailId,
    toggleStar,
    addEmail,
  } from "$lib/custom/email/store/email";
  import EmailLabel from "$lib/custom/email/email-label.svelte";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import { Badge } from "$lib/components/ui/badge";
  import { Input } from "$lib/components/ui/input";
  import BellIcon from "@lucide/svelte/icons/bell";
  import SettingsIcon from "@lucide/svelte/icons/settings";
  import SquarePenIcon from "@lucide/svelte/icons/square-pen";
  import PaperclipIcon from "@lucide/svelte/icons/paperclip";
  import InboxIcon from "@lucide/svelte/icons/inbox";
  import ReplyIcon from "@lucide/svelte/icons/reply";
  import StarIcon from "@lucide/svelte/icons/star";
  import ArchiveIcon from "@lucide/svelte/icons/archive";
  import TrashIcon from "@lucide/svelte/icons/trash";
  import EllipsisVerticalIcon from "@lucide/svelte/icons/ellipsis-vertical";
  import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
  import SendIcon from "@lucide/svelte/icons/send";
  import FileTextIcon from "@lucide/svelte/icons/file-text";
  import ShieldAlertIcon from "@lucide/svelte/icons/shield-alert";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Label } from "$lib/components/ui/label";
  import * as Dialog from "$lib/components/ui/dialog";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Avatar from "$lib/components/ui/avatar";
  import * as Card from "$lib/components/ui/card";

  const { ...restProps } = $props();

  // Header
  let searchValue = $state("");

  function handleSearch() {
    searchQuery.set(searchValue);
  }

  // Sidenav
  const folderCounts: Record<FolderId, number> = {
    inbox: 12,
    sent: 5,
    draft: 2,
    starred: 3,
    spam: 4,
    trash: 0,
  };

  const folders: FolderType[] = [
    { id: "inbox", name: "Inbox", icon: "inbox" },
    { id: "sent", name: "Sent", icon: "paper-airplane" },
    { id: "draft", name: "Drafts", icon: "document" },
    { id: "starred", name: "Starred", icon: "star" },
    { id: "spam", name: "Spam", icon: "shield-exclamation" },
    { id: "trash", name: "Trash", icon: "trash" },
  ];

  function handleFolderClick(folder) {
    currentFolder.set(folder);
  }

  // Email List
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();

    // Today
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // This year
    if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleDateString([], { month: "short", day: "numeric" });
    }

    // Previous years
    return date.toLocaleDateString([], {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function handleEmailClick(emailId: string) {
    selectedEmailId.set(emailId);
    markAsRead(emailId);
  }

  function handleStarClick(event: MouseEvent, emailId: string) {
    event.stopPropagation();
    toggleStar(emailId);
  }

  // Email Detail
  function formatDetailDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString([], {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  function handleBack() {
    selectedEmailId.set(null);
  }

  function handleArchive() {
    if ($selectedEmail) {
      moveToFolder($selectedEmail.id, "trash");
      selectedEmailId.set(null);
    }
  }

  function handleDelete() {
    if ($selectedEmail) {
      deleteEmail($selectedEmail.id);
    }
  }

  function handleStarToggle() {
    if ($selectedEmail) {
      toggleStar($selectedEmail.id);
    }
  }

  function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return (
      parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
    );
  }

  // Compose dialog
  let subject = $state("");
  let to = $state("");
  let body = $state("");

  function handleClose() {
    isComposeOpen.set(false);
    resetForm();
  }

  function resetForm() {
    subject = "";
    to = "";
    body = "";
  }

  function handleSubmit() {
    if (to && subject) {
      addEmail({
        from: {
          name: "Me",
          email: "me@example.com",
        },
        to: [
          {
            name: to,
            email: to,
          },
        ],
        subject,
        body,
        preview: body.substring(0, 100),
        isRead: true,
        isStarred: false,
        labels: [],
        folder: "sent",
      });

      handleClose();
    }
  }

  let open = $state(true);
</script>

<svelte:head>
  <title>Admin Dashboard</title>
</svelte:head>

<Card.Root>
  <!-- Header -->
  <Card.Header class="flex items-center gap-4">
    <Card.Title>Inbox</Card.Title>
    <Input
      class="w-full"
      bind:value={searchValue}
      oninput={handleSearch}
      placeholder="Search emails"
    />
    <div class="flex gap-2">
      <Button variant="ghost">
        <BellIcon class="h-5 w-5" />
      </Button>
      <Button variant="ghost">
        <SettingsIcon class="h-5 w-5" />
      </Button>
    </div>
  </Card.Header>

  <Card.Content class="flex">
    <!-- Sidenav -->
    <div class="flex w-72 flex-col space-y-2 border-r border-neutral-200 pr-4">
      <!-- Compose dialog -->

      <Dialog.Root open={$isComposeOpen} onOpenChange={handleClose}>
        <Dialog.Trigger class={buttonVariants({ variant: "ghost" })}>
          <SquarePenIcon class="h-5 w-5" />
          <span>Compose</span>
        </Dialog.Trigger>
        <Dialog.Overlay class="bg-background/80" />
        <Dialog.Content class="flex max-h-[80vh] flex-col p-4 sm:max-w-xl">
          <Dialog.Header class="border-b px-4 py-3">
            <Dialog.Title class="text-lg">New Message</Dialog.Title>
          </Dialog.Header>

          <div class="flex-1 overflow-y-auto">
            <div class="space-y-4">
              <div class="grid gap-1.5">
                <Label for="to" class="sr-only">To</Label>
                <Input
                  id="to"
                  type="email"
                  placeholder="To"
                  bind:value={to}
                />
              </div>

              <div class="grid gap-1.5">
                <Label for="subject" class="sr-only">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  bind:value={subject}
                />
              </div>

              <div class="grid gap-1.5">
                <Label for="body" class="sr-only">Message</Label>
                <Textarea
                  id="body"
                  placeholder="Compose your message..."
                  rows={12}
                  bind:value={body}
                  class="min-h-[200px]"
                />
              </div>
            </div>
          </div>
          <Dialog.Footer
            class="flex !justify-between px-4 py-2"
          >
            <Button variant="ghost" size="icon" class="h-8 w-8 rounded-full">
              <PaperclipIcon class="h-5 w-5" />
              <span class="sr-only">Attach file</span>
            </Button>
            <div class="flex items-center justify-between space-x-2">
              <Button variant="outline" onclick={handleClose}>Discard</Button>
              <Button onclick={handleSubmit} disabled={!to || !subject}
                >Send</Button
              >
            </div>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
      <h3 class="px-2 text-xs font-semibold text-gray-500 uppercase">
        Folders
      </h3>
      <nav class="space-y-1">
        {#each folders as folder (folder)}
          <Button
            variant="ghost"
            class="w-full justify-between {$currentFolder === folder.id
              ? ''
              : ''}"
            onclick={() => handleFolderClick(folder.id)}
          >
            <div class="flex items-center gap-3">
              {#if folder.icon === "inbox"}
                <InboxIcon class="h-5 w-5" />
              {:else if folder.icon === "paper-airplane"}
                <SendIcon class="h-5 w-5" />
              {:else if folder.icon === "document"}
                <FileTextIcon class="h-5 w-5" />
              {:else if folder.icon === "star"}
                <StarIcon class="h-5 w-5" />
              {:else if folder.icon === "shield-exclamation"}
                <ShieldAlertIcon class="h-5 w-5" />
              {:else if folder.icon === "trash"}
                <TrashIcon class="h-5 w-5" />
              {/if}
              <span>{folder.name}</span>
            </div>
            {#if folderCounts[folder.id] > 0}
              <Badge variant="secondary">
                {folderCounts[folder.id]}
              </Badge>
            {/if}
          </Button>
        {/each}
      </nav>
      <h3 class="px-2 text-xs font-semibold text-gray-500 uppercase">Labels</h3>
      {#each $labels as label (label)}
        <Button variant="ghost" class="w-full justify-start">
          <span class="h-3 w-3 rounded-full bg-{label.color}-500"></span>
          <span>{label.name}</span>
        </Button>
      {/each}
    </div>

    <!-- Content -->
    <div class="flex w-full">
      <div
        class="h-full w-96 border-r border-gray-200 {$selectedEmailId
          ? 'hidden md:block'
          : ''}"
      >
        <div
          class="h-full w-96 border-r border-gray-200 {$selectedEmailId
            ? 'hidden md:block'
            : ''}"
        >
          <!-- Email List -->
          <div class="h-full overflow-y-auto bg-white">
            {#if $folderEmails.length === 0}
              <div
                class="flex h-64 flex-col items-center justify-center text-gray-500"
              >
                <InboxIcon class="mb-2 h-12 w-12" />
                <p>No emails in this folder</p>
              </div>
            {:else}
              <ul class="divide-y divide-gray-200">
                {#each $folderEmails as email (email.id)}
                  <li
                    class="relative flex cursor-pointer items-start space-x-3 px-4 py-4 focus-within:bg-gray-50 hover:bg-gray-50 {!email.isRead
                      ? 'bg-gray-50'
                      : ''} {$selectedEmailId === email.id
                      ? 'bg-primary-50'
                      : ''}"
                    onclick={() => handleEmailClick(email.id)}
                    {...restProps}
                  >
                    <div class="flex-shrink-0 pt-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        class="hover:text-warning-500 h-8 w-8 rounded-full hover:bg-transparent {email.isStarred
                          ? 'text-warning-500'
                          : 'text-gray-400'}"
                        onclick={(e) => handleStarClick(e, email.id)}
                      >
                        <StarIcon class="h-5 w-5" />
                        <span class="sr-only">Star</span>
                      </Button>
                    </div>

                    <div class="min-w-0 flex-1">
                      <div class="flex items-center justify-between">
                        <p
                          class="truncate text-sm font-medium {!email.isRead
                            ? 'text-gray-900'
                            : 'text-gray-700'}"
                        >
                          {email.from.name}
                        </p>
                        <p class="ml-2 text-xs whitespace-nowrap text-gray-500">
                          {formatDate(email.timestamp)}
                        </p>
                      </div>

                      <p
                        class="truncate text-sm font-medium {!email.isRead
                          ? 'text-gray-900'
                          : 'text-gray-700'}"
                      >
                        {email.subject}
                      </p>

                      <div class="flex items-center justify-between">
                        <p class="truncate text-xs text-gray-500">
                          {email.preview}
                        </p>
                        {#if email.attachments && email.attachments.length > 0}
                          <span class="ml-2 text-gray-400">
                            <PaperclipIcon class="h-4 w-4" />
                          </span>
                        {/if}
                      </div>

                      {#if email.labels.length > 0}
                        <div class="mt-1 flex flex-wrap gap-1">
                          {#each email.labels.slice(0, 2) as labelId, labId (labId)}
                            <EmailLabel {labelId} />
                          {/each}
                          {#if email.labels.length > 2}
                            <Badge
                              variant="secondary"
                              class="px-1.5 py-0.5 text-xs"
                            >
                              +{email.labels.length - 2}
                            </Badge>
                          {/if}
                        </div>
                      {/if}
                    </div>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        </div>
      </div>
      <!-- Email Detail -->
      <div class="h-full w-full {!$selectedEmailId ? 'hidden md:flex' : ''}">
        <div class="animate-fade-in flex h-full w-full flex-col">
          {#if $selectedEmail}
            <div
              class="flex items-center justify-between border-b border-gray-200 p-3"
            >
              <div class="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onclick={handleBack}
                  class="mr-2 h-9 w-9"
                >
                  <ArrowLeftIcon class="h-5 w-5" />
                  <span class="sr-only">Back</span>
                </Button>
                <h2
                  class="max-w-xs truncate text-lg font-medium text-gray-900 sm:max-w-sm md:max-w-md lg:max-w-lg"
                >
                  {$selectedEmail.subject}
                </h2>
              </div>

              <div class="flex items-center gap-1">
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Button
                      variant="ghost"
                      size="icon"
                      class="h-9 w-9"
                      onclick={handleStarToggle}
                    >
                      <StarIcon
                        class="h-5 w-5 {$selectedEmail.isStarred
                          ? 'fill-yellow-500 text-yellow-500'
                          : ''}"
                      />
                      <span class="sr-only">Toggle star</span>
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <p>
                      {$selectedEmail.isStarred ? "Remove star" : "Add star"}
                    </p>
                  </Tooltip.Content>
                </Tooltip.Root>

                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Button
                      variant="ghost"
                      size="icon"
                      class="h-9 w-9"
                      onclick={handleArchive}
                    >
                      <ArchiveIcon class="h-5 w-5" />
                      <span class="sr-only">Archive</span>
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <p>Archive</p>
                  </Tooltip.Content>
                </Tooltip.Root>

                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Button
                      variant="ghost"
                      size="icon"
                      class="h-9 w-9"
                      onclick={handleDelete}
                    >
                      <TrashIcon class="h-5 w-5" />
                      <span class="sr-only">Delete</span>
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <p>Delete</p>
                  </Tooltip.Content>
                </Tooltip.Root>

                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="ghost" size="icon" class="h-9 w-9">
                      <EllipsisVerticalIcon class="h-5 w-5" />
                      <span class="sr-only">More options</span>
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end">
                    <DropdownMenu.Item
                      onclick={() => console.log("Mark as unread")}
                    >
                      Mark as unread
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onclick={() => console.log("Forward")}>
                      Forward
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item
                      class="text-destructive"
                      onclick={handleDelete}
                    >
                      Delete
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </div>
            </div>

            <div class="flex-grow overflow-y-auto p-4">
              <div class="mb-6">
                <div class="flex items-start justify-between">
                  <div class="flex items-start">
                    <Avatar.Root class="mr-3 h-10 w-10">
                      <Avatar.Fallback class="bg-primary-500 text-white">
                        {$selectedEmail.from.name.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar.Root>
                    <div>
                      <div class="flex items-center">
                        <h3 class="text-sm font-medium text-gray-900">
                          {$selectedEmail.from.name}
                        </h3>
                        <span class="ml-2 text-sm text-gray-500">
                          &lt;{$selectedEmail.from.email}&gt;
                        </span>
                      </div>
                      <div class="mt-1 text-sm text-gray-500">
                        To: {$selectedEmail.to
                          .map((recipient) => recipient.name)
                          .join(", ")}
                      </div>
                    </div>
                  </div>

                  <div class="text-sm text-gray-500">
                    {formatDetailDate($selectedEmail.timestamp)}
                  </div>
                </div>

                {#if $selectedEmail.labels.length > 0}
                  <div class="mt-3 flex flex-wrap gap-1">
                    {#each $selectedEmail.labels as labelId (labelId)}
                      <EmailLabel {labelId} />
                    {/each}
                  </div>
                {/if}
              </div>

              <div class="prose dark:prose-invert max-w-none">
                {@html $selectedEmail.body}
              </div>

              {#if $selectedEmail.attachments && $selectedEmail.attachments.length > 0}
                <div class="mt-6 border-t border-gray-200 pt-4">
                  <h4 class="mb-3 text-sm font-medium text-gray-700">
                    Attachments ({$selectedEmail.attachments.length})
                  </h4>
                  <div class="space-y-3">
                    {#each $selectedEmail.attachments as attachment (attachment)}
                      <div
                        class="flex items-center justify-between rounded-lg border border-gray-200 p-3"
                      >
                        <div class="flex items-center">
                          <div class="mr-3 text-gray-500">
                            <PaperclipIcon class="h-5 w-5" />
                          </div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">
                              {attachment.name}
                            </div>
                            <div class="text-xs text-gray-500">
                              {formatBytes(attachment.size)}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>

            <div class="border-t border-gray-200 p-4">
              <Button variant="ghost">
                <ReplyIcon class="mr-2 h-5 w-5" />
                Reply
              </Button>
            </div>
          {:else}
            <div
              class="flex h-full w-full flex-col items-center justify-center text-gray-500"
            >
              <InboxIcon class="mb-2 h-12 w-12" />
              <p>Select an email to view</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </Card.Content>
</Card.Root>
