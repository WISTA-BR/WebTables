(function() {
  // Create and style the floating icon.
  const btn = document.createElement("div");
  btn.id = "webtables-floating-icon";
  btn.textContent = "📋";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.width = "50px";
  btn.style.height = "50px";
  btn.style.backgroundColor = "#4285f4";
  btn.style.color = "#fff";
  btn.style.borderRadius = "50%";
  btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  btn.style.display = "flex";
  btn.style.justifyContent = "center";
  btn.style.alignItems = "center";
  btn.style.cursor = "pointer";
  btn.style.zIndex = "9999";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    // Retrieve all table elements on the page.
    let tables = document.querySelectorAll("table");
    let tableData = [];
    tables.forEach(table => {
      tableData.push(table.outerHTML);
    });

    let pageTitle = document.title || "Untitled_Page";
    let timestamp = new Date().toISOString();

    // Package data to send.
    const payload = { title: pageTitle, tables: tableData, timestamp: timestamp };
  
    // Send the payload to background.js to encrypt and post it.
    chrome.runtime.sendMessage({
      action: "process_tables",
      data: payload
    });
  });
})();
