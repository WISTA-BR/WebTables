{
  "manifest_version": 3,
  "name": "WebTables",
  "version": "1.0",
  "description": "Copy webpage tables into an Excel log (per website) with daily updates. Data is GPG‐encrypted and sent with GitHub user authentication.",
  "permissions": [
    "scripting",
    "activeTab",
    "storage",
    "notifications"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icon16.png",
      "48": "icon48.png",
      "128": "icon128.png"
    }
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ]
}
