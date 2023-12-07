// var client;

init();

async function init() {
  client = await app.initialized();
  renderText();
}

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

async function renderText() {
  console.log("Modal");
  console.log(sapmle_tree);
  let checklist = ``;
  console.log(checklist);
  sapmle_tree?.map((e, i) => {
    checklist += ` <div class="fw-card-1 fw-p-24 fw-flex fw-flex-row">
        <section class="fw-flex-grow">
          <h5 id="selected_" key="${i}" class="fw-type-h5 fw-my-0">${e.name}</h5>
        </section>
      </div>`;
  });
  $(checklist).appendTo("#checklist_div");
}
