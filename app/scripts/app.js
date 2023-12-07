var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on("app.activated");
}

// async function renderText() {}

const sapmle_tree = [
  {
    name: "Customer Onboarding",
    children: [
      {
        name: "Aadhar",
        children: [
          {
            name: "Yes",
            children: [
              {
                name: "Does Customer have PAN ?",
                children: [
                  {
                    name: "Yes",
                    children: [
                      {
                        name: "Has customer filled the Application ?",
                        children: [
                          {
                            name: "Yes",
                            children: [
                              {
                                name: "Done",
                                children: [],
                                type: "text",
                              },
                            ],
                            type: "button",
                          },
                          {
                            name: "No",
                            children: [
                              {
                                name: "Request the Customer to do it",
                                children: [],
                                type: "text",
                              },
                            ],
                            type: "button",
                          },
                        ],
                        type: "text",
                      },
                    ],
                    type: "button",
                  },
                  {
                    name: "No",
                    children: [
                      {
                        name: "Ask customer to provide PAN",
                        children: [],
                        type: "text",
                      },
                    ],
                    type: "button",
                  },
                ],
                type: "text",
              },
            ],
            type: "button",
          },
          {
            name: "No",
            children: [
              {
                name: "Request Aadhar",
                children: [],
                type: "text",
              },
            ],
            type: "button",
          },
        ],
        type: "text",
      },
    ],
    type: "root",
  },
];

$("#show_checklist").click(async function () {
  console.log(sapmle_tree);
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
