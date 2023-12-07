init();

async function init() {
  client = await app.initialized();
  client.events.on("app.activated", renderText);
}

async function renderText() {}
