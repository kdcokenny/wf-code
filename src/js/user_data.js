// Define a function to wait until isRequesting is false
async function waitForIsRequesting() {
    return new Promise(resolve => {
      const checkIsRequesting = async () => {
        if (!(await Wized.data.get("r.3.$.isRequesting"))) {
          resolve();
        } else {
          setTimeout(checkIsRequesting, 10);
        }
      };
  
      checkIsRequesting();
    });
  }
  
  // Define a function to update the display based on user data
  function updateDisplay(loadUser) {
    const accountButton = document.getElementById("account-button");
    const signInButton = document.getElementById("generatebutton_signin");
    const generateButton = document.getElementById("generatebutton");
    const templateFunctional = document.getElementById("template_functional");
    const templateSignIn = document.getElementById("template_signin");
    const dashboardSignIn = document.getElementById("dashboard-sign-in");
  
    if (loadUser.statusCode === 200) {
      accountButton.style.display = "flex";
      signInButton.style.display = "none";
      generateButton.style.display = "block";
      templateFunctional.style.display = "flex";
      templateSignIn.style.display = "none";
      dashboardSignIn.style.display = "none";
    } else {
      accountButton.style.display = "none";
      signInButton.style.display = "block";
      generateButton.style.display = "none";
      templateFunctional.style.display = "none";
      templateSignIn.style.display = "flex";
      dashboardSignIn.style.display = "flex";
    }
  }
  
  // Define a function to load the user data and show/hide elements
  async function loadData() {
    try {
      await waitForIsRequesting();
  
      const loadUser = await Wized.data.get("r.3.$");
  
      updateDisplay(loadUser);
    } catch (error) {
      console.error(error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof Wized !== "undefined" && typeof Wized.data !== "undefined" && typeof document !== "undefined") {
      loadData();
    } else {
      console.error("Wized or document not available.");
    }
  });
  