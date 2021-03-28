$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Comments.feature");
formatter.feature({
  "name": "Comment classification and status functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that all classification and status combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@comments"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "And "
});
formatter.step({
  "name": "I process with \"\u003cclassification\u003e\" and \"\u003cstatus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should be able to click the process button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "classification",
        "status"
      ]
    },
    {
      "cells": [
        "positive",
        "visible"
      ]
    },
    {
      "cells": [
        "positive",
        "hidden"
      ]
    },
    {
      "cells": [
        "negative",
        "visible"
      ]
    },
    {
      "cells": [
        "negative",
        "hidden"
      ]
    },
    {
      "cells": [
        "neutral",
        "visible"
      ]
    },
    {
      "cells": [
        "neutral",
        "hidden"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that all classification and status combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@comments"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I process with \"positive\" and \"visible\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_process_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to click the process button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_should_be_able_to_click_the_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that all classification and status combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@comments"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I process with \"positive\" and \"hidden\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_process_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to click the process button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_should_be_able_to_click_the_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that all classification and status combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@comments"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I process with \"negative\" and \"visible\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_process_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to click the process button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_should_be_able_to_click_the_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that all classification and status combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@comments"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I process with \"negative\" and \"hidden\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_process_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to click the process button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_should_be_able_to_click_the_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that all classification and status combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@comments"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I process with \"neutral\" and \"visible\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_process_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to click the process button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_should_be_able_to_click_the_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that all classification and status combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@comments"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I process with \"neutral\" and \"hidden\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_process_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to click the process button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.CommentsStepDefs.i_should_be_able_to_click_the_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that user can login with a valid key",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to login and see the \"Comments\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_should_be_able_to_login_and_see_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that user can not login with an invalid key",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I type the \"invalid\" key and click start",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I shouldn\u0027t be able to login and I should see \"The key is not correct\" alert message",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_shouldn_t_be_able_to_login_and_I_should_see_alert_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Logout.feature");
formatter.feature({
  "name": "Logout functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that user can logout by clicking Logout button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@logout"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click logout button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_click_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout successfully and see the login page again",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_should_be_able_to_logout_successfully_and_see_the_login_page_again()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/RadioButtons.feature");
formatter.feature({
  "name": "Radio Buttons",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify all the radio buttons if they are enabled",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@radio"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "When "
});
formatter.step({
  "name": "all the \"\u003cradioButtons\u003e\" should be enabled to click",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "radioButtons"
      ]
    },
    {
      "cells": [
        "positive"
      ]
    },
    {
      "cells": [
        "negative"
      ]
    },
    {
      "cells": [
        "neutral"
      ]
    },
    {
      "cells": [
        "visible"
      ]
    },
    {
      "cells": [
        "hidden"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify all the radio buttons if they are enabled",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@radio"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all the \"positive\" should be enabled to click",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.RadioButtonStepDefs.all_the_should_be_enabled_to_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all the radio buttons if they are enabled",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@radio"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all the \"negative\" should be enabled to click",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.RadioButtonStepDefs.all_the_should_be_enabled_to_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all the radio buttons if they are enabled",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@radio"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all the \"neutral\" should be enabled to click",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.RadioButtonStepDefs.all_the_should_be_enabled_to_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all the radio buttons if they are enabled",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@radio"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all the \"visible\" should be enabled to click",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.RadioButtonStepDefs.all_the_should_be_enabled_to_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all the radio buttons if they are enabled",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@radio"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type the \"valid\" key and click start",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definitions.LoginStepDefs.i_type_the_key_and_click_start(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of the \"Comments\" page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.LogoutStepDefs.i_am_at_the_top_of_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all the \"hidden\" should be enabled to click",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.RadioButtonStepDefs.all_the_should_be_enabled_to_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});