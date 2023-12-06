app.initialized().then(
  function (_client) {
    //If successful, register the app activated and deactivated event callback.
    window.client = _client;
  },
  function (error) {
    //If unsuccessful
    console.log(error);
  }
);

jQuery("#error_div").hide();
jQuery("#department").select2({
  width: "resolve",
});

function getConfigs(configs) {
  jQuery("#error_div").hide();
  jQuery("input[name=api_key]").val(configs["api_key"]);
  jQuery("input[name=domain]").val(configs["domain"]);
}

async function validate() {
  let isValid = true;
  var api_key = jQuery("input[name=api_key]").val();
  var domain = jQuery("input[name=domain]").val();
  try {
    let response = await client.request.invokeTemplate("FreshdeskValidation", {
      context: {
        key: btoa(api_key),
        domain: domain,
      },
    });
    console.log(response);
    return isValid;
  } catch (error) {
    console.error(error);
    return (isValid = false);
  }
}

function postConfigs() {
  var api_key = jQuery("input[name=api_key]").val();
  var domain = jQuery("input[name=domain]").val();

  return {
    __meta: {
      secure: ["api_key"],
    },
    api_key,
    domain,
  };
}
