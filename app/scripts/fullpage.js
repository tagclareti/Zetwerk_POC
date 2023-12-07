init();

let final_tree;

async function init() {
  client = await app.initialized();
  client.events.on("app.activated", builtHomeHTMLContent);
}

async function renderText() {
  const textElement = document.getElementById("apptext");
  const contactData = await client.data.get("contact");
  const {
    contact: { name },
  } = contactData;

  textElement.innerHTML = `Ticket is created by ${name}`;
}

let checklist_name;
const builtHomeHTMLContent = async () => {
  const textElement = document.getElementById("apptext");
  const addChecklist = `<button onClick=HTMLContentParent() id="add_checklist" type="button">Add Checklist</button>`;
  textElement.innerHTML = addChecklist;
};

function Tree(name, type, child) {
  this.name = name;
  this.children = child || [];
  this.type = type;
  this.addNode = function (parent) {
    this.children = parent;
  };
  this.addChild = function (parentName, type) {
    this.children.push(new Tree(parentName, type));
  };
}

var tree;
const HTMLContentParent = async () => {
  const textElement = document.getElementById("checklist");
  const randomdigit = Math.floor(100000 + Math.random() * 900000);
  const checklist_name_input = `<input id="checklist_name" type="text" placeholder="Checklist Name" />
                        <button onClick=HTMLContentChild(${randomdigit}) type="button" id="add_child">Add Child</button>`;
  textElement.innerHTML = checklist_name_input;
};

const HTMLContentChild = async (randomdigit) => {
  console.log(randomdigit);
  const textElement = document.getElementById("checklist");
  var checklist_name = `<br/><div><input class=child_box id=child_box_${randomdigit} type="text" placeholder="Checklist Name" />
                            <button type="button" onClick=HTMLContentChild() id=add_child>Add Child</button></div>`;
  textElement.innerHTML += checklist_name;
  var tree = new Tree("Customer Onboarding", "root"); // create a tree (or a portion of a tree) with root "A" and empty children
  tree.addChild("Aadhar", "text"); // A -> B1

  tree.children[0].addChild("Yes", "button"); // add this tree under Aadher->Yes
  tree.children[0].addChild("No", "button"); // add this tree under Aadhar->No

  tree.children[0].children[0].addChild("Does Customer have PAN ?", "text"); // add this tree under Aadhar->Yes->PAN?
  tree.children[0].children[0].children[0].addChild("Yes", "button"); // add this tree under Aadhar->Yes->PAN?->Yes
  tree.children[0].children[0].children[0].children[0].addChild(
    "Has customer filled the Application ?",
    "text"
  ); // add this tree under Aadhar->Yes->PAN?->Yes->filled application

  tree.children[0].children[0].children[0].children[0].children[0].addChild(
    "Yes",
    "button"
  ); // add this tree under Aadhar->Yes->PAN?->Yes->filled application->yes

  tree.children[0].children[0].children[0].children[0].children[0].children[0].addChild(
    "Done",
    "text"
  ); // add this tree under Aadhar->Yes->PAN?->Yes->filled application->yes->done

  tree.children[0].children[0].children[0].children[0].children[0].addChild(
    "No",
    "button"
  ); // add this tree under Aadhar->Yes->PAN?->Yes->filled application->no

  tree.children[0].children[0].children[0].children[0].children[0].children[1].addChild(
    "Request the Customer to do it",
    "text"
  ); // add this tree under Aadhar->Yes->PAN?->Yes->filled application->no->fill the form

  tree.children[0].children[0].children[0].addChild("No", "button"); // add this tree under Aadhar->Yes->PAN?->No
  tree.children[0].children[0].children[0].children[1].addChild(
    "Ask customer to provide PAN",
    "text"
  ); // add this tree under Aadhar->Yes->PAN?->No->request PAN

  tree.children[0].children[1].addChild("Request Aadhar", "text"); // add this tree under Aadhar->No->Request Aadhar

  // console.log(tree);
  final_tree = tree;
  generateUI(tree);
};

const generateUI = async (tree) => {
  $("#checklist").hide();
  console.log(tree, "lklklkll");
  const checklist_header = `<p onClick=showGuide()>${tree?.name}</p>`;
  $(checklist_header).appendTo("#checklist_ui");
};

const showGuide = async () => {
  console.log(final_tree?.children);

  let checklist_level_1;
  final_tree?.children.map((e, i) => {
    console.log(e?.name);
    console.log(i);
    checklist_level_1 = `<p id=${i}>${e?.name}</p>`;
  });
  $(checklist_level_1).appendTo("#checklist_ui");
};
