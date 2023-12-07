var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on("app.activated", renderText);
}

async function renderText() {}

$("#show_checklist").click(async function () {
  console.log("Clicked");
  try {
    let data = await client.interface.trigger("showModal", {
      title: "List of Guides",
      template: "modal.html",
    });
    console.log(data); // success message
  } catch (error) {
    // failure operation
    console.error(error);
  }
});
