<svelte:head>
  <title>Admin Dashboard</title>
</svelte:head>

<!-- 1. Tabs [Account, Security, Billing & Plans, Notifications, Connections]
  1.1. Account; 2 cards
    1.1.1. Inputs [First Name, Last Name, Email, Organization, Phone Number, Address, State, Zip Code, Country, Language, TimeZone, Currency]
    1.1.2. Buttons [Save Changes, Reset]
    1.1.3. Delete Account, checkbox "I confirm my account deletion" Button
  1.2. Security; 5 cards
    1.2.1. Change Password, Inputs [current password, new password, confirm new password], password requirements [Minimum 8 characters long - the more, the better, At least one lowercase & one uppercase character, At least one number, symbol, or whitespace character] save changes, reset.
    1.2.2 Two-step verification [Two factor authentication is not enabled yet. Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.Learn more.] Enable two-factor authentication.
    1.2.3 Create an API key. Select [Choose the API key type [Full Control, Modify, Read & Execute, List Folder Contents, Read Only, Read & Write], name the API key], Create Key.
    1.2.4. API Key List & Access, [An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.]
    1.2.5. Recent Devices table [Browser, Device, Location, Recent Activities] 6 spots
  1.3. Billing & Plans; 4 cards
    1.3.1. Current Plan
    1.3.2. Payment Method
    1.3.3. Billing Address
    1.3.4. Table [#, Status, Client, Total, Issued Date, Balance, Action]
  1.4. Notifications
    1.4.1. Recent Devices table [Type, Email, Browser, App]
  1.5. Connections
    1.5.1. Connected Accounts
    1.5.1. Social Accounts -->
