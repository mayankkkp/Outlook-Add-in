Need Support – Outlook Add-in

Need Support is a Microsoft Outlook add-in that provides Ericsson employees with quick access to IT support services directly from the Outlook message reading experience. It centralizes common support actions such as accessing the IT Service Desk, managing support services, creating email signatures, and providing feedback—without leaving Outlook.
NEED SUPPORT – OUTLOOK ADD-IN
============================

Need Support is a Microsoft Outlook add-in that provides quick access to IT
support services directly from the Outlook message reading experience.
It allows users to open support tools without leaving Outlook.


FEATURES
--------
- Outlook ribbon integration (Message Read view)
- "Need Support?" menu in Outlook
- Task pane based interface
- Quick access to:
  - IT Service Desk
  - My Support & Services
  - Create Email Signature
  - Provide Feedback
  - General Support
- Hosted using GitHub Pages


SUPPORTED CLIENTS
-----------------
- Outlook Desktop (Windows)
- Outlook on the Web
- Microsoft 365 Outlook

Minimum Requirement:
Mailbox API version 1.8


ADD-IN CONFIGURATION
-------------------
Add-in Type      : Outlook Mail Add-in
Host             : Mailbox
View             : Message Read
Permission       : ReadWriteItem
Default Locale   : en-US


PROJECT STRUCTURE
-----------------
Outlook-Add-in
|
|-- manifest.xml
|-- it-service-desk.html
|-- my-support.html
|-- signature.html
|-- feedback.html
|-- need-support.html
|
|-- support16.png
|-- support32.png
|-- support64.png
|-- support80.png
|
|-- README.txt


HOSTED PAGES
------------
IT Service Desk:
https://mayankkkp.github.io/Outlook-Add-in/it-service-desk.html

My Support & Services:
https://mayankkkp.github.io/Outlook-Add-in/my-support.html

Create Signature:
https://mayankkkp.github.io/Outlook-Add-in/signature.html

Provide Feedback:
https://mayankkkp.github.io/Outlook-Add-in/feedback.html

Need Support:
https://mayankkkp.github.io/Outlook-Add-in/need-support.html


INSTALLATION (SIDELOADING)
--------------------------
Outlook Desktop:
1. Open Outlook
2. Go to File > Manage Add-ins
3. Select Upload My Add-in
4. Upload manifest.xml

Microsoft 365 Admin Center:
- Upload manifest.xml for organization-wide deployment


ICONS AND BRANDING
------------------
- Icons available in 16x16, 32x32, and 80x80 sizes
- Icons are hosted on GitHub
- Used across all menu items and task panes


SECURITY AND PERMISSIONS
-----------------------
- No email data is stored externally
- Content is loaded from trusted static URLs
- ReadWriteItem permission included for future enhancements


TECHNOLOGIES USED
-----------------
- Microsoft Outlook Add-ins
- XML Manifest with VersionOverrides
- HTML and CSS
- GitHub Pages


AUTHOR
------
Mayank


LICENSE
-------
This project is intended for internal or enterprise use.
Add license information if required.

✨ Features
Need Support Menu in Outlook ribbon (Message Read view)
Quick access to:
IT Service Desk
My Support & Services
Create Signature
Provide Feedback
General Support
Task pane–based UI for a seamless Outlook experience
Hosted entirely using static web pages (GitHub Pages)

🧩 Add-in Details
Property	Value
Add-in Type	Outlook Mail Add-in
Host	Mailbox
Supported Mode	Message Read
Permissions	ReadWriteItem
Minimum Mailbox API	1.8
Default Locale	en-US
🗂 Project Structure
Outlook-Add-in/
│
├── manifest.xml
├── it-service-desk.html
├── my-support.html
├── signature.html
├── feedback.html
├── need-support.html
│
├── support16.png
├── support32.png
├── support64.png
├── support80.png
│
└── README.md


All UI pages and assets are hosted using GitHub Pages.

🧭 How It Works
The add-in appears in the Message Read Command Surface in Outlook.
A “Need Support?” menu is added to the default Outlook ribbon.
Each menu item opens a task pane pointing to a specific support page.
Icons and labels are defined using VersionOverrides for modern Outlook clients.

🌐 Hosted URLs
The add-in uses the following hosted pages:
IT Service Desk
https://mayankkkp.github.io/Outlook-Add-in/it-service-desk.html

My Support & Services
https://mayankkkp.github.io/Outlook-Add-in/my-support.html

Create Signature
https://mayankkkp.github.io/Outlook-Add-in/signature.html

Provide Feedback
https://mayankkkp.github.io/Outlook-Add-in/feedback.html

Need Support (General)
https://mayankkkp.github.io/Outlook-Add-in/need-support.html

🛠 Installation (Development / Testing)
Clone the repository:
git clone https://github.com/mayankkkp/Outlook-Add-in.git
Upload or sideload the manifest.xml file:
Outlook Desktop:
File → Manage Add-ins → Upload My Add-in
Microsoft 365 Admin Center (for org-wide deployment)
Open an email in Read Mode to see the add-in.

🔐 Permissions
This add-in uses:
ReadWriteItem – Required for interacting with the current email item if future enhancements need it.
No email data is stored or transmitted outside the user’s session.

🎨 Branding & Icons
Icons are hosted on GitHub and provided in the following sizes:
16×16
32×32
80×80
They are used consistently across menu items and task panes.


📦 Technologies Used
Microsoft Office Add-ins (Outlook)
XML Manifest with VersionOverrides
HTML/CSS (static pages)
GitHub Pages (hosting)

👤 Author
Mayank
